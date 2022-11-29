import {
	availableAmount,
	buy,
	cliExecute,
	equip,
	getFuel,
	getWorkshed,
	haveEffect,
	itemAmount,
	myClass,
	use,
	useFamiliar,
} from "kolmafia";
import {
	$classes,
	$coinmaster,
	$effect,
	$familiar,
	$item,
	$location,
	$locations,
	$phylum,
	$skill,
	$slot,
	AutumnAton,
	CommunityService,
	get,
	have,
	Macro,
} from "libram";
import { universalWeightBuffs } from "./familiarweight";
import { advMacroAA, ensureEffect, horse } from "./asmohccs-lib";
import { noncombatOutfit } from "./outfit";
import { modTraceList } from "./modtrace";
import { fuelUp, geneTonic } from "./workshed";
import { moonTune } from "./spell";

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

/* function godLobster() {
	if (
		!have($effect`Silence of the God Lobster`) &&
		get("_godLobsterFights") < 3 &&
		have($item`God Lobster's Ring`)
	) {
		useFamiliar($familiar`God Lobster`);
		equip($slot`familiar`, $item`God Lobster's Ring`);
		uniform();
		if ($classes`Sauceror, Accordion Thief, Pastamancer`.includes(myClass())) {
			equip($slot`hat`, $item`Daylight Shavings Helmet`);
		}
		defaultKill.setAutoAttack();
		heal();
		setChoice(1310, 2);
		visitUrl("main.php?fightgodlobster=1");
		runCombat(defaultKill.toString());
		visitUrl("choice.php");
		runChoice(-1);
	}
} */

function testPrep() {
	noncombatOutfit.dress();
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

function pirateDNA(): void {
	if (
		haveEffect($effect`Human-Pirate Hybrid`) ||
		getWorkshed() !== $item`Little Geneticist DNA-Splicing Lab`
	) {
		return;
	}
	// get pirate DNA and make a gene tonic
	if (get("dnaSyringe") !== $phylum`pirate` && !have($item`Gene Tonic: Pirate`)) {
		equip($slot`acc1`, $item`Kremlin's Greatest Briefcase`);
		useFamiliar($familiar`Ms. Puck Man`);
		equip($slot`familiar`, $item`tiny stillsuit`);
		advMacroAA(
			$location`Pirates of the Garbage Barges`,
			Macro.item($item`DNA extraction syringe`).skill($skill`Snokebomb`),
			() => {
				return get("dnaSyringe") !== $phylum`pirate`;
			}
		);
		geneTonic($phylum`pirate`);
	} else {
		throw "Something went wrong getting pirate DNA.";
	}
}

function fallBot(): void {
	if (AutumnAton.available()) {
		AutumnAton.sendTo($locations`The Dire Warren, Noob Cave`, true);
	}
}

export default function noncombatTest(): void {
	castBuffs();
	moonTune();
	pirateDNA();
	fallBot();
	//godLobster();
	testPrep();
	if (predictor() > 1) throw "Failed to cap noncombat";
	modTraceList("combat rate");
}
