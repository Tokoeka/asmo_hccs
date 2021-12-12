import { cliExecute, equip, equippedItem, inHardcore, myFamiliar, useFamiliar } from "kolmafia";
import { $familiar, $item, $items, $slot, $slots, have } from "libram";
import { inMysClass, inMusClass, inMoxClass} from "./asmohccs-lib";

export class Outfit {
    equips: Map<Slot, Item>;
    familiar?: Familiar;

    /**
     * Construct an outfit object, for rapid equipping
     * @param equips Map of what to equip and where
     * @param familiar Optional familiar to use with outfit
     */
    constructor(equips: Map<Slot, Item>, familiar?: Familiar) {
        this.equips = equips;
        this.familiar = familiar;
    }

    dress(): void {
        if (this.familiar) useFamiliar(this.familiar);
        const targetEquipment = Array.from(this.equips.values());
        for (const slot of Slot.all()) {
            if (
                targetEquipment.includes(equippedItem(slot)) &&
                this.equips.get(slot) !== equippedItem(slot)
            )
                equip(slot, $item`none`);
        }

        for (const slot of $slots`weapon, off-hand, hat, back, shirt, pants, acc1, acc2, acc3, familiar, buddy-bjorn, crown-of-thrones`) {
            const equipment = this.equips.get(slot);
            if (equipment) equip(slot, equipment);
        }
    }

    /**
     * Identical to withOutfit; executes callback function with equipped outfit, and returns to original outfit
     * @param callback Function to execute
     */
    with<T>(callback: () => T): T {
        return withOutfit(this, callback);
    }

    /**
     * Makes the best outfit it can with what you've got
     * @param equips Map of what to equip and where; will use first item in array that it can, and willl not add things to outfit otherwise
     * @param familiar Optional familiar to use with outfit
     */
    static doYourBest(equips: Map<Slot, Item | Item[]>, familiar?: Familiar): Outfit {
        const returnValue = new Map<Slot, Item>();
        for (const [slot, itemOrItems] of equips.entries()) {
            const item = Array.isArray(itemOrItems)
                ? itemOrItems.find((item) => have(item))
                : itemOrItems;
            if (item) returnValue.set(slot, item);
        }
        return new Outfit(returnValue, familiar);
    }

    /**
     * Saves current outfit as an Outfit
     * @param withFamiliar Option to store current familiar as part of outfit
     */
    static current(withFamiliar = false): Outfit {
        const familiar = withFamiliar ? myFamiliar() : undefined;
        const slots = $slots`hat, shirt, back, weapon, off-hand, pants, acc1, acc2, acc3`;
        if (withFamiliar) slots.push($slot`familiar`);
        const outfitMap = new Map<Slot, Item>();
        for (const slot of slots) {
            const item = equippedItem(slot);
            if (item !== $item`none`) outfitMap.set(slot, item);
        }
        return new Outfit(outfitMap, familiar);
    }
}

/**
 * Execute callback while wearing given outfit
 * Then return to what you were previously wearing
 * @param outfit Outfit to use
 * @param callback Function to execute
 */
export function withOutfit<T>(outfit: Outfit, callback: () => T): T {
    const withFamiliar = outfit.familiar !== undefined;
    const cachedOutfit = Outfit.current(withFamiliar);
    outfit.dress();
    try {
        return callback();
    } finally {
        cachedOutfit.dress();
    }
}

export default function uniform(): void {
	if (inMoxClass()){
		cliExecute("retrocape robot");
	}
	else if (inMysClass()){
		cliExecute("retrocape heck");
	}
	else {
		cliExecute("retrocape vampire");
	}
    Outfit.doYourBest(
        new Map<Slot, Item | Item[]>([
            [$slot`hat`, 
			inMoxClass()
                ? $items`very pointy crown, Iunion Crown`
                : inMysClass()
					? $items`astral chapeau, Iunion Crown`
					: $item`Iunion Crown`],
            [$slot`shirt`, $items`LOV Eardigan, fresh coat of paint`],
            [$slot`pants`, $items`Cargo Cultist Shorts, old sweatpants`],
            [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
            [$slot`off-hand`, $item`familiar scrapbook`],
            [$slot`acc1`, $item`hewn moon-rune spoon`],
            [$slot`acc2`, $item`beach comb`],
            [$slot`acc3`, $items`battle broom, LOV Earrings, Powerful Glove`],
            [$slot`back`, $items`LOV Epaulettes, Unwrapped knock-off retro superhero cape ,vampyric cloake`],
        ])
    ).dress();
}

export function wireOutfit(): void {
    Outfit.doYourBest(
        new Map<Slot, Item | Item[]>([
            [$slot`hat`, $item`Iunion Crown`],
            [$slot`shirt`, $item`fresh coat of paint`],
            [$slot`pants`, $item`Cargo Cultist Shorts`],
            [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
            [$slot`off-hand`, $items`Abracandalabra, familiar scrapbook`],
            [$slot`acc1`, $item`Eight Days a Week Pill Keeper`],
            [$slot`acc2`, $item`Powerful Glove`],
            [$slot`acc3`, $item`Lil' Doctor™ bag`],
        ])
    ).dress();
}

export function moxieOutfit(): void {
    cliExecute("retrocape robot");
    Outfit.doYourBest(
        new Map<Slot, Item | Item[]>([
            [$slot`hat`, $item`very pointy crown`],
            [$slot`shirt`, $items`shoe ad T-shirt, fresh coat of paint`],
            [$slot`back`, $item`unwrapped knock-off retro superhero cape`],
            [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
            [$slot`pants`, $item`Cargo Cultist Shorts`],
            [$slot`acc1`, $item`Beach Comb`],
            [$slot`acc2`, $item`your cowboy boots`],
            [$slot`acc3`, $item`Retrospecs`],
        ])
    ).dress();
}

export function hpOutfit(): void {
    cliExecute("retrocape vampire");
    if (!have($item`wad of used tape`)) cliExecute("fold wad of used tape");
    Outfit.doYourBest(
        new Map<Slot, Item | Item[]>([
            [$slot`hat`, $item`extra-wide head candle, wad of used tape`],
            [$slot`weapon`, $item`dented scepter`],
            [$slot`off-hand`, $item`Fourth of May Cosplay Saber`],
            [$slot`shirt`, $items`shoe ad T-shirt, fresh coat of paint`],
            [$slot`back`, $items`vampyric cloake, unwrapped knock-off retro superhero cape`],
            [$slot`pants`, $item`Cargo Cultist Shorts`],
            [$slot`acc1`, $item`Powerful Glove`],
            [$slot`acc2`, $item`Retrospecs`],
            [$slot`acc3`, $item`Kremlin's Greatest Briefcase`],
            [$slot`familiar`, $item`miniature crystal ball`],
        ])
    ).dress();
}

export function muscleOutfit(): void {
    cliExecute("retrocape vampire");
    if (!have($item`wad of used tape`)) cliExecute("fold wad of used tape");
    Outfit.doYourBest(
        new Map<Slot, Item | Item[]>([
            [$slot`hat`, $item`wad of used tape`],
            [$slot`weapon`, $item`dented scepter`],
            [
                $slot`off-hand`,
                have($familiar`Disembodied Hand`)
                    ? $item`cosmetic football`
                    : $item`Fourth of May Cosplay Saber`,
            ],
            [$slot`shirt`, $items`shoe ad T-shirt, fresh coat of paint`],
            [$slot`back`, $item`unwrapped knock-off retro superhero cape`],
            [$slot`pants`, $item`Cargo Cultist Shorts`],
            [$slot`acc1`, $item`Brutal brogues`],
            [$slot`acc2`, $item`Retrospecs`],
            [$slot`acc3`, $item`Kremlin's Greatest Briefcase`],
            [
                $slot`familiar`,
                have($familiar`Disembodied Hand`)
                    ? $item`Fourth of May Cosplay Saber`
                    : $item`miniature crystal ball`,
            ],
        ]),
        have($familiar`Disembodied Hand`) ? $familiar`Disembodied Hand` : undefined
    ).dress();
}

export function mysticalityOutfit(): void {
    cliExecute("retrocape heck");
    Outfit.doYourBest(
        new Map<Slot, Item | Item[]>([
            [$slot`hat`, $items`astral chapeau, wad of used tape`],
            [$slot`weapon`, $item`weeping willow wand`],
            [$slot`off-hand`, $item`Fourth of May Cosplay Saber`],
            [$slot`back`, $item`unwrapped knock-off retro superhero cape`],
            [$slot`shirt`, $items`denim jacket, shoe ad T-shirt, fresh coat of paint`],
            [$slot`pants`, $items`cargo cultist shorts, pantogram pants`],
            [$slot`acc1`, $item`retrospecs`], //CHECK THIS
            [$slot`acc2`, $item`codpiece`],
            [$slot`acc3`, $item`battle broom`],
            [$slot`familiar`, $item`Abracandalabra`],
        ]),
        $familiar`Left-Hand Man`
    ).dress();
}

export function itemOutfit(): void {
    if (!have($item`wad of used tape`)) cliExecute("fold wad of used tape");
    Outfit.doYourBest(
        new Map<Slot, Item | Item[]>([
            [$slot`hat`, $item`wad of used tape`],
			[$slot`weapon`, $items`extra-large utility candle, runed taper candle, novelty sparkling candle`],
            [$slot`off-hand`, $item`Kramco Sausage-o-Matic™`],
            [$slot`back`, $items`vampyric cloake, protonic accelerator pack`],
            [$slot`acc1`, $item`Guzzlr tablet`],
            [$slot`acc2`, $item`gold detective badge`],
            [$slot`acc3`, $items`your cowboy boots, government-issued night-vision goggles`],
            [$slot`familiar`, $item`li'l ninja costume`],
        ]),
        $familiar`Trick-or-Treating Tot`
    ).dress();
}

export function hotresOutfit(): void {
    cliExecute("retrocape vampire hold");
    Outfit.doYourBest(
        new Map<Slot, Item | Item[]>([
            [$slot`hat`, $items`high-temperature mining mask, Iunion crown`],
            [$slot`back`, $item`unwrapped knock-off retro superhero cape`],
            [$slot`weapon`, $items`industrial fire extinguisher, Fourth of May Cosplay Saber`],
            [$slot`off-hand`, $items`meteorite guard, latte lovers member's mug`],
            [$slot`pants`, $items`lava-proof pants, pantogram pants`],
            [$slot`acc1`, $items`heat-resistant necktie, brutal brogues`],
            [$slot`acc2`, $item`heat-resistant gloves`],
            //[$slot`acc3`, $item`Kremlin's Greatest Briefcase`],
            [$slot`familiar`, $items`snow suit, cracker`],
        ]),
        $familiar`Exotic Parrot`
    ).dress();
}

export function noncombatOutfit(): void {
    Outfit.doYourBest(
        new Map<Slot, Item | Item[]>([
            [$slot`hat`, $item`very pointy crown`],
            [$slot`back`, $item`protonic accelerator pack`],
            [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
            [$slot`off-hand`, $items`rope, burning paper crane, familiar scrapbook`],
            //[$slot`pants`, $item`pantogram pants`],
            [$slot`acc1`, $item`Kremlin's Greatest Briefcase`],
            [$slot`acc2`, $item`codpiece`],
            [$slot`acc3`, $item`Brutal brogues`],
        ]),
        $familiar`Disgeist`
    ).dress();
}

export function famweightOutfit(): void {
    const familiarAndEquip = !inHardcore()
		? { fam: $familiar`Exotic Parrot`, equip: $item`snow suit`}
		: have($item`cracker`)
        ? { fam: $familiar`Exotic Parrot`, equip: $item`cracker` }
        : have($familiar`Baby Bugged Bugbear`)
        ? { fam: $familiar`Baby Bugged Bugbear`, equip: $item`bugged beanie` }
        : {
              fam: $familiar`Blood-Faced Volleyball`,
              equip: have($item`astral pet sweater`) ? $item`astral pet sweater` : $item`none`,
          };
    Outfit.doYourBest(
        new Map<Slot, Item | Item[]>([
			[$slot`hat`, $item`Daylight Shavings Helmet`],
            [$slot`weapon`, $item`Fourth of May Cosplay Saber`],
            [$slot`off-hand`, $items`rope, burning paper crane, familiar scrapbook`],
            [$slot`acc1`, $item`Beach Comb`],
            [$slot`acc2`, $item`Brutal brogues`],
            [$slot`acc3`, $item`hewn moon-rune spoon`],
            [$slot`familiar`, familiarAndEquip.equip],
        ]),
        familiarAndEquip.fam
    ).dress();
}

export function weaponOutfit(): void {
    if (!have($item`broken champagne bottle`)) cliExecute("fold broken champagne bottle");
    Outfit.doYourBest(
        new Map<Slot, Item | Item[]>([
            [$slot`hat`, $items`extra-wide head candle, seal-skull helmet`],
            [$slot`weapon`, $item`broken champagne bottle`],
            [$slot`off-hand`, $item`dented scepter`],
            [$slot`acc1`, $item`Brutal brogues`],
            [$slot`acc2`, $item`Kremlin's Greatest Briefcase`],
            [$slot`acc3`, $item`Powerful Glove`],
            [$slot`familiar`, $items`stick-knife of loathing, fish hatchet, mutant arm`],
        ]), //CHECK THIS
        $familiar`Disembodied Hand`
    ).dress();
}

export function spellOutfit(): void {
    Outfit.doYourBest(
        new Map<Slot, Item | Item[]>([
            [$slot`hat`, $items`sugar chapeau, astral chapeau, Hollandaise helmet`],
            [$slot`weapon`, $item`weeping willow wand`],
            [$slot`familiar`, $items`stick-knife of loathing, wrench`],
            [$slot`off-hand`, $item`abracandalabra`],
            //[$slot`pants`, $item`pantogram pants`],
            [$slot`acc1`, $item`Kremlin's Greatest Briefcase`],
            [$slot`acc2`, $item`powerful glove`],
            [$slot`acc3`, $item`battle broom`],
        ]),
        $familiar`Disembodied Hand`
    ).dress();
}
