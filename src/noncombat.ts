import {
	availableAmount,
	buy,
	cliExecute,
	equip,
	getFuel,
	getWorkshed,
	haveEffect,
	itemAmount,
	knollAvailable,
	myClass,
	mySign,
	runChoice,
	runCombat,
	use,
	useFamiliar,
	visitUrl,
} from "kolmafia";
import {
	$classes,
	$coinmaster,
	$effect,
	$familiar,
	$item,
	$slot,
	CommunityService,
	get,
	have,
} from "libram";
import { universalWeightBuffs } from "./familiarweight";
import { defaultKill } from "./asmohccs-macros";
import { ensureEffect, heal, horse, setChoice } from "./asmohccs-lib";
import uniform, { noncombatOutfit } from "./outfits";
import { modTraceList } from "./modtrace";
import { fuelUp } from "./workshed";

const predictor = () => CommunityService.Noncombat.prediction;

function castBuffs() {
	universalWeightBuffs();
	ensureEffect($effect`Smooth Movements`);
	ensureEffect($effect`Feeling Lonely`);
	equip($slot`acc3`, $item`Powerful Glove`);
	ensureEffect($effect`Invisible Avatar`);

	if ($classes`Pastamancer, Disco Bandit`.includes(myClass())) {
		ensureEffect($effect`Blessing of the Bird`);
	}

	if (haveEffect($effect`Fat Leon's Phat Loot Lyric`))
		cliExecute("shrug fat leon's phat loot lyric");
	ensureEffect($effect`The Sonata of Sneakiness`);

	if (!get("_olympicSwimmingPool")) cliExecute("swim sprints");

	while (getFuel() < 37 && getWorkshed() === $item`Asdon Martin keyfob`) fuelUp();
	if (!have($effect`Driving Stealthily`) && getWorkshed() === $item`Asdon Martin keyfob`) {
		cliExecute("asdonmartin drive stealthily");
	}

	horse("dark");
}

function godLobster() {
	if (
		!have($effect`Silence of the God Lobster`) &&
		get("_godLobsterFights") < 3 &&
		have($item`God Lobster's Ring`)
	) {
		useFamiliar($familiar`God Lobster`);
		equip($slot`familiar`, $item`God Lobster's Ring`);
		uniform();
		/*if ($classes`Sauceror, Accordion Thief, Pastamancer`.includes(myClass())) {
			equip($slot`hat`, $item`Daylight Shavings Helmet`);
		}*/
		defaultKill.setAutoAttack();
		heal();
		setChoice(1310, 2);
		visitUrl("main.php?fightgodlobster=1");
		runCombat(defaultKill.toString());
		visitUrl("choice.php");
		runChoice(-1);
	}
}

function testPrep() {
	noncombatOutfit();
	const improvements = [
		() => use($item`shady shades`),
		() => {
			if (!have($effect`Gummed Shoes`)) {
				if (availableAmount($item`cop dollar`) < 10) cliExecute("detective solver.ash");
				buy($coinmaster`Precinct Materiel Division`, 1, $item`shoe gum`);
				use($item`shoe gum`);
			}
		},
		() => {
			if (itemAmount($item`squeaky toy rose`) > 0) {
				use($item`squeaky toy rose`);
			}
		},
		() => {
			if (itemAmount($item`worst candy`) > 0) {
				ensureEffect($effect`Predjudicetidigitation`);
			}
		},
	];

	for (const improvement of improvements) {
		if (predictor() > 1) improvement();
	}
}

function moonTune() {
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
		equip($slot`acc3`, $item`Lil' Doctor??? bag`);

		// Actually tune the moon.
		visitUrl("inv_use.php?whichitem=10254&pwd&doit=96&whichsign=4");
	}
}

export default function noncombatTest(): void {
	castBuffs();
	moonTune();
	godLobster();
	testPrep();
	if (predictor() > 1) throw "Failed to cap noncombat";
	modTraceList("combat rate");
}
