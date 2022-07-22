import {
	cliExecute,
	create,
	haveEffect,
	myClass,
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
	CommunityService,
	get,
	have,
	Macro,
	set,
} from "libram";
import { universalWeightBuffs } from "./familiarweight";
import { advMacroAA, ensureEffect, horse, setChoice } from "./asmohccs-lib";
import uniform, { hotresOutfit } from "./outfits";
import { modTraceList } from "./modtrace";
const predictor = () => CommunityService.HotRes.prediction;

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

	if (!have($effect`Puzzle Champ`)) {
		cliExecute("witchess");
	}

	if (myClass() === $class`Seal Clubber`) {
		ensureEffect($effect`Blessing of the Bird`);
	}
}

function thisFireIsOutOfControl() {
	//Don't need to spend a Map for High-Temp Mining Mask when we can Foam ourselves
	if (get("_saberForceUses") < 5 && !have($effect`Fireproof Foam Suit`)) {
		uniform([$item`industrial fire extinguisher`, $slot`off-hand`], $item`vampyric cloake`); //TODO - add daylight shavings helmet here?
		useFamiliar($familiar`Ms. Puck Man`);
		horse(`dark`);
		setChoice(1387, 3);
		advMacroAA(
			$location`The Dire Warren`,
			Macro.skill($skill`Fire Extinguisher: Foam Yourself`)
				//.skill($skill`Become a Cloud of Mist`)
				.skill($skill`Use the Force`),
			() => haveEffect($effect`Fireproof Foam Suit`) < 1 && get(`_saberForceUses`) < 3,
			() => {
				visitUrl("choice.php");
				runChoice(-1);
				if (!haveEffect($effect`Fireproof Foam Suit`)) {
					throw "failed to Get Fireproof Foam Suit, please Help";
				}
			}
		);
		set(`_fireExtinguisherCharge`, 90);
		const curFormCasts = get(`_vampyreCloakeFormUses`);
		set(`_vampyreCloakeFormUses`, curFormCasts + 1);
	}
}

function testPrep() {
	hotresOutfit();
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
		() => {
			if (
				!have($item`meteorite guard`) &&
				have($item`metal meteoroid`) &&
				!get("latteUnlocks").includes("chili")
			) {
				create(1, $item`meteorite guard`);
			}
		},
		() => horse("pale"),
		() => BeachComb.tryHead($effect`Hot-Headed`),
	];
	for (const improvement of improvements) {
		if (predictor() > 1) improvement();
	}
}

export default function hotTest(): void {
	castBuffs();
	thisFireIsOutOfControl();
	//moonTune();
	testPrep();
	modTraceList("hot resistance");
}
