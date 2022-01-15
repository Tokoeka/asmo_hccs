import {
    abort,
    availableAmount,
    cliExecute,
    gametimeToInt,
    myFullness,
    myInebriety,
    myLevel,
    myPathId,
    mySpleenUse,
    myTurncount,
    print,
    setAutoAttack,
    visitUrl,
} from "kolmafia";
import { $item, $location, $monster, $skill, $slot, get, have, set, PropertiesManager, } from "libram";
import coilWire from "./coil wire";
import familiarTest from "./familiarweight";
import hotTest from "./hotres";
import itemTest from "./item";
import levelUp from "./level";
import noncombatTest from "./noncombat";
import { convertMilliseconds, PropertyManager, Test, tests, testWrapper } from "./asmohccs-lib";
import spellTest from "./spell";
import { HPTest, moxTest, muscleTest, mystTest } from "./stattests";
import weaponTest from "./weapon";
import { globalOptions } from "./options";
import { ResourceTracker } from "./resources";


export function main(argString = ""): void{
	const args = argString.split(" ");
	for (const arg of args) {
    	if (arg.match(/level/)) {
      		globalOptions.levelAggressively = true;
    	} else if (arg.length > 0) {
      		print(`Invalid argument ${arg} passed. Run garbo help to see valid arguments.`, "red");
      		return;
    	}
	}

	const propertyManager = new PropertiesManager();

	propertyManager.set({
    	autoSatisfyWithNPCs: true,
    	autoSatisfyWithCoinmasters: true,
		customCombatScript: "twiddle",
    	battleAction: "custom combat script",
    	hpAutoRecovery: 0.6,
    	hpAutoRecoveryTarget: 0.95,
    	requireBoxServants: false,
		dontStopForCounters: true,
		//logPreferenceChange: false,
	});

	//preamble
	if (myPathId() !== 25) abort();
	visitUrl("council.php");
	//cliExecute("ccs twiddle");

	const startTime = gametimeToInt();
	try {
    	testWrapper("wire-coiling", Test.COIL_WIRE, coilWire);
	    if (myLevel() < 15) levelUp(); //want to make sure levelling script completes if it breaks mid-script
    	testWrapper("muscle", Test.MUS, muscleTest);
	    testWrapper("moxie", Test.MOX, moxTest);
    	testWrapper("HP", Test.HP, HPTest);
	    testWrapper("mysticality", Test.MYS, mystTest);
    	testWrapper("weapon damage", Test.WEAPON, weaponTest);
	    testWrapper("spell damage", Test.SPELL, spellTest);
		testWrapper("noncombat", Test.NONCOMBAT, noncombatTest);
	    testWrapper("hot res", Test.HOT_RES, hotTest); 
    	testWrapper("familiar", Test.FAMILIAR, familiarTest); 
	    testWrapper("item", Test.ITEM, itemTest);
	} finally {
    	tests.forEach((testDuration) => {
        	print(
            `We expected the ${testDuration.testName} test to take ${testDuration.turnPrediction} turns, and it cost ${testDuration.turnCost} turns.`,
            "blue"
        	);
    	});
    	print(
        	`This loop took ${convertMilliseconds(
            gametimeToInt() - startTime
        	)}, assuming it ran contiguously, for a 1 day, ` +
        	(myTurncount() - 1) +
        	` turn HCCS run. Organ use was ` +
        	myFullness() +
        	`/` +
        	myInebriety() +
        	`/` +
        	mySpleenUse() +
        	`. I drank ` +
        	(6 - availableAmount($item`astral pilsner`)) +
        	` Astral Pilsners. Otherwise, this run of the program lasted that much time. Hope whatever number you see is good!`,
        	"red"
    	);

    	setAutoAttack(0);
    	PropertyManager.resetAll();
	}
}

