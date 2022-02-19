import {
  availableAmount,
  cliExecute,
  create,
  eat,
  haveEffect,
  equip,
  myClass,
  numericModifier,
  use,
  useFamiliar,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $classes,
  $effect,
  $familiar,
  $item,
  $items,
  $location,
  $monster,
  $skill,
  $slot,
  get,
  have,
  Macro,
  Witchess,
} from "libram";
import uniform, { wireOutfit } from "./outfits";
import { delevel, easyFight } from "./asmohccs-macros";
import { advMacro, burnLibrams, fightSausageIfAble, useDefaultFamiliar } from "./asmohccs-lib";
import { runStart, grimoires } from "./runstart";

function firstFights() {
  if (!have($item`makeshiftgarbage shirt`)) cliExecute("fold makeshift garbage shirt");
  uniform(...$items`protonic accelerator pack, latte lovers member's mug, makeshift garbage shirt`);
  if ($classes`sauceror`.includes(myClass())) {
    equip($slot`hat`, $item`Daylight Shavings Helmet`);
  }

  useDefaultFamiliar();

  Macro.trySkill($skill`Micrometeorite`)
    .trySkill($skill`Sing Along`)
    .trySkill($skill`Gulp Latte`)
    .trySkill($skill`Extract`)
    .attack()
    .step("repeat")
    .setAutoAttack();

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

  uniform(...$items`Kramco Sausage-o-Matic&trade;, makeshift garbage shirt`);
  //added attempting to get Chili for the latte back in, but only for classes that don't have the metal meteoroid
  if (
    !get("latteUnlocks").includes("chili") &&
    $classes`turtle tamer, disco bandit, accordion thief`.includes(myClass())
  ) {
    useFamiliar($familiar`Left-Hand Man`);
    equip($slot`familiar`, $item`latte lovers member's mug`);
  } else {
    useDefaultFamiliar();
  }
  fightSausageIfAble(
    $location`The Haunted Kitchen`,
    Macro.skill($skill`Micrometeorite`)
      .attack()
      .repeat()
  );

  /*useDefaultFamiliar(false); //moved to item test as no longer needed for digitize/wink purposes, and being in itemtest will allow for daylight hsaving shenanigans
    uniform();
    mapMacro(
        $location`The Haiku Dungeon`,
        $monster`amateur ninja`,
        Macro.if_(
            `monsterid ${$monster`amateur ninja`.id}`,
            Macro.skill($skill`Gingerbread Mob Hit`)
        ).step("abort")
	);*/
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
Fight a witchess Bishop with latte in offhand for MP
Fight Proto-Ghost (with latte in offhand?)
Fight a Sausage Goblin (in kitchen with latte in lefty?)
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
