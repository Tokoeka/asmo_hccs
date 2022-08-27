import {
	cliExecute,
	create,
	equip,
	getFuel,
	getWorkshed,
	haveEffect,
	myClass,
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
	CommunityService,
	get,
	have,
	Macro,
} from "libram";
import uniform, { itemOutfit } from "./outfit";
import { advMacroAA, ensureEffect, mapMacro } from "./asmohccs-lib";
//import { synthItem } from "./synthesis";
import { fuelUp, geneTonic } from "./workshed";
import { modTraceList } from "./modtrace";
import { resources } from ".";
import { easyFight } from "./asmohccs-macros";

const predictor = () => CommunityService.BoozeDrop.prediction;

function castBuffs() {
	//if (!have($effect`Synthesis: Collection`)) synthItem();
	if (myClass() === $class`Pastamancer`) {
		useSkill(1, $skill`Bind Spice Ghost`);
	}
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
	if (have($item`emergency glowstick`)) ensureEffect($effect`Glowing Hands`);
}

function ninjaTot(): void {
	if (have($item`li'l ninja costume`)) {
		return;
	}
	useFamiliar($familiar`Puck Man`);
	equip($slot`familiar`, $item`tiny stillsuit`);
	uniform();
	if ($classes`Sauceror, Disco Bandit`.includes(myClass())) {
		equip($slot`hat`, $item`Daylight Shavings Helmet`);
	}
	mapMacro(
		$location`The Haiku Dungeon`,
		$monster`amateur ninja`,
		Macro.externalIf(have($item`cosmic bowling ball`), Macro.skill($skill`Bowl Straight Up`))
			.if_(
				`monsterid ${$monster`amateur ninja`.id}`,
				Macro.skill($skill`Gingerbread Mob Hit`)
			)
			.step("abort")
	);
}

function batForm() {
	if (!have($effect`Bat-Adjacent Form`)) {
		uniform();
		useFamiliar($familiar`Ghost of Crimbo Carols`);
		equip($slot`back`, $item`vampyric cloake`);
		Macro.skill($skill`Become a Bat`)
			.step(easyFight)
			.attack()
			.repeat()
			.setAutoAttack();
		resources.locket($monster`Black Crayon Elemental`);
	}
}

function pirateDNA(): void {
	if (haveEffect($effect`Human-Pirate Hybrid`)) {
		return;
	}
	// get pirate DNA and make a gene tonic
	if (get("dnaSyringe") !== $phylum`pirate` && haveEffect($effect`Human-Pirate Hybrid`) === 0) {
		equip($slot`acc1`, $item`Kremlin's Greatest Briefcase`);
		useFamiliar($familiar`Ms. Puck Man`);
		equip($slot`familiar`, $item`tiny stillsuit`);
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
	itemOutfit.dress();
	use($item`bag of grain`);

	const improvements = [
		() => {
			if (myClass() === $class`Sauceror`) {
				ensureEffect($effect`Blessing of the Bird`);
			}
		},
		/*() => {
			print("reached bag of grain");
			if (have($item`bag of grain`)){
			use($item`bag of grain`);
		} },*/
		() => {
			if (have($item`Salsa Caliente™ candle`)) {
				use($item`Salsa Caliente™ candle`);
			}
		},
		() => {
			if (have($item`pulled yellow taffy`)) {
				use($item`pulled yellow taffy`);
			}
		},
		() => {
			resources.deck(`fortune`);
		},
	];
	for (const improvement of improvements) {
		if (predictor() > 1) {
			improvement();
		}
	}

	//Save for aftercore bonus adventures
	/*if (predictor() > 1 && myClass() === $class`Accordion Thief` && !get("_barrelPrayer")) {
		cliExecute("barrelprayer buff");
	}*/
}

export default function itemTest(): void {
	castBuffs();
	pirateDNA();
	ninjaTot();
	batForm();
	testPrep();
	if (predictor() > 1) throw "Failed to cap item";
	modTraceList("item drop");
	modTraceList("booze drop");
}
