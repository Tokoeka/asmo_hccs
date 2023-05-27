import {
	autosell,
	availableAmount,
	buy,
	cliExecute,
	containsText,
	eudoraItem,
	haveEffect,
	inHardcore,
	Item,
	itemAmount,
	myClass,
	myGardenType,
	myLevel,
	mySpleenUse,
	print,
	retrieveItem,
	runChoice,
	storageAmount,
	//takeStorage,
	use,
	useFamiliar,
	useSkill,
	visitUrl,
} from "kolmafia";
import {
	$class,
	$coinmaster,
	$effect,
	$familiar,
	$item,
	$items,
	$skill,
	get,
	have,
	set,
	SourceTerminal,
} from "libram";
import { resources } from ".";
import { ensureEffect, ensureSong, setClan, tryUse } from "./asmohccs-lib";

function juiceBar() {
	visitUrl("place.php?whichplace=chateau&action=chateau_desk2");
	autosell(1, $item`gremlin juice`);
}

function toot() {
	visitUrl("tutorial.php?action=toot");
	tryUse(1, $item`letter from King Ralph XI`);
	tryUse(1, $item`pork elf goodies sack`);
	autosell(5, $item`baconstone`);
	autosell(5, $item`hamethyst`);
	autosell(itemAmount($item`porquoise`) - 2, $item`porquoise`);
	if (!have($item`toy accordion`)) {
		buy(1, $item`toy accordion`);
	}

	if (myGardenType() === "peppermint") {
		cliExecute("garden pick");
	} else {
		print(
			"WARNING: This script is built for peppermint garden. Switch gardens or find other candy."
		);
	}
	if (availableAmount($item`astral six-pack`) !== 0) use(1, $item`astral six-pack`);
}

export function grimoires(): void {
	if (!get("_grimoireConfiscatorSummons") && have($skill`Summon Confiscated Things`)) {
		useSkill(1, $skill`Summon Confiscated Things`);
		$items`glow-in-the-dark necklace, "KICK ME" sign, LCD game: Burger Belt, LCD game: Food Eater, LCD game: Garbage River`.forEach(
			(item) => autosell(1, item)
		);
	}
	if (!get("grimoire2Summons") && have($skill`Summon Tasteful Items`)) {
		useSkill(1, $skill`Summon Tasteful Items`);
		$items`black-and-blue light, blue plasma ball, cheap studded belt, flavored foot massage oil, foam dart, Loudmouth Larry Lamprey, personal massager, personalized coffee mug, stick-on eyebrow piercing`.forEach(
			(item) => autosell(5, item)
		);
	}
	if (!get("grimoire3Summons") && have($skill`Summon Alice's Army Cards`)) {
		useSkill(1, $skill`Summon Alice's Army Cards`);
		buy($coinmaster`Game Shoppe Snacks`, 1, $item`tobiko marble soda`);
	}

	if (!get("_grimoireGeekySummons") && have($skill`Summon Geeky Gifts`)) {
		useSkill(1, $skill`Summon Geeky Gifts`);
	}
}

function setSettings() {
	SourceTerminal.educate([$skill`Digitize`, $skill`Extract`]);
	setClan(get("asmocs_mainClan", "Alliance From Heck"));
	set("choiceAdventure1106", 1); //Halloweiner Dog get Buff to help with Stat Tests
	set("mpAutoRecovery", 0.05);
	set("mpAutoRecoveryTarget", 0.1);
	set("hpAutoRecovery", 0.65);
	set("hpAutoRecoveryTarget", 0.95);
	visitUrl("clan_viplounge.php?action=fwshop"); //visit Fireworks shop to ensure can buy fireworks
}

function getTurns() {
	if (myLevel() === 1 && !mySpleenUse()) {
		while (get("_universeCalculated") < Math.min(get("skillLevel144"), 3)) {
			cliExecute("numberology 69");
		}
	}
	if (!get("_borrowedTimeUsed")) {
		if (!have($item`borrowed time`)) {
			resources.clipArt($item`borrowed time`);
		}
		use(1, $item`borrowed time`);
	}
}

function prepGear() {
	if (!have($item`dromedary drinking helmet`)) {
		useFamiliar($familiar`Melodramedary`);
		if (!have($item`box of Familiar Jacks`)) {
			resources.clipArt($item`box of Familiar Jacks`);
		}
		use(1, $item`box of Familiar Jacks`);
		cliExecute("mummery myst");
	}
	if (!have($item`your cowboy boots`)) {
		visitUrl("place.php?whichplace=town_right&action=townright_ltt");
		runChoice(5);
	}

	if (have($item`Fourth of May Cosplay Saber`) && !get("_saberMod")) {
		visitUrl("main.php?action=may4");
		runChoice(4);
	}

	if (!have($item`gold detective badge`)) {
		visitUrl("place.php?whichplace=town_wrong&action=townwrong_precinct");
	}
	if (have($item`GameInformPowerDailyPro magazine`)) {
		visitUrl("inv_use.php?whichitem=6174&confirm=Yep.");
	}
	if (eudoraItem() === $item`GameInformPowerDailyPro subscription card`) {
		if (!have($item`scroll of Puddingskin`) && !have($item`dungeoneering kit`)) {
			visitUrl("adventure.php?snarfblat=319");
			use(1, $item`dungeoneering kit`);
		}

		if (get("backupCameraReverserEnabled") === false) {
			cliExecute("backupcamera reverser on");
		}
	}

	/*if (!get("_floundryItemCreated")) {
        setClan(get("asmocs_fishClan", "Alliance From Heck"));
        cliExecute("acquire codpiece");
    }*/

	// Get flimsy hardwood scraps.
	//TODO Change depending on class???
	visitUrl("shop.php?whichshop=lathe");
	if (availableAmount($item`flimsy hardwood scraps`) > 0) {
		retrieveItem(1, $item`weeping willow wand`);
	}

	/*if (!have($item`pantogram pants`)) {
        cliExecute("pantogram mysticality|hot|drops of blood|some self-respect|your dreams|silent");
    }*/

	if (get("boomBoxSong") !== "Total Eclipse of Your Meat") {
		cliExecute("boombox meat");
	}

	if (myClass() === $class`Sauceror`) {
		cliExecute("briefcase enchantment weapon");
	} else {
		cliExecute("briefcase enchantment weapon -combat");
	}

	if (get("umbrellaState") !== "broken") cliExecute("umbrella ml");
}

function vote() {
	if (!get("_voteToday")) {
		visitUrl("place.php?whichplace=town_right&action=townright_vote");
		if (myClass() === $class`Pastamancer`) {
			//Weapon Damage & Weapon Dmg
			visitUrl("choice.php?option=1&whichchoice=1331&g=2&local%5B%5D=3&local%5B%5D=3");
		} else if (myClass() === $class`Sauceror`) {
			//Exp & Exp
			visitUrl("choice.php?option=1&whichchoice=1331&g=2&local%5B%5D=2&local%5B%5D=2");
		} else if (myClass() === $class`Accordion Thief`) {
			//Booze Drop & Booze Drop
			visitUrl("choice.php?option=1&whichchoice=1331&g=2&local%5B%5D=3&local%5B%5D=3");
		} else if (myClass() === $class`Disco Bandit`) {
			//Max MP  & Food Drop
			visitUrl("choice.php?option=1&whichchoice=1331&g=2&local%5B%5D=1&local%5B%5D=3");
		} else if (myClass() === $class`Seal Clubber`) {
			//Fam Exp & Fam Exp
			visitUrl("choice.php?option=1&whichchoice=1331&g=2&local%5B%5D=3&local%5B%5D=3");
		} else if (myClass() === $class`Turtle Tamer`) {
			//Weapon Dmg & Weapon Dmg
			visitUrl("choice.php?option=1&whichchoice=1331&g=2&local%5B%5D=1&local%5B%5D=1");
		}
	}
}

function deck() {
	if (!get("_deckCardsDrawn")) {
		//resources.deck("1952"); TODO - Add getting 1952 Card if need meat?
		resources.deck("rope");
		if (inHardcore()) {
			//Don't get Wrench in Softcore as we can pull the Stick-Knife
			resources.deck("wrench");
		}
	}
}

function scavenge() {
	if (!get("_daycareGymScavenges")) {
		visitUrl("place.php?whichplace=town_wrong&action=townwrong_boxingdaycare");
		const pg = runChoice(3);
		if (containsText(pg, "[free]")) runChoice(2);
		runChoice(5);
		runChoice(4);
	}
}

function buff100() {
	if (!haveEffect($effect`That's Just Cloud-Talk, Man`)) {
		visitUrl("place.php?whichplace=campaway&action=campaway_sky");
	}

	ensureSong($effect`The Magical Mojomuscular Melody`);

	if (!haveEffect($effect`Inscrutable Gaze`)) {
		//ensureMpTonic(10);
		ensureEffect($effect`Inscrutable Gaze`);
	}

	if (!get("_clanFortuneBuffUsed")) cliExecute("fortune buff familiar");
}

function horsery() {
	//get Crazy Horse
	if (get("horseryAvailable") && get("_horsery") === "") {
		cliExecute("horsery crazy");
	}
}

function doPulls() {
	if (inHardcore()) return;

	const pulls: (Item | Item[])[] = [
		$items`repaid diaper, Great Wolf's beastly trousers`,
		$items`homemade robot gear, tiny costume wardrobe, Snow Suit`,
		$item`Stick-Knife of Loathing`,
		$items`Staff of the Roaring Hearth, Staff of Kitchen Royalty, Staff of the Deepest Freeze, Staff of Frozen Lard, Staff of the Peppermint Twist`,
		//$item`Pantaloons of Hatred`,
		$items`meteorite necklace, meteorite ring, meteorite fragment, meteorite earring, Pantaloons of Hatred`,
	];

	for (const pull of pulls) {
		if (
			(Array.isArray(pull) && pull.some((item) => itemAmount(item) > 0)) ||
			(!Array.isArray(pull) && itemAmount(pull) > 0)
		) {
			continue;
		}
		const pullItem = Array.isArray(pull) ? pull.find((pull) => storageAmount(pull) > 0) : pull;
		//if (pullItem) takeStorage(pullItem, 1);
		if (pullItem) resources.pull(pullItem, 100);
	}
}

export function runStart(): void {
	doPulls();
	setSettings();
	toot();
	getTurns();
	deck();
	juiceBar();
	vote();
	//grimoires();
	prepGear();
	scavenge();
	buff100();
	horsery();
}
