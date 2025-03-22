import {
	equippedItem,
	familiarEquippedEquipment,
	familiarWeight,
	haveEffect,
	haveEquipped,
	haveFamiliar,
	haveSkill,
	inMoxieSign,
	inMuscleSign,
	inMysticalitySign,
	isUnrestricted,
	myAdventures,
	myEffects,
	myFamiliar,
	myLevel,
	mySign,
	myThrall,
	numericModifier,
	print,
	pvpAttacksLeft,
	todayToString,
	toEffect,
	toInt,
	weightAdjustment,
} from "kolmafia";
import {
	$effect,
	$familiar,
	$item,
	$skills,
	$slot,
	$slots,
	$thrall,
	get,
	getRemainingLiver,
	have,
	haveInCampground,
} from "libram";
import { horsery } from "./asmohccs-lib";
import { getCeiling } from "libram/dist/resources/2015/ChateauMantegna";

const moonBonus = [
	["weapon damage percent", "mongoose", "20"],
	["spell damage percent", "wallaby", "20"],
	["familiar weight", "platypus", "5"],
	["meat drop", "wombat", "20"],
	["item drop", "packrat", "10"],
];

const thrallBonus = [
	["maximum hp", "vampieroghi", "10", "60"],
	["maximum mp", "vermincelli", "10", "30"],
	["initiative", "angel hair wisp", "1", `${5 * myThrall().level}`],
	["weapon damage", "elbow macaroni", "5", `${2 * myThrall().level}`],
	["critical hit chance", "elbow macaroni", "10", "10"],
	["damage reduction", "penne dreadful", "10", "10"],
	["experience", "spaghetti elemental", "1", "1"],
	["spell damage", "spaghetti elemental", "10", "5"],
	["meat drop", "lasagmbie", "1", `${20 + 2 * myThrall().level}`],
	["spooky spell damage", "lasagmbie", "10", "10"],
	["item drop", "spice ghost", "1", `${10 + myThrall().level}`],
];

const capeBonus = [
	["hot resistance", "vampire", "hold", "3"],
	["cold resistance", "vampire", "hold", "3"],
	["spooky resistance", "vampire", "hold", "3"],
	["sleaze resistance", "vampire", "hold", "3"],
	["stench resistance", "vampire", "hold", "3"],
	["muscle percent", "vampire", "all", "30"],
	["maximum hp", "vampire", "all", "50"],
	["muscle experience", "vampire", "thrill", "3"],
	["mysticality percent", "heck", "all", "30"],
	["maximum mp", "heck", "all", "50"],
	["mysticality experience", "heck", "thrill", "3"],
	["moxie percent", "robot", "all", "30"],
	["maximum hp", "robot", "all", "25"],
	["maximum mp", "robot", "all", "25"],
	["moxie experience", "robot", "thrill", "3"],
];

const umbrellaBonus = [
	["monster level percent", "broken", "25"],
	["damage reduction", "forward", "25"],
	["item drop", "bucket style", "25"],
	["weapon damage", "pitchfork style", "25"],
	["spell damage", "constantly twirling", "25"],
	["combat rate", "cocoon", "-10"],
];

function parkaML(): string {
	return Math.min(33, 3 * myLevel()).toString();
}

const parkaBonus = [
	["maximum hp percent", "kachungasaur", "100"],
	["meat drop", "kachungasaur", "50"],
	["cold resistance", "kachungasaur", "2"],
	["sleaze damage", "dilophosaur", "20"],
	["sleaze spell damage", "dilophosaur", "20"],
	["stench resistance", "dilophosaur", "2"],
	["monster level", "spikolodon", parkaML()],
	["sleaze resistance", "spikolodon", "2"],
	["damage reduction", "ghostasaurus", "10"],
	["maximum mp", "ghostasaurus", "50"],
	["spooky resistance", "ghostasaurus", "2"],
	["combat rate", "pterodactyl", "-5"],
	["initiative", "pterodactyl", "50"],
	["hot resistance", "pterodactyl", "2"],
];

const boomboxBonus = [
	["spooky damage", "Eye of the Giger", `${myLevel()}`],
	["spooky resistance", "Eye of the Giger", "1"],
	["food drop", "Food Vibrations", "30"],
	["mp regen min", "Food Vibrations", "3"],
	["mp regen max", "Food Vibrations", "5"],
	["damage reduction", "Remainin' Alive", `${myLevel()}`],
	["weapon damage", "These Fists Were Made for Punchin'", `${myLevel()}`],
	["meat drop", "Total Eclipse of Your Meat", "30"],
];

const furnitureBonus = [
	["hot resistance", "bed of coals", "2"],
	["spooky resistance", "comfy coffin", "2"],
	["stench resistance", "filth-encrusted futon", "2"],
	["cold resistance", "frigid air mattress", "2"],
	["spooky resistance", "Lazybones™ recliner", "2"],
	["sleaze resistance", "stained mattress", "2"],
	["damage reduction", "sleeping stocking", "2"],
	["adventures", "Meat Butler", "4"],
	["adventures", "Meat maid", "4"],
	["adventures", "clockwork maid", "8"],
	["adventures", "cuckoo clock", "3"],
	["adventures", "Crimbo candle", todayToString().slice(4, 6) === "12" ? "3" : "0"],
	["pvp fights", "tin roof (rusted)", "5"],
];

const ceilingBonus = [
	["adventures", "artificial skylight", "3"],
	["pvp fights", "antler chandelier", "3"],
	["free rests", "ceiling fan", "5"],
];
// TODO Add voting modifiers
// TODO Add Florist Modifiers based on get("nextAdventure")?

export function modTraceList(modifier: string): void {
	let totalVal = 0;
	print("");
	print(`MOD TRACE: ${modifier}`, "red");

	let offhandTotal = 0;
	let offhandCount = 0;
	let slotTotal = 0;
	let slotCount = 0;
	for (const slot of $slots``) {
		const it = equippedItem(slot);
		const doubled =
			(slot === $slot`offhand` ||
				(slot === $slot`familiar` && myFamiliar() === $familiar`Left-Hand Man`)) &&
			haveEffect($effect`Offhand Remarkable`) &&
			it !== $item`latte lovers member's mug`;
		if (
			numericModifier(it, modifier) !== 0 &&
			((haveEquipped(it) &&
				!(
					slot.toString().includes("sticker") ||
					slot.toString().includes("folder") ||
					slot.toString().includes("card-sleeve")
				)) ||
				(haveEquipped($item`your cowboy boots`) &&
					$slots`bootspur, bootskin`.includes(slot)) ||
				(haveEquipped($item`over-the-shoulder Folder Holder`) &&
					slot.toString().includes("folder")) ||
				((haveEquipped($item`scratch 'n' sniff sword`) ||
					haveEquipped($item`scratch 'n' sniff crossbow`)) &&
					slot.toString().includes("sticker")) ||
				(haveEquipped($item`card sleeve`) && slot.toString().includes("card-sleeve")))
		) {
			const itemTotal = numericModifier(it, modifier);
			if (doubled) {
				offhandTotal = offhandTotal + itemTotal;
				offhandCount++;
			}
			slotTotal = slotTotal + itemTotal;
			slotCount++;
			print(`SLOT ${slot} ITEM ${it} : ${itemTotal}`);
		}
	}
	if (equippedItem($slot`back`) === $item`unwrapped knock-off retro superhero cape`) {
		const capeForm = get(`retroCapeSuperhero`).toLowerCase();
		const capeWash = get(`retroCapeWashingInstructions`).toLowerCase();
		let retroBonus = 0;
		for (const i in capeBonus) {
			const line = capeBonus[i];
			const mod = line[0];
			const form = line[1];
			const wash = line[2];
			const bonus = parseInt(line[3]);

			if (modifier === mod && form === capeForm && (wash === "any" || wash === capeWash)) {
				slotTotal = slotTotal + bonus;
				retroBonus++;
				print(`RETROCAPE ${capeForm} ${capeWash} : ${bonus}`);
			}
		}
		/* if (capeForm === "vampire") {
			if (
				[
					"hot resistance",
					"cold resistance",
					"sleaze resistance",
					"spooky resistance",
					"stench resistance",
				].includes(modifier) &&
				capeWash === "hold"
			) {
				slotTotal = slotTotal + 3;
				retroBonus = 1;
				print(`RETROCAPE ${capeForm} ${capeWash} : ${3}`);
			} else if (modifier === "muscle percent") {
				slotTotal = slotTotal + 30;
				retroBonus = 1;
				print(`RETROCAPE ${capeForm} ${capeWash} : ${30}`);
			} else if (modifier === "maximum hp") {
				slotTotal = slotTotal + 50;
				retroBonus = 1;
				print(`RETROCAPE ${capeForm} ${capeWash} : ${50}`);
			}
		} else if (capeForm === "heck") {
			if (modifier === "mysticality percent") {
				slotTotal = slotTotal + 30;
				retroBonus = 1;
				print(`RETROCAPE ${capeForm} ${capeWash} : ${30}`);
			} else if (modifier === "maximum mp") {
				slotTotal = slotTotal + 50;
				retroBonus = 1;
				print(`RETROCAPE ${capeForm} ${capeWash} : ${50}`);
			}
		} else if (capeForm === "robot") {
			if (modifier === "moxie percent") {
				slotTotal = slotTotal + 30;
				retroBonus = 1;
				print(`RETROCAPE ${capeForm} ${capeWash} : ${30}`);
			} else if (["maximum hp", "maximum mp"].includes(modifier)) {
				slotTotal = slotTotal + 25;
				retroBonus = 1;
				print(`RETROCAPE ${capeForm} ${capeWash} : ${25}`);
			}
		} */

		if (retroBonus > 0) {
			slotCount++;
		}
	}
	if (
		equippedItem($slot`off-hand`) === $item`unbreakable umbrella` ||
		(myFamiliar() === $familiar`Left-Hand Man` &&
			familiarEquippedEquipment($familiar`Left-Hand Man`) === $item`unbreakable umbrella`)
	) {
		const umbrellaForm = get(`umbrellaState`);
		for (const i in umbrellaBonus) {
			const line = umbrellaBonus[i];
			const mod = line[0];
			const style = line[1];
			const bonus = line[2];
			if (modifier === mod && umbrellaForm === style) {
				slotTotal = slotTotal + parseInt(bonus);
				slotCount++;
				print(`UMBRELLA ${style} : ${bonus}`);
			}
		}
	}
	if (equippedItem($slot`shirt`) === $item`Jurassic Parka`) {
		const parkaForm = get(`parkaMode`);
		for (const i in parkaBonus) {
			const line = parkaBonus[i];
			const mod = line[0];
			const mode = line[1];
			const bonus = line[2];
			if (modifier === mod && parkaForm === mode) {
				slotTotal = slotTotal + parseInt(bonus);
				slotCount++;
				print(`JURASSIC PARKA ${mode} : ${bonus}`);
			}
		}
	}
	if (slotCount > 0) {
		print(`Equipment Total: ${slotTotal}`, "blue");
		print("");
	}

	let skillTotal = 0;
	let skillCount = 0;
	for (const sk of $skills``) {
		if (haveSkill(sk) && numericModifier(sk, modifier) !== 0) {
			skillTotal = skillTotal + numericModifier(sk, modifier);
			skillCount++;
			print(`SKILL ${sk} : ${numericModifier(sk, modifier)}`);
		}
	}
	if (skillCount > 0) {
		print(`Passive Skills Total: ${skillTotal}`, "blue");
		print("");
	}

	let otherTotal = 0;
	let otherCount = 0;
	const myMoon = mySign().toLowerCase();
	if (modifier.includes("experience percent")) {
		if (modifier.includes("muscle") && inMuscleSign()) {
			otherTotal = otherTotal + 10;
			otherCount++;
			print(`MOON ${myMoon} : ${10}`);
		} else if (modifier.includes("mysticality") && inMysticalitySign()) {
			otherTotal = otherTotal + 10;
			otherCount++;
			print(`MOON ${myMoon} : ${10}`);
		} else if (modifier.includes("moxie") && inMoxieSign()) {
			otherTotal = otherTotal + 10;
			otherCount++;
			print(`MOON ${myMoon} : ${10}`);
		}
	} else {
		for (const i in moonBonus) {
			const line = moonBonus[i];
			const mod = line[0];
			const moon = line[1];
			const bonus = line[2];
			if (modifier === mod && myMoon === moon) {
				otherTotal = otherTotal + parseInt(bonus);
				otherCount++;
				print(`MOON ${myMoon} : ${bonus}`);
			}
		}
	}

	for (const i in thrallBonus) {
		const line = thrallBonus[i];
		const mod = line[0];
		const thrall = line[1];
		const level = line[2];
		const bonus = line[3];
		if (
			modifier === mod &&
			myThrall() === $thrall`${thrall}` &&
			myThrall().level >= parseInt(level)
		) {
			otherTotal = otherTotal + parseInt(bonus);
			otherCount++;
			print(`THRALL ${myThrall()} : ${bonus}`);
		}
	}

	if (horsery() !== "" && get(`horseryAvailable`)) {
		const myHorse = horsery();
		if (modifier.includes("init") && myHorse.includes("normal")) {
			otherTotal = otherTotal + 10;
			otherCount++;
			print(`HORSERY ${myHorse} : ${10}`);
		} else if (modifier.includes("combat") && myHorse.includes("dark")) {
			otherTotal = otherTotal - 5;
			otherCount++;
			print(`HORSERY ${myHorse} : -5`);
		} else if (
			[
				"hot resistance",
				"cold resistance",
				"sleaze resistance",
				"spooky resistance",
				"stench resistance",
			].includes(modifier) &&
			myHorse.includes("pale")
		) {
			otherTotal = otherTotal + 1;
			otherCount++;
			print(`HORSERY ${myHorse} : ${1}`);
		} else if (modifier === "moxie" && myHorse.includes("crazy")) {
			otherTotal = otherTotal + toInt(get(`_horseryCrazyMox`));
			otherCount++;
			print(`HORSERY ${myHorse} : ${get(`_horseryCrazyMox`)}`);
		} else if (modifier === "muscle" && myHorse.includes("crazy")) {
			otherTotal = otherTotal + toInt(get(`_horseryCrazyMus`));
			otherCount++;
			print(`HORSERY ${myHorse} : ${get(`_horseryCrazyMus`)}`);
		} else if (modifier === "mysticality" && myHorse.includes("crazy")) {
			otherTotal = otherTotal + toInt(get(`_horseryCrazyMys`));
			otherCount++;
			print(`HORSERY ${myHorse} : ${get(`_horseryCrazyMys`)}`);
		}
	}

	for (const i in boomboxBonus) {
		const line = boomboxBonus[i];
		const mod = line[0];
		const song = line[1];
		const bonus = line[2];
		if (modifier === mod && get("boomBoxSong") === song) {
			otherTotal = otherTotal + parseInt(bonus);
			otherCount++;
			print(`BOOMBOX ${song} : ${bonus}`);
		}
	}

	var ceiling = getCeiling();

	for (const i in ceilingBonus) {
		const line = ceilingBonus[i];
		const mod = line[0];
		const ceilFurn = line[1];
		const bonus = line[2];
		if (
			isUnrestricted($item`Chateau Mantegna room key`) &&
			modifier === mod &&
			ceiling === ceilFurn
		) {
			otherTotal = otherTotal + parseInt(bonus);
			otherCount++;
			print(`CHATEAU ${ceiling} : ${bonus}`);
		}
	}

	for (const i in furnitureBonus) {
		const line = furnitureBonus[i];
		const mod = line[0];
		const furniture = line[1];
		const bonus = line[2];
		if (modifier === mod && haveInCampground($item`${furniture}`)) {
			otherTotal = otherTotal + parseInt(bonus);
			otherCount++;
			print(`CAMPGROUND ${furniture} : ${bonus}`);
		}
	}

	if (modifier === "adventures") {
		let rolloverTotal = myAdventures();
		otherCount++;
		print(`ADVENTURES: ${rolloverTotal}`);
		print("ROLLOVER: 40");
		rolloverTotal = rolloverTotal + 40;

		if (get("_borrowedTimeUsed")) {
			print("BORROWED TIME: -20");
			rolloverTotal = rolloverTotal - 20;
		}

		var resAdv = get("_resolutionAdv");

		if (resAdv > 0) {
			rolloverTotal = rolloverTotal + resAdv;
			print(`RESOLUTIONS: ${resAdv}`);
		}

		var circAdv = get("_circadianRhythmsAdventures");

		if (circAdv > 0) {
			rolloverTotal = rolloverTotal + circAdv;
			print(`CIRCADIAN RYTHYMS: ${circAdv}`);
		}

		otherTotal = otherTotal + rolloverTotal;
	}

	if (modifier === "pvp fights") {
		var rolloverTotal = pvpAttacksLeft();

		otherCount++;
		print(`PVP FIGHTS: ${rolloverTotal}`);
		print("ROLLOVER: 10");
		rolloverTotal = rolloverTotal + 10;
		otherTotal = otherTotal + rolloverTotal;
	}

	if (otherCount > 0) {
		print(`Misc. Bonuses Total: ${otherTotal}`, "blue");
		print("");
	}

	let effectTotal = 0;
	let effectCount = 0;
	for (const effect in myEffects()) {
		const ef = toEffect(effect);
		if (numericModifier(ef, modifier) !== 0) {
			effectTotal = effectTotal + numericModifier(ef, modifier);
			effectCount++;
			print(
				`EFFECT ${ef} : ${numericModifier(ef, modifier)} ${modifier} for ${haveEffect(
					ef,
				)} more turns`,
			);
		}
	}

	if (have($effect`Fidoxene`) && modifier === "familiar weight") {
		const ef = $effect`Fidoxene`;
		const fidoTotal = Math.max(20 - familiarWeight(myFamiliar()), 0);
		effectTotal = effectTotal + fidoTotal;
		effectCount++;
		print(`EFFECT ${ef} : ${fidoTotal} familiar weight for ${haveEffect(ef)} more turns`);
	}

	if (modifier === "adventures" && haveEffect($effect`Straight-Edgy`)) {
		var ef = $effect`Straight-Edgy`;

		var seTotal = (getRemainingLiver() + 1) * 4.5;
		effectTotal = effectTotal + seTotal;
		effectCount++;
		print(`EFFECT ${ef} : ${seTotal} adventures based on ${getRemainingLiver()} empty liver`);
	}

	if (offhandCount > 0) {
		var ef = $effect`Offhand Remarkable`;

		effectTotal = effectTotal + offhandTotal;
		effectCount++;
		print(`EFFECT ${ef} : ${offhandTotal} ${modifier} for ${haveEffect(ef)} more turns`);
	}

	const squint = $effect`Steely-Eyed Squint`;
	const swagger = $effect`Bow-Legged Swagger`;
	const doublerVal = slotTotal + skillTotal + otherTotal + effectTotal;

	if (modifier === `item drop` && haveEffect(squint)) {
		print(`EFFECT ${squint} : ${doublerVal}`);
		effectTotal = effectTotal + doublerVal;
		effectCount++;
	}

	if (
		haveEffect(swagger) &&
		[`weapon damage`, `weapon damage percent`, `initiative`].includes(modifier)
	) {
		print(`EFFECT ${swagger} : ${doublerVal}`);
		effectTotal = effectTotal + doublerVal;
		effectCount++;
	}

	if (effectCount > 0) {
		print(`Effects Total: ${effectTotal}`, "blue");
		print("");
	}

	//const equipFams = $familiars`Trick-or-Treating Tot, Disembodied Hand, Left-Hand Man`;

	let famTotal = 0;

	const famMod = numericModifier(
		myFamiliar(),
		modifier,
		familiarWeight(myFamiliar()) + weightAdjustment(),
		$item.none,
	);

	if (famMod !== 0) {
		famTotal = famTotal + famMod;
		print(`FAMILIAR ${myFamiliar()} : ${Math.floor(famMod)}`);
	}
	if (modifier === "familiar weight") {
		print(`FAMILIAR ${myFamiliar()} (Base) : ${familiarWeight(myFamiliar())}`);
		famTotal = famTotal + familiarWeight(myFamiliar());
		if (myFamiliar() === $familiar`Comma Chameleon` && get("commaFamiliar") !== null) {
			famTotal = famTotal + 5;
			print(`FAMILIAR Comma Chameleon (Bonus) : 5`);
		}
	}
	if (modifier === "adventures") {
		if (haveFamiliar($familiar`Squamous Gibberer`) && get("_gibbererAdv") > 0) {
			const gibAdv = get("_gibbererAdv");
			famTotal = famTotal + gibAdv;
			print(`FAMILIAR Squamous Gibberer: ${gibAdv}`);
		}

		if (haveFamiliar($familiar`Wild Hare`) && get("_hareAdv") > 0) {
			const hareAdv = get("_hareAdv");
			famTotal = famTotal + hareAdv;
			print(`FAMILIAR Wild Hare: ${hareAdv}`);
		}
	}

	if (famTotal !== 0) {
		famTotal = Math.floor(famTotal);
		print(`Familiar Total: ${famTotal}`, "blue");
		print("");
	}

	totalVal = skillTotal + slotTotal + effectTotal + otherTotal + famTotal;

	print(`Total ${modifier}: ${totalVal}`, "purple");
	print("");

	if (
		(modifier === "adventures" && totalVal > 200) ||
		(modifier === "pvp fights" && totalVal > 100)
	) {
		var cap = modifier === "adventures" ? 200 : 100;
		print(`Losing ${totalVal - cap} ${modifier} due to rollover cap of ${cap}`, "red");
	}
}

export function main(args = ""): void {
	modTraceList(args);
}
