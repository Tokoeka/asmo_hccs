import {
	availableAmount,
	cliExecute,
	equip,
	haveEffect,
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
	AutumnAton,
	get,
	have,
	Macro,
	Witchess,
} from "libram";
import { delevel, easyFight } from "./asmohccs-macros";
import { advMacro, fightSausageIfAble, useDefaultFamiliar } from "./asmohccs-lib";
import { grimoires, runStart } from "./runstart";
import uniform, { wireOutfit } from "./outfit";
import { burnLibrams } from "./librams";

function firstFights() {
	//TODO - do kramco fight first? move witchess fight post coil wire?
	if (!have($item`makeshift garbage shirt`)) cliExecute("fold makeshift garbage shirt");
	uniform(
		...$items`protonic accelerator pack, latte lovers member's mug, makeshift garbage shirt`
	);
	if ($classes`Sauceror`.includes(myClass())) {
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
		uniform(...$items`latte lovers member's mug, protonic accelerator pack`);
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

	uniform(...$items`Kramco Sausage-o-Matic™, makeshift garbage shirt`);
	//added attempting to get Chili for the latte back in, but only for classes that don't have the metal meteoroid
	if (
		!get("latteUnlocks").includes("chili") &&
		$classes`Turtle Tamer, Disco Bandit, Accordion Thief`.includes(myClass())
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
    resources.mapMacro(
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
		visitUrl(`desc_effect.php?whicheffect=${loveEffect.descid}`);
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

function fallBot(): void {
	if (AutumnAton.available()) {
		AutumnAton.sendTo($location`The Sleazy Back Alley`);
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

export default function coilWire(): void {
	runStart();
	fallBot();
	firstFights();
	wireOutfit.dress();
	terribleLove();
	burnLibrams();
}
