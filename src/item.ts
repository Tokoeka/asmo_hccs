import {
    adv1,
    availableAmount,
    cliExecute,
    containsText,
    create,
    drink,
    equip,
    getFuel,
    getWorkshed,
    haveEffect,
    myClass,
    myInebriety,
    numericModifier,
    print,
    use,
    useFamiliar,
    useSkill,
    visitUrl,
} from "kolmafia";
import {
    $class,
	$classes,
    $effect,
    $familiar,
    $item,
    $location,
	$monster,
	$phylum,
    $skill,
    $slot,
    get,
    have,
    Macro,
} from "libram";
import uniform, { itemOutfit } from "./outfits";
import {
    advMacroAA,
    ensureEffect,
    fuelUp,
    geneTonic,
    horse,
	mapMacro,
	modTraceList,
    synthItem,
    useDefaultFamiliar,
} from "./asmohccs-lib";
import { candyblast, defaultKill, delevel, easyFight } from "./asmohccs-macros";

const predictor = () =>
    60 -
    Math.floor(numericModifier("item drop") / 30 + 0.001) -
    Math.floor(numericModifier("booze drop") / 15 + 0.001);


function castBuffs() {
    if (!have($effect`Synthesis: Collection`)) synthItem();
    cliExecute("shrug ode");
    ensureEffect($effect`Fat Leon's Phat Loot Lyric`);
    ensureEffect($effect`The Spirit of Taking`);
    ensureEffect($effect`items.enh`);
	ensureEffect($effect`Singer's Faithful Ocelot`);

    if (getWorkshed() === $item`Asdon Martin keyfob` && !have($effect`Driving Observantly`)) {
        if (getFuel() < 37) fuelUp();
        cliExecute("asdonmartin drive observantly");
    }

    if (!have($effect`I See Everything Thrice!`)) {
        if (!have($item`government`)) {
            if (!have($item`anticheese`)) {
                visitUrl("place.php?whichplace=desertbeach&action=db_nukehouse");
            }
            if (have($item`government cheese`)) {
                create(1, $item`government`);
            }
        }
        if (have($item`government`)) {
            use(1, $item`government`);
        }
    }

    if (myClass() === $class`Pastamancer` && !get("_barrelPrayer")) {
        cliExecute("barrelprayer buff");
    }

    if (have($item`lavender candy heart`)) ensureEffect($effect`Heart of Lavender`);
}

function ninjaTot() {
	useFamiliar($familiar`puck man`); 
	uniform();
	if ($classes`sauceror, disco bandit`.includes(myClass())){
		equip($slot`hat`, $item`Daylight Shavings Helmet`);
	}
    mapMacro(
    	$location`The Haiku Dungeon`,
        $monster`amateur ninja`,
        Macro.if_(
            `monsterid ${$monster`amateur ninja`.id}`,
            Macro.skill($skill`Gingerbread Mob Hit`)
        ).step("abort")
    );
}

function batForm() {
    if (
        get("_latteRefillsUsed") < 3 &&
        numericModifier($item`latte lovers member's mug`, "Item Drop") < 20
    ) {
        const latte = `pumpkin ${get("latteUnlocks").includes("carrot") ? "carrot " : "vanilla "}${
            get("latteUnlocks").includes("butternut") ? "butternut" : "cinnamon"
        }`;
        if (latte !== "") {
            cliExecute(`latte refill ${latte}`);
        }
    }
    if (!have($effect`Bat-Adjacent Form`)) {
        const run = Macro.skill($skill`Become a Bat`);
        if (!get("_latteBanishUsed")) {
            useDefaultFamiliar(false); 
            equip($slot`off-hand`, $item`latte lovers member's mug`);
            equip($slot`back`, $item`vampyric cloake`);
            run.skill($skill`Throw Latte on Opponent`);
        } else {
            useFamiliar($familiar`Frumious Bandersnatch`);
            ensureEffect($effect`Ode to Booze`);
            run.step("runaway");
        }
        advMacroAA($location`The Dire Warren`, run);
    }
    if (
        get("_latteRefillsUsed") < 3 &&
        numericModifier($item`latte lovers member's mug`, "Item Drop") < 20
    ) {
        const latte = `pumpkin ${get("latteUnlocks").includes("carrot") ? "carrot" : "vanilla"} ${
            get("latteUnlocks").includes("butternut") ? "butternut" : "cinnamon"
        }`;
        if (latte !== "") {
            cliExecute(`latte refill ${latte}`);
        }
    }
}

function pirateDNA() {
    // get pirate DNA and make a gene tonic
	if (get("dnaSyringe") !== $phylum`pirate` && haveEffect($effect`Human-Pirate Hybrid`) === 0) {
		equip($slot`acc1`, $item`Kremlin's Greatest Briefcase`);
    	advMacroAA(
        	$location`Pirates of the Garbage Barges`,
        	Macro.item($item`DNA extraction syringe`).skill($skill`Snokebomb`),
        	() => {
	            return get("dnaSyringe") !== $phylum`pirate`;
    	    }
      	);
		geneTonic($phylum`pirate`);
		ensureEffect($effect`Human-Pirate Hybrid`);
	} else {
		throw "Something went wrong getting pirate DNA.";
	}
}

function testPrep() {
    if (!get("_steelyEyedSquintUsed")) {
        ensureEffect($effect`Steely-Eyed Squint`);
    }
    if (!haveEffect($effect`Feeling Lost`)) {
        ensureEffect($effect`Feeling Lost`);
    }
    useFamiliar($familiar`Trick-or-Treating Tot`);
    itemOutfit();
	if (numericModifier($item`latte lovers member's mug`, "Item Drop") === 20){
		equip($slot`offhand`, $item`latte lovers member's mug`);
	}

	const improvements = [
		() => {
			if (myClass() === $class`sauceror`){
				ensureEffect($effect`Blessing of the Bird`);
			}
		},
        () => ensureEffect($effect`Nearly All-Natural`),
		() => {
			if (have($item`Salsa Caliente™ candle`)) {
				use($item`Salsa Caliente™ candle`)
			}
		},
    ];
    for (const improvement of improvements) {
        if (predictor() > 1) improvement();
    }

	//Save for aftercore bonus adventures
	/*if (predictor() > 1 && myClass() === $class`Accordion Thief` && !get("_barrelPrayer")) {
		cliExecute("barrelprayer buff");
	}*/
}

export default function itemTest(): number {
    castBuffs();
    pirateDNA();
	ninjaTot();
    batForm();
    testPrep();
    if (predictor() > 1) throw "Failed to cap item";
	modTraceList("item drop");
	modTraceList("booze drop");
    return predictor();
}
