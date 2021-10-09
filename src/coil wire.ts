import { availableAmount, cliExecute, create, eat, haveEffect, equip, numericModifier, use, useFamiliar, useSkill, visitUrl } from "kolmafia";
import { $effect, $familiar, $item, $location, $monster, $skill, $slot, get, have, Macro, Witchess } from "libram";
import uniform, { wireOutfit } from "./outfits";
import { delevel, easyFight } from "./phccs-macros";
import { advMacro, burnLibrams, ensureMp, fightSausageIfAble, mapMacro, useDefaultFamiliar } from "./phredhccs-lib";
import { runStart, grimoires } from "./runstart";

function firstFights() {
    uniform();
    equip($slot`back`, $item`protonic accelerator pack`);
    if (!have($item`makeshiftgarbage shirt`)) cliExecute("fold makeshift garbage shirt");
    equip($slot`shirt`, $item`makeshift garbage shirt`)
    equip($slot`off-hand`, $item`latte lovers member's mug`)

    //useFamiliar($familiar`Reanimated Reanimator`)
    useDefaultFamiliar();

    Macro.trySkill($skill`Micrometeorite`)
        .trySkill($skill`Sing Along`)
        .trySkill($skill`Gulp Latte`)
        .trySkill($skill`Extract`)
        .attack()
        .step("repeat").setAutoAttack();

    if (!get("_witchessFights")) {
        Witchess.fightPiece($monster`Witchess Bishop`);
    }
    
    grimoires();
    useDefaultFamiliar();

    const ghostLocation = get("ghostLocation");
    if (ghostLocation) {
        equip($slot`off-hand`, $item`latte lovers member's mug`);
        useDefaultFamiliar();
        advMacro(
            ghostLocation,
            Macro.step(delevel)
                .step(easyFight)
                .skill("shoot ghost")
                .skill("shoot ghost")
                .skill("shoot ghost")
                .skill("trap ghost")
        );
    }

    equip($item`Kramco Sausage-o-Matic&trade;`);
    if( !get('latteUnlocks').includes('chili') ){
        useFamiliar($familiar`Left-Hand Man`);
        equip($slot`familiar`, $item`latte lovers member's mug`);
    }
    else {
        useDefaultFamiliar();
    }
    fightSausageIfAble(
       $location`The Haunted Kitchen`,
       Macro.skill($skill`Micrometeorite`)
            .attack()
            .repeat()
    );

    useDefaultFamiliar(false);
        uniform();
        mapMacro(
            $location`The Haiku Dungeon`,
            $monster`amateur ninja`,
            Macro.if_(
                `monsterid ${$monster`amateur ninja`.id}`,
                Macro.skill($skill`Gingerbread Mob Hit`)
            ).step("abort")
        );

    /*if (have($item`magical sausage casing`)) {
        create(1, $item`magical sausage`);
    }
    if (have($item`magical sausage`)) {
        eat(1, $item`magical sausage`);
    }*/

    
}

function terribleLove() {
    const lovePotion = $item`Love Potion #0`;
    const loveEffect = $effect`Tainted Love Potion`;
    if (haveEffect(loveEffect) === 0) {
        if (availableAmount(lovePotion) === 0) {
            useSkill(1, $skill`Love Mixology`);
        }
        visitUrl("desc_effect.php?whicheffect=" + loveEffect.descid);
        if (
        numericModifier(loveEffect, "mysticality") < 10 ||
        numericModifier(loveEffect, "muscle") < -30 ||
        numericModifier(loveEffect, "moxie") < -30 ||
        numericModifier(loveEffect, "maximum hp percent") < 0.001 /*||
        numericModifier(loveEffect, "maximum mp percent") < 0.001*/ 
        ) {
            use(1, lovePotion);
        }
    }
}


/*
Inital Setup & Prep
Fight (and wink at?) a witchess Bishop with latte in offhand for MP
Fight Proto-Ghost (with latte in offhand?)
Fight (and digitize?) a Sausage Goblin (in kitchen with latte in lefty?)
Map and Insta-kill Ninja for tot equip
MP Regen Outfit
Use Love Potion if Shitty
*/

export default function coilWire(): number {
    runStart();
    firstFights();
    wireOutfit();
    terribleLove();
    burnLibrams();
    return 60;
}
