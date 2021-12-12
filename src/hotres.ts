import {
    buy,
    cliExecute,
    create,
    eat,
    equip,
    getFuel,  
    handlingChoice,
    haveEffect,
	knollAvailable,
    maximize,
	myClass,
    myHp,
    myMaxhp,
    myMp,
    numericModifier,
    runChoice,
    use,
    useFamiliar,
    useSkill,
    visitUrl,
} from "kolmafia";
import { $class, $effect, $familiar, $item, $location, $monster, $skill, $slot, BeachComb, get, have, set, Macro } from "libram";
import { universalWeightBuffs } from "./familiarweight";
import { advMacroAA, ensureEffect, fuelUp, horse, horsery, modTraceList, mapMacro } from "./asmohccs-lib";
import { candyblast, defaultKill, delevel, easyFight } from "./asmohccs-macros";
import uniform, { hotresOutfit } from "./outfits";
const predictor = () => 60 - numericModifier("hot resistance");

function castBuffs() {
    universalWeightBuffs();

    BeachComb.tryHead($effect`Hot-Headed`);

    /*if (!have($item`tenderizing hammer`)) {
        buy(1, $item`tenderizing hammer`);
    }
    cliExecute("smash * ratty knitted cap");
    cliExecute("smash * red-hot sausage fork");
    cliExecute("smash * smoldering bagel punch");
    if (!have($effect`Sleazy Hands`)) {
        if (!have($item`lotion of sleaziness`)) create(1, $item`lotion of sleaziness`);
        if (have($item`lotion of sleaziness`)) use(1, $item`lotion of sleaziness`);
    }
    if (!have($effect`Flame-Retardant Trousers`) && have($item`hot powder`)) {
        use(1, $item`hot powder`);
    } */

    ensureEffect($effect`Elemental Saucesphere`);
    ensureEffect($effect`Astral Shell`);
    ensureEffect($effect`Feeling Peaceful`);
    if (have($item`scroll of Protection from Bad Stuff`)) {
        ensureEffect($effect`Protection from Bad Stuff`);
    }

    if (get("latteUnlocks").includes("chili") && get("_latteRefillsUsed") < 3) {
        const latte = `pumpkin chili ${get("latteUnlocks").includes("carrot") ? "carrot " : "vanilla "}`;
        cliExecute(`latte refill ${latte}`);
    }

    if (!have($item`meteorite guard`) && have($item`metal meteoroid`) && !get("latteUnlocks").includes("chili")) {
        create(1, $item`meteorite guard`);
    }

    if (!have($effect`Puzzle Champ`)) {
        cliExecute("witchess");
    }

	if (myClass() === $class`seal clubber`){
		ensureEffect($effect`Blessing of the Bird`);
	}
}

function thisFireIsOutOfControl() { //Don't need to spend a Map for High-Temp Mining Mask when we can Foam ourselves
    if (get("_saberForceUses") < 5 && !have($effect`Fireproof Foam Suit`)) {
        uniform();
        equip($slot`off-hand`, $item`industrial fire extinguisher`);
        useFamiliar($familiar`Ms. Puck Man`);
		horse(`dark`);
        advMacroAA(
            $location`Noob Cave`,
            Macro.skill($skill`Fire Extinguisher: Foam Yourself`).skill($skill`Use the Force`),
            () => (haveEffect($effect`Fireproof Foam Suit`) < 1 && get(`_saberForceUses`) < 3),
            () => {
                visitUrl("choice.php");
                runChoice(3);
				if (!haveEffect($effect`Fireproof Foam Suit`)){
					throw "failed to Get Fireproof Foam Suit, please Help";
				}
            }
        );
		set(`_fireExtinguisherCharge`, 90);
    }
}

function moonTune() {
	// Tune moon sign to Platypus
	const desertAccessItem = knollAvailable()
            ? $item`bitchin' meatcar`
            : $item`Desert Bus pass`;
    if (!have(desertAccessItem)) {
        cliExecute(`acquire ${desertAccessItem.name}`);
    }
    visitUrl("place.php?whichplace=desertbeach&action=db_nukehouse");

	if (!get("moonTuned")) {
		if (get("_campAwaySmileBuffs") === 0) {
		  visitUrl("place.php?whichplace=campaway&action=campaway_sky");
		}
	
		// Unequip spoon.
		equip($slot`acc1`, $item`Eight Days a Week Pill Keeper`);
		equip($slot`acc2`, $item`Powerful Glove`);
		equip($slot`acc3`, $item`Lil' Doctor™ bag`);
	
		// Actually tune the moon.
		visitUrl("inv_use.php?whichitem=10254&doit=96&whichsign=4");
	  }
}

function testPrep() {
    hotresOutfit();
	horse("pale");
    const improvements = [
        () => ensureEffect($effect`Amazing`),
		() => {
			if (have($item`rainbow glitter candle`)) {
				use($item`rainbow glitter candle`)
			}
		},
    ];
    for (const improvement of improvements) {
        if (predictor() > 1) improvement();
    }
}

export default function hotTest(): number {
    castBuffs();
    thisFireIsOutOfControl();
	moonTune();
    testPrep();
	modTraceList("hot resistance");
    return predictor();
}
