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
import { $item, $location, $monster, $skill, $slot, get, have, set, Macro } from "libram";
import coilWire from "./coil wire";
import familiarTest from "./familiarweight";
import hotTest from "./hotres";
import itemTest from "./item";
import levelUp from "./level";
import noncombatTest from "./noncombat";
import { convertMilliseconds, modTraceList, PropertyManager, Test, tests, testWrapper } from "./asmohccs-lib";
import spellTest from "./spell";
import { HPTest, moxTest, muscleTest, mystTest } from "./stattests";
import weaponTest from "./weapon";

//preamble
modTraceList("item drop");
