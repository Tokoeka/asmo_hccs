import {
	adv1,
	buy,
	cliExecute,
	closetAmount,
	equip,
	itemAmount,
	mallPrice,
	myAscensions,
	mySign,
	myTurncount,
	print,
	putCloset,
	retrieveItem,
	runChoice,
	takeCloset,
	toInt,
	useFamiliar,
	visitUrl,
} from "kolmafia";
import { $familiar, $item, $items, $location, $skill, $slot, get, Macro, set } from "libram";
import { advMacro, unequip } from "./asmohccs-lib";

cliExecute(`hagnk all`);
cliExecute(`refresh all`);
cliExecute(`call login.ash`);

let duped = $item`none`;

if (get(`encountersUntilDMTChoice`) === 0 && get(`lastDMTDuplication`) < myAscensions()) {
	useFamiliar($familiar`Machine Elf`);
	const dupeItems = $items`chocomotive, cabooze, freightcake, very fancy whiskey, bottle of Greedy Dog, liquid rhinestones, Daily Affirmation: Always be Collecting, Daily Affirmation: Work For Hours a Week, huge Crimbo cookie, green-iced sweet roll, bottle of Race Car Red, warbear gyro, karma shawarma, bottle of drinkin' gas, abstraction: comprehension, Daily Affirmation: Think Win-Lose, bottle of Old Pugilist`;
	const dupeVals = Array.from(dupeItems.values()).map((dupe) => {
		return {
			dupeIt: dupe,
			value: mallPrice(dupe),
		};
	});
	const best = dupeVals.sort((a, b) => b.value - a.value)[0];
	duped = best.dupeIt;
	let closet = false;
	if (itemAmount(best.dupeIt) === 0 && closetAmount(best.dupeIt) > 0) {
		takeCloset(best.dupeIt, 1);
		closet = true;
	}
	if (itemAmount(duped) === 0) {
		buy(duped, 1);
	}
	set(`choiceAdventure1125`, `1&iid=${toInt(best.dupeIt)}`);
	while (get(`lastDMTDuplication`) < myAscensions()) {
		adv1($location`The Deep Machine Tunnels`);
	}
	if (closet) {
		putCloset(best.dupeIt, 2);
	}
}

if (mySign() !== "Platypus" && !get("moonTuned")) {
	unequip($item`hewn moon-rune spoon`);
	visitUrl("inv_use.php?whichitem=10254&pwd&doit=96&whichsign=4");
}

useFamiliar($familiar`Ms. Puck Man`);
equip($slot`familiar`, $item`tiny stillsuit`);
if (get(`_questESp`) === "") {
	visitUrl(`place.php?whichplace=airport_spooky&action=airport2_radio`);
	if (
		[
			`questESpEVE`,
			`questESpFakeMedium`,
			`questESpGore`,
			`questESpOutOfOrder`,
			`questESpSerum`,
			`questESpSmokes`,
		].includes(get(`_questESp`))
	) {
		runChoice(1);
	} else {
		runChoice(6);
	}
}

if (get(`lastEncounter`) !== `Lava Dogs`) {
	retrieveItem($item`heat-resistant sheet metal`, 20);
	set(`mpAutoRecoveryTarget`, 0.7);
	set(`mpAutoRecovery`, 0.5);

	if (get(`_calderaStart`) === "") {
		set(`_calderaStart`, myTurncount());
	}

	const calderaTurns = get(`_calderaStart`, myTurncount());
	equip($slot`pants`, $item`designer sweatpants`);

	advMacro(
		$location`The Bubblin' Caldera`,
		Macro.skill($skill`Curse of Weaksauce`)
			.skill($skill`Micrometeorite`)
			.while_(`!times 3`, Macro.skill($skill`Saucestorm`))
			.skill($skill`Shrap`),
		() => get(`lastEncounter`) !== `Lava Dogs` && myTurncount() - calderaTurns < 7
	);
	cliExecute(`soak`);
	set(`mpAutoRecoveryTarget`, 0.25);
	set(`mpAutoRecovery`, 0.05);
}

/* if (!AsdonMartin.installed()) {
	use($item`Asdon Martin keyfob`);
	AsdonMartin.fillTo(200);
} */

print(`We duped a ${duped}`);
