import {
    cliExecute,
    equip,
    handlingChoice,
    inHardcore,
    myClass,
    retrieveItem,
    runChoice,
    use,
    useFamiliar,
    useSkill,
} from "kolmafia";
import {
    $class,
    $effect,
    $effects,
    $familiar,
    $item,
    $items,
    $monster,
    $phylum,
    $skill,
    $slot,
    BeachComb,
    CombatLoversLocket,
    CommunityService,
    get,
    have,
    Macro,
    set,
    uneffect,
} from "libram";
import {
    ensureEffect,
    ensureInnerElf,
    setChoice,
    setClan,
    unequip,
    useDefaultFamiliar,
} from "./asmohccs-lib";
import uniform, { weaponOutfit } from "./outfits";
import { delevel, easyFight } from "./asmohccs-macros";
import { geneTonic } from "./workshed";
import { modTraceList } from "./modtrace";

const predictor = () => CommunityService.WeaponDamage.prediction;

function getCrushed() {
    if (!have($effect`Do You Crush What I Crush?`)) {
        if (have($effect`Holiday Yoked`) && have($item`soft green echo eyedrop antidote`)) {
            uneffect($effect`Holiday Yoked`);
        }
        if (!have($effect`Holiday Yoked`)) {
            useFamiliar($familiar`Ghost of Crimbo Carols`);
            uniform();
            equip($slot`acc3`, $item`Lil' Doctor™ bag`);
            Macro.item($item`DNA extraction syringe`).step(delevel).step(easyFight).attack().repeat().setAutoAttack();
            CombatLoversLocket.reminisce($monster`Black Crayon Crimbo Elf`);
            useDefaultFamiliar();
        }
        geneTonic($phylum`elf`);
        ensureEffect($effect`human-elf hybrid`);
    }
}

function castBuffs() {
    $effects`Carol of the Bulls, Song of the North, 
        Rage of the Reindeer, Scowl of the Auk, Disdain of the War Snapper, 
        Tenacity of the Snapper, Billiards Belligerence, Blessing of the Bird`.forEach((effect) =>
        ensureEffect(effect)
    );
    ensureEffect($effect`Frenzied, Bloody`);
    if (have($item`LOV Elixir #3`)) use($item`LOV Elixir #3`);
    BeachComb.tryHead($effect`Lack of Body-Building`);

    if (myClass() === $class`Seal Clubber` && !get("_barrelPrayer")) {
        cliExecute("barrelprayer buff");
    }
}

//moved Force Spit to occur during NEP Levelling, in order to get it during last little bit of levelling & as bonus to stat tests.

function kungFuMeteors() {
    uniform();
    useFamiliar($familiar`Disembodied Hand`);
    equip($slot`weapon`, $item`none`);
    equip($slot`off-hand`, $item`none`);
    equip($slot`familiar`, $item`Fourth of May Cosplay Saber`);
    setChoice(1387, 3);
    Macro.skill($skill`meteor shower`)
        .skill($skill`Use the Force`)
        .setAutoAttack();
    CombatLoversLocket.reminisce($monster`ungulith`);
    if (handlingChoice()) runChoice(-1);
    set("_meteorShowerUses", 1 + get("_meteorShowerUses"));
	if (get("_locketMonstersFought") === "") set("_locketMonstersFought", "1932");
	else set("_locketMonstersFought", `${get("_locketMonstersFought")},1932`);
}

function testPrep() {
    if (have($item`corrupted marrow`)) use($item`corrupted marrow`);
    if (!get("_bowleggedSwaggerUsed")) useSkill($skill`Bow-Legged Swagger`);
    /*if (!get("_floundryItemCreated")) {
        setClan(get("asmocs_fishClan", "Alliance From Heck"));
        cliExecute("acquire fish hatchet");
    }*/
	if (!inHardcore()) {
        const meteor = $items`meteorite necklace, meteorite fragment, meteorite earring`.find(
            (item) => have(item)
        );
        if (meteor) {
            unequip(meteor);
            retrieveItem(1, $item`tenderizing hammer`);
            retrieveItem(1, $item`jewelry-making pliers`);
            cliExecute(`smash ${meteor}`);
            cliExecute(`make ${$item`meteorite ring`}`);
        }
    }
    weaponOutfit();
    weaponOutfit();
}

export default function weaponTest(): void {
    castBuffs();
    getCrushed();
    if (inHardcore()) ensureInnerElf();
    kungFuMeteors();
    testPrep();
    if (predictor() > 1) throw "Failed to cap weapon damage!";
    modTraceList("weapon damage");
    modTraceList("weapon damage percent");
}
