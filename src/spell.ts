import {
    availableAmount,
    cliExecute,
    create,
    eat,
    haveEffect,
    inHardcore,
    maximize,
    myClass,
    myHp,
    myMaxhp,
    myLevel,
    myMp,
    numericModifier,
    runChoice,
    use,
    useFamiliar,
    useSkill,
    visitUrl,
	retrieveItem,
	canEquip,
	storageAmount,
	itemAmount,
	takeStorage,
} from "kolmafia";
import {
    $class,
    $effect,
    $effects,
    $familiar,
    $item,
    $items,
    $location,
    $skill,
    CommunityService,
    get,
    have,
    Macro,
    set,
} from "libram";
import {
    advMacroAA,
    chefstaves,
    ensureEffect,
    ensureInnerElf,
    fightSausageIfAble,
    horse,
    setChoice,
    unequip,
    useDefaultFamiliar,
} from "./asmohccs-lib";
import { delevel, easyFight } from "./asmohccs-macros";
import { modTraceList } from "./modtrace";
import uniform, { spellOutfit } from "./outfits";

const predictor = () => CommunityService.SpellDamage.prediction;

function castBuffs() {
    ensureEffect($effect`Simmering`);
    $effects`Pisces in the Skyces, Carol of the Hells, Arched Eyebrow of the Archmage, 
        Song of Sauce, We're All Made of Starfish, Mental A-cue-ity`.forEach((effect) =>
        ensureEffect(effect)
    );

    if (
        !get("_cargoPocketEmptied") /*&&
        !$items`sizzling desk bell, frost-rimed desk bell, uncanny desk bell, nasty desk bell, greasy desk bell`.some(
            (item) => getSaleValue(item) > 4 * get("valueOfAdventure")
        )*/
    ) {
        cliExecute("cargo 177");
        ensureEffect($effect`Sigils of Yeg`);
    }

    if (availableAmount($item`LOV Elixir #6`) > 0) ensureEffect($effect`The Magic of LOV`);

    visitUrl("shop.php?whichshop=lathe");
    if (availableAmount($item`flimsy hardwood scraps`) > 0) {
        create(1, $item`weeping willow wand`);
    }

    if (
        inHardcore() ||
        $items`meteorite necklace, meteorite ring, meteorite fragment, meteorite earring`.every(
            (item) => !have(item)
        )
    ) {
        cliExecute("Briefcase.ash enchantment spell");
    }

	/*if (!get("_madTeaParty")) {
        visitUrl("clan_viplounge.php?action=lookingglass&whichfloor=2");
        cliExecute("acquire mariachi hat");
        ensureEffect($effect`Full Bottle in front of Me`);
    }*/

    useSkill(1, $skill`Spirit of Cayenne`);

    if (availableAmount($item`flask of baconstone juice`) > 0) {
        ensureEffect($effect`Baconstoned`);
    }

    if (myClass() === $class`Sauceror` && !get("_barrelPrayer")) {
        cliExecute("barrelprayer buff");
    }
}

function deepDarkVisions() {
    //horse("pale");
    useFamiliar($familiar`Exotic Parrot`);
    if (!have($item`astral pet sweater`) && get("tomeSummons") < 3 && inHardcore()) {
        create(1, $item`box of Familiar Jacks`);
        use(1, $item`box of Familiar Jacks`);
    }

    maximize("spooky res", false);
    while (
        have($skill`Deep Dark Visions`) &&
        !haveEffect($effect`Visions of the Deep Dark Deeps`)
    ) {
        if (myMp() < 20) {
            create(1, $item`magical sausage`);
            eat(1, $item`magical sausage`);
        }
        while (myHp() < myMaxhp()) {
            useSkill(1, $skill`Cannelloni Cocoon`);
        }
        if (myMp() < 100) {
            create(1, $item`magical sausage`);
            eat(1, $item`magical sausage`);
        }
        if (Math.round(numericModifier("spooky resistance")) < 10) {
            ensureEffect($effect`Does It Have a Skull In There??`);
            if (Math.round(numericModifier("spooky resistance")) < 10) {
                throw "Not enough spooky res for Deep Dark Visions.";
            }
        }
        useSkill(1, $skill`Deep Dark Visions`);
    }
}

function fingies() {
    if (
        !have($effect`Saucefingers`) &&
        myClass() === $class`Pastamancer` &&
        myLevel() >= 15 &&
        have($familiar`Mini-Adventurer`)
    ) {
        useFamiliar($familiar`Mini-Adventurer`);
        horse("dark");
        uniform();
        setChoice(768, 4);
        advMacroAA(
            $location`The Dire Warren`,
            Macro.skill($skill`Feel Hatred`),
            () => !have($effect`Saucefingers`)
        );
    }
}

function shower() {
    useFamiliar($familiar`ms. puck man`);
    /*if (!have($effect`Meteor Showered`) && get("_meteorShowerUses") < 5) {
        uniform();
        setChoice(1387, 3);

        mapMacro(
            $location`LavaCo™ Lamp Factory`,
            $monster`factory worker (female)`,
            Macro.skill($skill`Meteor Shower`).skill($skill`Use the Force`)
        );
        if (handlingChoice()) runChoice(-1);
        set("_meteorShowerUses", 1 + get("_meteorShowerUses"));
        set("mappingMonsters", false);
    }*/
	if ( //No longer need Lava-proof Pants /  heat-resitant gloves to cap hot res test
        get("_meteorShowerUses") < 5 &&
        !have($effect`Meteor Showered`) &&
        get(`_saberForceUses`) < 5
    ) {
        advMacroAA(
            $location`The Dire Warren`,
            Macro.skill($skill`Meteor Shower`).skill($skill`Use the Force`),
            1,
            () => {
                visitUrl("choice.php");
                runChoice(3);
            }
        );
        set("_meteorShowerUses", 1 + get("_meteorShowerUses"));
    }
}

function testPrep() {
    useFamiliar($familiar`left-hand man`);
	if (!inHardcore()) {
        const meteor = $items`meteorite ring, meteorite fragment, meteorite earring`.find((item) =>
            have(item)
        );
        if (meteor) {
            unequip(meteor);
            retrieveItem(1, $item`tenderizing hammer`);
            retrieveItem(1, $item`jewelry-making pliers`);
            cliExecute(`smash ${meteor}`);
            cliExecute(`make ${$item`meteorite necklace`}`);
        }

        if (
            canEquip($item`Staff of the Roaring Hearth`) &&
            storageAmount($item`Staff of the Roaring Hearth`) >= 1 &&
            itemAmount($item`Staff of the Roaring Hearth`) === 0
        ) {
            takeStorage($item`Staff of the Roaring Hearth`, 1);
        } else if (chefstaves.every((staff) => itemAmount(staff) === 0)) {
            const staff = chefstaves.find((chefstave) => storageAmount(chefstave) >= 1);
            if (staff) takeStorage(staff, 1);
        }
    }
    spellOutfit();
}

function getToxic() {
    uniform();
    useDefaultFamiliar();
    fightSausageIfAble($location`The Toxic Teacups`, Macro.step(delevel).attack().repeat());
}

export default function spellTest(): void {
    castBuffs();
    fingies();
    deepDarkVisions();
    getToxic();
    ensureInnerElf();
    shower();
    testPrep();
    modTraceList("spell damage");
    modTraceList("spell damage percent");
}
