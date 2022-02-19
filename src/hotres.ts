import {
  cliExecute,
  create,
  haveEffect,
  myClass,
  numericModifier,
  runChoice,
  use,
  useFamiliar,
  visitUrl,
} from "kolmafia";
import {
  $class,
  $effect,
  $familiar,
  $item,
  $location,
  $skill,
  $slot,
  BeachComb,
  get,
  have,
  set,
  Macro,
} from "libram";
import { universalWeightBuffs } from "./familiarweight";
import { advMacroAA, ensureEffect, horse, modTraceList } from "./asmohccs-lib";
import { candyblast, defaultKill, delevel, easyFight } from "./asmohccs-macros";
import uniform, { hotresOutfit } from "./outfits";
const predictor = () => 60 - numericModifier("hot resistance");

function castBuffs() {
  universalWeightBuffs();

  /*if (!have($item`tenderizing hammer`)) {
        buy(1, $item`tenderizing hammer`);
    }
    cliExecute("smash * ratty knitted cap");
    cliExecute("smash * red-hot sausage fork");
    cliExecute("smash * smoldering bagel punch");
    if (!have($effect`Sleazy Hands`)) {
        if (!have($item`lotion of sleaziness`)) create(1, $item`lotion of sleaziness`);
        if (have($item`lotion of sleaziness`)) use(1, $item`lotion of sleaziness`);
    }
    if (!have($effect`Flame-Retardant Trousers`) && have($item`hot powder`)) {
        use(1, $item`hot powder`);
    } */

  ensureEffect($effect`Elemental Saucesphere`);
  ensureEffect($effect`Astral Shell`);
  ensureEffect($effect`Feeling Peaceful`);
  if (have($item`scroll of Protection from Bad Stuff`)) {
    ensureEffect($effect`Protection from Bad Stuff`);
  }

  if (get("latteUnlocks").includes("chili") && get("_latteRefillsUsed") < 3) {
    const latte = `pumpkin chili ${
      get("latteUnlocks").includes("carrot") ? "carrot " : "vanilla "
    }`;
    cliExecute(`latte refill ${latte}`);
  }

  if (
    !have($item`meteorite guard`) &&
    have($item`metal meteoroid`) &&
    !get("latteUnlocks").includes("chili")
  ) {
    create(1, $item`meteorite guard`);
  }

  if (!have($effect`Puzzle Champ`)) {
    cliExecute("witchess");
  }

  if (myClass() === $class`seal clubber`) {
    ensureEffect($effect`Blessing of the Bird`);
  }
}

function thisFireIsOutOfControl() {
  //Don't need to spend a Map for High-Temp Mining Mask when we can Foam ourselves
  if (get("_saberForceUses") < 5 && !have($effect`Fireproof Foam Suit`)) {
    uniform([$item`industrial fire extinguisher`, $slot`off-hand`]);
    useFamiliar($familiar`Ms. Puck Man`);
    horse(`dark`);
    advMacroAA(
      $location`Noob Cave`,
      Macro.skill($skill`Fire Extinguisher: Foam Yourself`).skill($skill`Use the Force`),
      () => haveEffect($effect`Fireproof Foam Suit`) < 1 && get(`_saberForceUses`) < 3,
      () => {
        visitUrl("choice.php");
        runChoice(3);
        if (!haveEffect($effect`Fireproof Foam Suit`)) {
          throw "failed to Get Fireproof Foam Suit, please Help";
        }
      }
    );
    set(`_fireExtinguisherCharge`, 90);
  }
}

function testPrep() {
  hotresOutfit();
  horse("pale");
  const improvements = [
    () => {
      if (have($item`programmable turtle`)) {
        use($item`programmable turtle`);
      }
    },
    () => ensureEffect($effect`Amazing`),
    () => {
      if (have($item`rainbow glitter candle`)) {
        use($item`rainbow glitter candle`);
      }
    },
    () => BeachComb.tryHead($effect`Hot-Headed`),
  ];
  for (const improvement of improvements) {
    if (predictor() > 1) improvement();
  }
}

export default function hotTest(): number {
  castBuffs();
  thisFireIsOutOfControl();
  //moonTune();
  testPrep();
  modTraceList("hot resistance");
  return predictor();
}
