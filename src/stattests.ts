import {
    availableAmount,
	cliExecute,
    create,
    eat,
    equip,
    haveEffect,
    itemAmount,
    maximize,
    myBasestat,
    myBuffedstat,
	myClass,
    myMaxhp,
    retrieveItem,
    use,
    useFamiliar,
    useSkill,
} from "kolmafia";
import { $class, $effect, $familiar, $item, $skill, $stat, $slot, get, getModifier, have } from "libram";
import { hpOutfit, moxieOutfit, muscleOutfit, mysticalityOutfit } from "./outfits";
import { ensureEffect, ensureInnerElf, inMoxClass, inMusClass, inMysClass, modTraceList, tryUse } from "./asmohccs-lib";

const musclePredictor = () =>
    60 - Math.floor((1 / 30) * (myBuffedstat($stat`muscle`) - myBasestat($stat`mysticality`)));

function musclebuffs() {
    useSkill(1, $skill`Bind Undead Elbow Macaroni`);
    ensureEffect($effect`Big`);
    ensureEffect($effect`Song of Bravado`);
    ensureEffect($effect`Rage of the Reindeer`);
    ensureEffect($effect`Quiet Determination`);
    ensureEffect($effect`Disdain of the War Snapper`);
    ensureEffect($effect`Feeling Excited`);
    ensureEffect($effect`The Power of LOV`);
    if (!have($effect`Go Get 'Em, Tiger!`)) {
        retrieveItem($item`Ben-Gal™ Balm`);
        use(1, $item`Ben-Gal™ Balm`);
    }
}

function muscleTestPrep() {
    muscleOutfit();


    for (const increaser of [
		() => ensureEffect($effect`Lack of Body-Building`),
        () => ensureEffect($effect`Ham-Fisted`),
        () => ensureInnerElf(),
    ]) {
        if (musclePredictor() > 1) increaser();
    }
}

export function muscleTest(): number {
    musclebuffs();
    muscleTestPrep();
	modTraceList("muscle");
	modTraceList("muscle percent");
    return musclePredictor();
}

const mystPredictor = () =>
    60 - Math.floor((1 / 30) * (myBuffedstat($stat`mysticality`) - myBasestat($stat`mysticality`)));

function mystbuffs() {
    ensureEffect($effect`Feeling Excited`);
}

function mystTestPrep() {
    mysticalityOutfit();
}

export function mystTest(): number {
    mystbuffs();
    mystTestPrep();
    if (mystPredictor() > 1) throw "Not enough mysticality to cap";
	modTraceList("mysticality");
	modTraceList("mysticality percent");
    return mystPredictor();
}

const moxPredictor = () =>
    60 - Math.floor((1 / 30) * (myBuffedstat($stat`moxie`) - myBasestat($stat`mysticality`)));

function moxBuffs() {
    if (have($item`magical sausage casing`)) {
        create(1, $item`magical sausage`);
    }
    if (have($item`magical sausage`)) {
        eat(1, $item`magical sausage`);
    }
    ensureEffect($effect`Feeling Excited`);
    useSkill(1, $skill`Bind Penne Dreadful`);
    ensureEffect($effect`Pomp & Circumsands`);

    use(1, $item`Bird-a-Day calendar`);
    ensureEffect($effect`Blessing of the Bird`);

    ensureEffect($effect`Quiet Desperation`);
    ensureEffect($effect`Disco Fever`);
    ensureEffect($effect`Blubbered Up`);
    ensureEffect($effect`Mariachi Mood`);
    ensureEffect($effect`Disco State of Mind`);
    ensureEffect($effect`Disco Smirk`);
}

function moxTestPrep() {
    useFamiliar($familiar`Left-Hand Man`);
	//maximize("moxie", false);
	moxieOutfit();
    for (const increaser of [
		() => use(availableAmount($item`rhinestone`), $item`rhinestone`),
		() => {
			if (!have($effect`Unrunnable Face`)) {
				tryUse(1, $item`runproof mascara`);
			}
		},
		() => {
			if (availableAmount($item`dollop of barbecue sauce`) > 0) {
				use(1, $item`dollop of barbecue sauce`);
			}
		},
        () => {
			if (itemAmount($item`confiscated love note`) > 0) {
				use(1, $item`confiscated love note`);
			}
		},
        () => ensureInnerElf(),
    ]) {
        if (musclePredictor() > 1) increaser();
    }
}

export function moxTest(): number {
    moxBuffs();
    moxTestPrep();
    if (moxPredictor() > 1) {
        throw "Not enough moxie to cap.";
    }
	modTraceList("moxie");
	modTraceList("moxie percent");
    return moxPredictor();
}

function hpBuffs() {
    useSkill(1, $skill`Bind Undead Elbow Macaroni`);
    ensureEffect($effect`Big`);
    ensureEffect($effect`Song of Starch`);
    ensureEffect($effect`Rage of the Reindeer`);
    ensureEffect($effect`Quiet Determination`);
    ensureEffect($effect`Disdain of the War Snapper`);
    ensureEffect($effect`Feeling Excited`);
    ensureEffect($effect`The Power of LOV`);
    if (!have($effect`Go Get 'Em, Tiger!`)) {
        retrieveItem($item`Ben-Gal™ Balm`);
        use(1, $item`Ben-Gal™ Balm`);
    }

	//Save Turtle Barrel Buff for aftercore bonus adv with food
	/*if (myClass() === $class`Turtle Tamer` && !get("_barrelPrayer")) {
        cliExecute("barrelprayer buff");
    }*/

}

const hpPredictor = () => 60 - Math.floor((myMaxhp() - myBuffedstat($stat`muscle`) - 3) / 30);
function hpTestPrep() {
    hpOutfit();
}

export function HPTest(): number {
    hpBuffs();
    hpTestPrep();
    if (hpPredictor() > 1) {
        throw "Failed to cap HP";
    }
	modTraceList("maximum hp");
	modTraceList("maximum hp percent");
    return hpPredictor();
}
