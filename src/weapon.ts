import {
    cliExecute,
    equip,
    handlingChoice,
    numericModifier,
    runChoice,
    runCombat,
    use,
    useFamiliar,
    useSkill,
    visitUrl,
} from "kolmafia";
import {
    $effect,
    $effects,
    $familiar,
    $item,
    $location,
    $monster,
    $skill,
    $slot,
	BeachComb,
	ChateauMantegna,
    get,
    have,
    Macro,
    set,
    uneffect,
} from "libram";
import {
    advMacroAA,
    ensureEffect,
    ensureInnerElf,
    fax,
    geneTonic,
    horse,
    horsery,
	modTraceList,
    setChoice,
    setClan,
    useDefaultFamiliar,
} from "./asmohccs-lib";
import uniform, { weaponOutfit } from "./outfits";
import { delevel, easyFight } from "./asmohccs-macros";

const predictor = () =>
    60 -
    Math.floor(numericModifier("weapon damage") / 25 + 0.001) -
    Math.floor(numericModifier("weapon damage percent") / 25 + 0.001);

function getCrushed() {
    if (!have($effect`Do You Crush What I Crush?`)) {
        if (have($effect`Holiday Yoked`) && have($item`soft green echo eyedrop antidote`)) {
            uneffect($effect`Holiday Yoked`);
        }
        if (!have($effect`Holiday Yoked`)) {
            useFamiliar($familiar`Ghost of Crimbo Carols`);
            uniform();
			/*if (ChateauMantegna.paintingMonster() === $monster`Black Crayon Crimbo Elf`){
				Macro.item($item`DNA extraction syringe`).step(delevel).step(easyFight).attack().repeat().setAutoAttack();
            	ChateauMantegna.fightPainting();
			}
            else{*/
				equip($slot`acc3`, $item`Lil' Doctor™ bag`);
				Macro.item($item`DNA extraction syringe`)
				.if_(`monstername black crayon crimbo elf`, Macro.step(delevel).step(easyFight).attack().repeat())
				.skill($skill`Feel Hatred`).setAutoAttack();
				cliExecute(`cheat phylum elf`);
				runCombat();
			//}
            useDefaultFamiliar();
        }
        geneTonic("elf");
        ensureEffect($effect`human-elf hybrid`);
      
    }
}

function castBuffs() {
    $effects`Carol of the Bulls, Song of the North, 
        Rage of the Reindeer, Scowl of the Auk, Disdain of the War Snapper, 
        Tenacity of the Snapper, Billiards Belligerence, Blessing of the Bird`.forEach(
        (effect) => ensureEffect(effect)
    );
    ensureEffect($effect`Frenzied, Bloody`);
    if (have($item`LOV Elixir #3`)) use($item`LOV Elixir #3`);
    BeachComb.tryHead($effect`Lack of Body-Building`);
}

//moved Force Spit to occur during NEP Levelling, in order to get it during last little bit of levelling & as bonus to stat tests.

function kungFuMeteors() {
    if (!get("_photocopyUsed")) {
        uniform();
        useFamiliar($familiar`Disembodied Hand`);
        equip($slot`weapon`, $item`none`);
        equip($slot`off-hand`, $item`none`);
        equip($slot`familiar`, $item`Fourth of May Cosplay Saber`);
        setChoice(1387, 3);
        Macro.skill($skill`meteor shower`)
            .skill($skill`Use the Force`)
            .setAutoAttack();
        fax($monster`ungulith`);
        use($item`photocopied monster`);
        if (handlingChoice()) runChoice(-1);
        set("_meteorShowerUses", 1 + get("_meteorShowerUses"));
    }
}

/*function kungFuMeteors() {
    if (!have($effect`Meteor Showered`) && get("_meteorShowerUses") < 5) {
        uniform();
        if (have($familiar`Disembodied Hand`)) {
            useFamiliar($familiar`Disembodied Hand`);
            equip($slot`weapon`, $item`none`);
            equip($slot`off-hand`, $item`none`);
            equip($slot`familiar`, $item`Fourth of May Cosplay Saber`);
        } else {
            useDefaultFamiliar(false);
        }
        setChoice(1387, 3);
        advMacroAA(
            $location`The Neverending Party`,
            Macro.skill($skill`Meteor Shower`).skill($skill`Use the Force`)
        );
        if (handlingChoice()) runChoice(-1);
        set("_meteorShowerUses", 1 + get("_meteorShowerUses"));
    }
}*/

function testPrep() {
    if (have($item`corrupted marrow`)) use($item`corrupted marrow`);
    if (!get("_bowleggedSwaggerUsed")) useSkill($skill`Bow-Legged Swagger`);;
    if (!get("_floundryItemCreated")) {
        setClan(get("asmocs_fishClan", "Alliance From Heck"));
        cliExecute("acquire fish hatchet");
    }
    weaponOutfit();
}




export default function weaponTest(): number {
    castBuffs();
    getCrushed();
    ensureInnerElf();
    kungFuMeteors();
    testPrep();
    if (predictor() > 1) throw "Failed to cap weapon damage!";
	modTraceList("weapon damage");
	modTraceList("weapon damage percent");
    return predictor();
}
