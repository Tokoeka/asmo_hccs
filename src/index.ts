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
    toItem,
    visitUrl,
} from "kolmafia";
import { $item, CommunityService, get } from "libram";
import coilWire from "./coil wire";
import familiarTest from "./familiarweight";
import hotTest from "./hotres";
import itemTest from "./item";
import levelUp from "./level";
import noncombatTest from "./noncombat";
import { convertMilliseconds, PropertyManager } from "./asmohccs-lib";
import spellTest from "./spell";
import { HPTest, moxTest, muscleTest, mystTest } from "./stattests";
import weaponTest from "./weapon";

const assertCompleted = (action: string, warning: string) => {
    if (action === "failed") throw new Error(warning);
};

//preamble
if (myPathId() !== 25) abort();
visitUrl("council.php");
cliExecute("ccs twiddle");

PropertyManager.set({
    customCombatScript: "twiddle",
    battleAction: "custom combat script",
    dontStopForCounters: true,
    //logPreferenceChange: false,
});
const startTime = gametimeToInt();
try {
    assertCompleted(CommunityService.CoilWire.run(coilWire, false, 60), "Failed to Coil Wire");
    if (myLevel() < 15) levelUp(); //want to make sure levelling script completes if it breaks mid-script
    assertCompleted(
        CommunityService.Muscle.run(muscleTest, false, 1),
        "Failed to cap Muscle test!"
    );
	assertCompleted(CommunityService.Moxie.run(moxTest, false, 1), "Failed to cap moxie test!");
	assertCompleted(CommunityService.HP.run(HPTest, false, 1), "Failed to cap HP test!");
    assertCompleted(
        CommunityService.Mysticality.run(mystTest, false, 1),
        "Failed to cap Mysticality test!"
    );
	assertCompleted(
        CommunityService.WeaponDamage.run(weaponTest, false, 1),
        "Failed to cap Weapon Damage test!"
    );
    assertCompleted(
        CommunityService.SpellDamage.run(spellTest, false, 30),
        "Failed to perform Spell Damage test!"
    );
    assertCompleted(
        CommunityService.Noncombat.run(noncombatTest, false, 1),
        "Failed to cap NC test!"
    );
	assertCompleted(CommunityService.HotRes.run(hotTest, false, 1), "Failed to cap Hot Res test!");
    assertCompleted(
        CommunityService.FamiliarWeight.run(familiarTest, false, 30),
        "Failed to perform Familiar test!"
    );
	assertCompleted(CommunityService.BoozeDrop.run(itemTest, false, 1), "Failed to cap Item test!");
    
} finally {
    for (const [name, { predictedTurns, turnCost }] of Object.entries(CommunityService.log)) {
        const truePrediction = name === "Make Sausage" ? predictedTurns + 1 : predictedTurns;
        print(
            `It took us ${
                turnCost ? `${turnCost} turns ` : ""
            }to do ${name}, and we predicted it would take ${truePrediction} turns.`,
            "blue"
        );
    }
    print(
        `This loop took ${convertMilliseconds(
            gametimeToInt() - startTime
        )}, assuming it ran contiguously, for a 1 day, ` +
		(myTurncount()) +
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
    if (["food", "booze"].includes(get("_questPartyFairQuest"))) {
        const partyFairInfo = get("_questPartyFairProgress").split(" ");
        print(
            `Gerald/ine wants ${partyFairInfo[0]} ${toItem(partyFairInfo[1]).plural}, please!`,
            "red"
        );
    }

    CommunityService.donate();
    setAutoAttack(0);
    PropertyManager.resetAll();
}
