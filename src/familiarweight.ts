import {
    cliExecute,
    create,
    familiarWeight,
    myFamiliar,
    runChoice,
    use,
    useFamiliar,
    visitUrl,
    weightAdjustment,
} from "kolmafia";
import {
    $effect,
    $familiar,
    $item,
    $location,
    $monster,
    $skill,
	BeachComb,
    get,
    have,
    Macro,
    set,
    Witchess,
} from "libram";
import { defaultKill } from "./asmohccs-macros";
import { advMacroAA, ensureEffect, horse, modTraceList, setChoice } from "./asmohccs-lib";
import uniform, { famweightOutfit } from "./outfits";

export function universalWeightBuffs(): void {
    ensureEffect($effect`Empathy`);
    ensureEffect($effect`Leash of Linguini`);
    ensureEffect($effect`Blood Bond`);
}

export function universalWeightEffects(): void {
    ensureEffect($effect`Billiards Belligerence`);

    if (!get("_clanFortuneBuffUsed")) cliExecute("fortune buff familiar");
    if (!get("_freePillKeeperUsed")) {
        cliExecute("pillkeeper familiar");
    }
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
        uniform();
        defaultKill.setAutoAttack();
        Witchess.fightPiece($monster`Witchess Bishop`);
    }
    while (
        get("garbageFireProgress") < 30 &&
        5 - Witchess.fightsDone() > 30 - get("garbageFireProgress")
    ) {
        useFamiliar($familiar`Garbage Fire`);
        uniform();
        defaultKill.setAutoAttack();
        Witchess.fightPiece($monster`Witchess Bishop`);
    }
}

function takeAShower() {
    useFamiliar($familiar`Ms. Puck Man`);
    horse("dark");
    uniform();
    setChoice(1387, 3);
    if (get("_meteorShowerUses") < 5 && !have($effect`Meteor Showered`) && get(`_saberForceUses`) < 5) {
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
    famweightOutfit();
    if (have($item`silver face paint`)) ensureEffect($effect`Robot Friends`);
}

export default function familiarTest(): number {
    universalWeightBuffs();
	universalWeightEffects();
    familiarStuff();
    gearAndUncommonBuffs();
    takeAShower();
    testPrep();
	modTraceList("familiar weight");
    return 60 - Math.floor((familiarWeight(myFamiliar()) + weightAdjustment()) / 5);
}
