import {
    adv1,
    availableAmount,
    cliExecute,
    containsText,
    create,
    eat,
    equip,
    handlingChoice,
    haveEffect,
	inHardcore,
    maximize,
    myClass,
    myHp,
    myMaxhp,
    myLevel,
    myMp,
    numericModifier,
    runChoice,
	use,
    useFamiliar,
    useSkill,
    visitUrl,
} from "kolmafia";
import {
    $class,
    $effect,
    $effects,
    $familiar,
    $item,
    $location,
    $monster,
    $skill,
    get,
    have,
    Macro,
    set,
} from "libram";
import { 
	advMacroAA, 
	ensureEffect, 
	ensureInnerElf,
	fightSausageIfAble, 
	horse, 
	mapMacro, 
	modTraceList, 
	setChoice, 
	useDefaultFamiliar } from "./asmohccs-lib";
import { delevel, easyFight } from "./asmohccs-macros";
import uniform, { spellOutfit } from "./outfits";

const predictor = () =>
    60 -
    Math.floor(numericModifier("spell damage") / 50 + 0.001) -
    Math.floor(numericModifier("spell damage percent") / 50 + 0.001);

function castBuffs() {
    ensureEffect($effect`Simmering`);
    $effects`Pisces in the Skyces, Carol of the Hells, Arched Eyebrow of the Archmage, 
        Song of Sauce, We're All Made of Starfish, Mental A-cue-ity`.forEach(
        (effect) => ensureEffect(effect)
    );

    if (!get("_cargoPocketEmptied")) {
        cliExecute("cargo 177");
        ensureEffect($effect`Sigils of Yeg`);
    }

    if (availableAmount($item`LOV Elixir #6`) > 0) ensureEffect($effect`The Magic of LOV`);

    /*if (get("tomeSummons") < 3) useSkill(1, $skill`Summon Sugar Sheets`);
    if (have($item`sugar sheet`)) create(1, $item`sugar chapeau`);*/
    visitUrl("shop.php?whichshop=lathe");
    if (availableAmount($item`flimsy hardwood scraps`) > 0) {
        create(1, $item`weeping willow wand`);
    }

    cliExecute("briefcase enchantment spell");

    /* if (!get("_madTeaParty")) {
        visitUrl("clan_viplounge.php?action=lookingglass&whichfloor=2");
        cliExecute("acquire mariachi hat");
        ensureEffect($effect`Full Bottle in front of Me`);
     }*/

    useSkill(1, $skill`Spirit of Cayenne`);

    if (availableAmount($item`flask of baconstone juice`) > 0) {
        ensureEffect($effect`Baconstoned`);
    }
}

function deepDarkVisions() {
    //horse("pale");
    useFamiliar($familiar`Exotic Parrot`);
    if (!have($item`astral pet sweater`) && get("tomeSummons") < 3 && inHardcore()) {
        create(1, $item`box of Familiar Jacks`);
        use(1, $item`box of Familiar Jacks`);
    }

    maximize("spooky res", false);
    while (
        have($skill`Deep Dark Visions`) &&
        !haveEffect($effect`Visions of the Deep Dark Deeps`)
    ) {
        if (myMp() < 20) {
            create(1, $item`magical sausage`);
            eat(1, $item`magical sausage`);
        }
        while (myHp() < myMaxhp()) {
            useSkill(1, $skill`Cannelloni Cocoon`);
        }
        if (myMp() < 100) {
            create(1, $item`magical sausage`);
            eat(1, $item`magical sausage`);
        }
        if (Math.round(numericModifier("spooky resistance")) < 10) {
            ensureEffect($effect`Does It Have a Skull In There??`);
            if (Math.round(numericModifier("spooky resistance")) < 10) {
                throw "Not enough spooky res for Deep Dark Visions.";
            }
        }
        useSkill(1, $skill`Deep Dark Visions`);
    }
}

function fingies() {
    if (
        !have($effect`Saucefingers`) &&
        myClass() === $class`Pastamancer` &&
        myLevel() >= 15 &&
        have($familiar`Mini-Adventurer`)
    ) {
        useFamiliar($familiar`Mini-Adventurer`);
        horse("dark");
        uniform();
        setChoice(768, 4);
        advMacroAA(
            $location`The Dire Warren`,
            Macro.skill($skill`Feel Hatred`),
            () => !have($effect`Saucefingers`)
        );
    }
}


function shower() {
    useFamiliar($familiar`ms. puck man`);
    if (!have($effect`Meteor Showered`) && get("_meteorShowerUses") < 5) {
        uniform();
        setChoice(1387, 3);

/*adv1($location`LavaCo&trade; Lamp Factory`, -1, "");
        if (
            !containsText(
                $location`LavaCo&trade; Lamp Factory`.noncombatQueue,
                "LavaCo&trade; Welcomes You"
            )
        ) {
            throw "Something went wrong at LavaCo.";
        }
    equip($item`Fourth of May Cosplay Saber`);
    */

        mapMacro($location`LavaCo™ Lamp Factory`,
                $monster`factory worker (female)`,
                Macro.skill($skill`Meteor Shower`).skill($skill`Use the Force`)
                );
        if (handlingChoice()) runChoice(-1);
        set("_meteorShowerUses", 1 + get("_meteorShowerUses"));
        set("mappingMonsters", false);
    }
}

function testPrep() {
    useFamiliar($familiar`left-hand man`)
    spellOutfit();
}

function getToxic() {
	uniform();
	useDefaultFamiliar();
	fightSausageIfAble(
		$location`The Toxic Teacups`,
		Macro.step(delevel)
			 .attack()
			 .repeat()
	 );
}

export default function spellTest(): number {
    castBuffs();
    fingies();
    deepDarkVisions();
	getToxic();
    ensureInnerElf();
    shower();
    testPrep();
	modTraceList("spell damage");
	modTraceList("spell damage percent");
    return 1 + predictor();
}
