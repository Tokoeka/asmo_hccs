import {
	cliExecute,
	create,
	equip,
	handlingChoice,
	myFamiliar,
	runChoice,
	useFamiliar,
	visitUrl,
} from "kolmafia";
import {
	$effect,
	$familiar,
	$item,
	$location,
	$monster,
	$skill,
	$slot,
	BeachComb,
	get,
	have,
	Macro,
	set,
	Witchess,
} from "libram";
import { defaultKill } from "./asmohccs-macros";
import { advMacroAA, ensureEffect, horse, setChoice } from "./asmohccs-lib";
import { modTraceList } from "./modtrace";
import uniform, { famweightOutfit } from "./outfit";
import { resources } from ".";

export function universalWeightBuffs(): void {
	ensureEffect($effect`Empathy`);
	ensureEffect($effect`Leash of Linguini`);
	ensureEffect($effect`Blood Bond`);
}

export function universalWeightEffects(): void {
	ensureEffect($effect`Billiards Belligerence`);

	if (!get("_clanFortuneBuffUsed")) cliExecute("fortune buff familiar");
	/* if (!get("_freePillKeeperUsed")) {
		cliExecute("pillkeeper familiar");
	} */
	if (!have($effect`Puzzle Champ`)) {
		cliExecute("witchess");
	}

	BeachComb.tryHead($effect`Do I Know You From Somewhere?`);
}

function gearAndUncommonBuffs() {
	if (!get("_clanFortuneBuffUsed")) cliExecute("fortune buff familiar");
	if (have($item`burning newspaper`) && !have($item`rope`)) create(1, $item`burning paper crane`);
	if (have($item`short stack of pancakes`)) ensureEffect($effect`Shortly Stacked`);
	if (have($item`green candy heart`)) ensureEffect($effect`Heart of Green`);
	useFamiliar($familiar`Baby Bugged Bugbear`);
	visitUrl("arena.php");

	//removed due to Meat buff being better for aftercore than 1 turn saved
	/*if (!get("_madTeaParty")) {
		visitUrl("clan_viplounge.php?action=lookingglass&whichfloor=2");
		cliExecute("acquire sombrero-mounted sparkler");
		ensureEffect($effect`You Can Really Taste The Dormouse`);
	}*/
}

function familiarStuff() {
	while (
		get("_shortOrderCookCharge") < 11 &&
		5 - Witchess.fightsDone() > 11 - get("_shortOrderCookCharge")
	) {
		useFamiliar($familiar`Shorter-Order Cook`);
		equip($slot`familiar`, $item`tiny stillsuit`);
		uniform();
		defaultKill.setAutoAttack();
		Witchess.fightPiece($monster`Witchess Bishop`);
	}
	while (
		get("garbageFireProgress") < 30 &&
		5 - Witchess.fightsDone() > 30 - get("garbageFireProgress")
	) {
		useFamiliar($familiar`Garbage Fire`);
		equip($slot`familiar`, $item`tiny stillsuit`);
		uniform();
		defaultKill.setAutoAttack();
		Witchess.fightPiece($monster`Witchess Bishop`);
	}
}

function takeAShower() {
	useFamiliar($familiar`Ms. Puck Man`);
	horse("dark");
	uniform([$item`Fourth of May Cosplay Saber`, $slot`weapon`]);
	setChoice(1387, 3);
	if (
		get("_meteorShowerUses") < 5 &&
		!have($effect`Meteor Showered`) &&
		get(`_saberForceUses`) < 5
	) {
		advMacroAA(
			$location`The Dire Warren`,
			Macro.skill($skill`Meteor Shower`).skill($skill`Use the Force`),
			1,
			() => {
				if (handlingChoice()) runChoice(3);
			}
		);
		set("_meteorShowerUses", 1 + get("_meteorShowerUses"));
		resources.saberForces.push($effect`Meteor Showered`);
	}
}

function testPrep() {
	famweightOutfit.dress();
	if (myFamiliar() === $familiar`Comma Chameleon`) {
		visitUrl("inv_equip.php?which=2&action=equip&whichitem=6102&pwd");
		visitUrl("charpane.php");
	}
	if (have($item`silver face paint`)) ensureEffect($effect`Robot Friends`);
	/*while (have($item`love song of icy revenge`) && !have($effect`Cold Hearted`, 20)) {
    use($item`love song of icy revenge`);
  }
  while (have($item`pulled blue taffy`) && !have($effect`Blue Swayed`, 50)) {
    use($item`pulled blue taffy`);
  }*/
}

export default function familiarTest(): void {
	universalWeightBuffs();
	universalWeightEffects();
	familiarStuff();
	gearAndUncommonBuffs();
	takeAShower();
	testPrep();
	modTraceList("familiar weight");
}
