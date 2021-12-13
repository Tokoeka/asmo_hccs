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
import { $class, $classes, $effect, $familiar, $item, $skill, $stat, $slot, BeachComb, get, getModifier, have } from "libram";
import { hpOutfit, moxieOutfit, muscleOutfit, mysticalityOutfit } from "./outfits";
import { ensureEffect, ensureInnerElf, inMoxClass, inMusClass, inMysClass, modTraceList, tryUse } from "./asmohccs-lib";

const musclePredictor = () =>
    60 - Math.floor((1 / 30) * (myBuffedstat($stat`muscle`) - myBasestat($stat`mysticality`)));

function musclebuffs() {
	if (myClass() === $class`pastamancer`){
		useSkill(1, $skill`Bind Undead Elbow Macaroni`);
	}
    else if (myClass() === $class`sauceror`){
		ensureEffect($effect`expert oiliness`);
	}
	else if (inMoxClass()){
		ensureEffect($effect`slippery oiliness`);
	}
    
    ensureEffect($effect`Big`);
    ensureEffect($effect`Song of Bravado`);
    ensureEffect($effect`Rage of the Reindeer`);
    ensureEffect($effect`Quiet Determination`);
    if (myClass() !== $class`turtle tamer`) {
		ensureEffect($effect`Disdain of the War Snapper`);
	}
	else {
		ensureEffect($effect`Blessing of the War Snapper`);
	}
    ensureEffect($effect`Feeling Excited`);
    ensureEffect($effect`The Power of LOV`);
    if (!have($effect`Go Get 'Em, Tiger!`)) {
        retrieveItem($item`Ben-Gal™ Balm`);
        use(1, $item`Ben-Gal™ Balm`);
    }

	if (myClass() === $class`accordion thief`){
		ensureEffect($effect`Blessing of the Bird`);
	}
}

function muscleTestPrep() {
    muscleOutfit();


    for (const increaser of [
		() => ensureEffect($effect`Lack of Body-Building`),
        () => {
			if(have($item`vial of hamethyst juice`)){
				ensureEffect($effect`Ham-Fisted`);
			}
		},
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
	if (inMusClass()){
		ensureEffect($effect`stabilizing oiliness`);
	}
	else if (inMoxClass()){
		ensureEffect($effect`slippery oiliness`);
	}
	if (myClass() !== $class`turtle tamer`) {
		ensureEffect($effect`Disdain of She-Who-Was`);
	}
	else {
		ensureEffect($effect`Blessing of She-Who-Was`);
	}

    ensureEffect($effect`Feeling Excited`);
	BeachComb.tryHead($effect`We're All Made of Starfish`);
	//ensureEffect($effect`Uncucumbered`);
	ensureEffect($effect`Glittering Eyelashes`);

	if (myClass() === $class`turtle tamer`){
		ensureEffect($effect`Blessing of the Bird`);
	}


}

function mystTestPrep() {
    mysticalityOutfit();

	for (const increaser of [
		() => {
			if (have($item`pressurized potion of perspicacity`)){
				use($item`pressurized potion of perspicacity`);
			}
		},
		() => {
			if (have($item`flask of baconstone juice`)){
				use($item`flask of baconstone juice`);
			}
		},
        () => ensureInnerElf(),
    ]) {
        if (mystPredictor() > 1) increaser();
    }
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
	if (myClass() === $class`pastamancer`){
		useSkill(1, $skill`Bind Penne Dreadful`);
	}
    else if (myClass() === $class`sauceror`){
		ensureEffect($effect`expert oiliness`);
	}
	else if (inMusClass()){
		ensureEffect($effect`stabilizing oiliness`);
	}
    ensureEffect($effect`Pomp & Circumsands`);

    
	if ($classes`pastamancer, seal clubber, sauceror`.includes(myClass())){
		ensureEffect($effect`Blessing of the Bird`);
	}

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
			if (have($item`eyedrops of newt`)){
				use($item`eyedrops of newt`);
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
    if (myClass() !== $class`turtle tamer`) {
		ensureEffect($effect`Disdain of the War Snapper`);
	}
	else {
		ensureEffect($effect`Blessing of the War Snapper`);
	}
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
