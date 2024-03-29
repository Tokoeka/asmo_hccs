import {
	availableAmount,
	canEquip,
	cliExecute,
	create,
	eat,
	equip,
	handlingChoice,
	haveEffect,
	inHardcore,
	itemAmount,
	knollAvailable,
	myClass,
	myHp,
	myLevel,
	myMaxhp,
	myMp,
	mySign,
	numericModifier,
	retrieveItem,
	runChoice,
	storageAmount,
	takeStorage,
	use,
	useFamiliar,
	useSkill,
	visitUrl,
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
	$slot,
	get,
	have,
	Macro,
	set,
} from "libram";
import { resources } from ".";
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
import { delevel } from "./asmohccs-macros";
import { modTraceList } from "./modtrace";
import uniform, { OutfitPlan, spellOutfit } from "./outfit";

//const predictor = () => CommunityService.SpellDamage.prediction;
//TODO - Set min turncount we expect SpellDmg to meet?

function castBuffs() {
	ensureEffect($effect`Simmering`);
	$effects`Pisces in the Skyces, Carol of the Hells, Arched Eyebrow of the Archmage, Song of Sauce, We're All Made of Starfish, Mental A-cue-ity`.forEach(
		(effect) => ensureEffect(effect)
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

export function moonTune(): void {
	// Tune moon sign to Platypus
	const desertAccessItem = knollAvailable() ? $item`bitchin' meatcar` : $item`Desert Bus pass`;
	if (!have(desertAccessItem)) {
		cliExecute(`acquire ${desertAccessItem.name}`);
	}
	visitUrl("place.php?whichplace=desertbeach&action=db_nukehouse");

	if (!get("moonTuned") && mySign() !== `Platypus`) {
		if (get("_campAwaySmileBuffs") === 0) {
			visitUrl("place.php?whichplace=campaway&action=campaway_sky");
		}

		// Unequip spoon.
		equip($slot`acc1`, $item`Eight Days a Week Pill Keeper`);
		equip($slot`acc2`, $item`Powerful Glove`);
		equip($slot`acc3`, $item`Lil' Doctor™ bag`);

		// Actually tune the moon.
		visitUrl("inv_use.php?whichitem=10254&pwd&doit=96&whichsign=4");
	}
}

function deepDarkVisions() {
	//horse("pale");
	new OutfitPlan(
		{
			hat: $item`Iunion Crown`,
			shirt: $items`denim jacket`,
			back: $item`unwrapped knock-off retro superhero cape`,
			weapon: $item`Fourth of May Cosplay Saber`,
			offhand: $item`familiar scrapbook`,
			pants: $item`Cargo Cultist Shorts`,
			acc1: $item`your cowboy boots`,
		},
		{ familiar: $familiar`Exotic Parrot`, modes: { retrocape: ["vampire", "hold"] } }
	).dress();
	if (!have($item`astral pet sweater`) && inHardcore()) {
		resources.clipArt($item`box of Familiar Jacks`, true);
		use(1, $item`box of Familiar Jacks`);
	}
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
		equip($slot`familiar`, $item`tiny stillsuit`);
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
	useFamiliar($familiar`Ms. Puck Man`);
	if (
		//No longer need Lava-proof Pants /  heat-resitant gloves to cap hot res test
		get("_meteorShowerUses") < 5 &&
		!have($effect`Meteor Showered`) &&
		get(`_saberForceUses`) < 5
	) {
		setChoice(1387, 3);
		advMacroAA(
			$location`The Dire Warren`,
			Macro.skill($skill`Meteor Shower`).skill($skill`Use the Force`),
			1,
			() => {
				//visitUrl("choice.php");
				if (handlingChoice()) runChoice(3);
			}
		);
		set("_meteorShowerUses", 1 + get("_meteorShowerUses"));
		resources.saberForces.push($effect`Meteor Showered`);
	}
}

function testPrep() {
	useFamiliar($familiar`Left-Hand Man`);
	if (!inHardcore()) {
		const meteor = $items`meteorite ring, meteorite fragment, meteorite earring`.find((item) =>
			have(item)
		);
		if (meteor) {
			moonTune();
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
	spellOutfit.dress();
	if (availableAmount($item`astral pilsner`) > 3) {
		ensureEffect($effect`Ode to Booze`);
		resources.consumeTo(availableAmount($item`astral pilsner`) - 3, $item`astral pilsner`);
	}
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
