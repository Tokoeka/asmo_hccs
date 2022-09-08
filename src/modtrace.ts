import {
	equippedItem,
	familiarEquippedEquipment,
	familiarWeight,
	haveEffect,
	haveEquipped,
	haveSkill,
	inMoxieSign,
	inMuscleSign,
	inMysticalitySign,
	myEffects,
	myFamiliar,
	myLevel,
	mySign,
	myThrall,
	numericModifier,
	print,
	toEffect,
	toInt,
	weightAdjustment,
} from "kolmafia";
import {
	$effect,
	$familiar,
	$familiars,
	$item,
	$skills,
	$slot,
	$slots,
	$thrall,
	get,
} from "libram";
import { horsery } from "./asmohccs-lib";

const moonBonus = [
	["weapon damage percent", "mongoose", "20"],
	["spell damage percent", "wallaby", "20"],
	["familiar weight", "platypus", "5"],
	["meat drop", "wombat", "20"],
	["item drop", "packrat", "10"],
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

//TODO Add voting modifiers

export function modTraceList(modifier: string): void {
	let totalVal = 0;
	print("");
	print(`MOD TRACE: ${modifier}`, "red");

	let slotTotal = 0;
	let slotCount = 0;
	for (const slot of $slots``) {
		const it = equippedItem(slot);
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
			slotTotal = slotTotal + numericModifier(it, modifier);
			slotCount++;
			print(`SLOT ${slot} ITEM ${it} : ${numericModifier(it, modifier)}`);
		}
	}
	if (equippedItem($slot`back`) === $item`unwrapped knock-off retro superhero cape`) {
		const capeForm = get(`retroCapeSuperhero`).toLowerCase();
		const capeWash = get(`retroCapeWashingInstructions`).toLowerCase();
		let retroBonus = 0;
		if (capeForm === "vampire") {
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
		}
		if (retroBonus === 1) {
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

	if (otherCount > 0) {
		print(`Other Bonuses Total: ${otherTotal}`, "blue");
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
					ef
				)} more turns`
			);
		}
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

	const equipFams = $familiars`Trick-or-Treating Tot, Disembodied Hand, Left-Hand Man`;

	const famMod = numericModifier(
		myFamiliar(),
		modifier,
		familiarWeight(myFamiliar()) + weightAdjustment(),
		equipFams.includes(myFamiliar()) ? $item`none` : equippedItem($slot`familiar`)
	);
	if (famMod !== 0) {
		print(`FAMILIAR ${myFamiliar()} : ${Math.floor(famMod)}`);
	}

	let thrallBonus = 0;
	if (myThrall() !== $thrall`none`) {
		if (myThrall() === $thrall`lasagmbie` && modifier === "meat drop") {
			thrallBonus = 20 + 2 * myThrall().level;
		} else if (myThrall() === $thrall`spice ghost` && modifier === "item drop") {
			thrallBonus = 10 + myThrall().level;
		} else if (myThrall() === $thrall`angel hair wisp` && modifier === "initiative") {
			thrallBonus = 5 * myThrall().level;
		}
		if (thrallBonus > 0) {
			print(`THRALL ${myThrall()} : ${thrallBonus}`);
		}
	}

	totalVal = skillTotal + slotTotal + effectTotal + otherTotal + Math.floor(famMod) + thrallBonus;

	print(`Total ${modifier}: ${totalVal}`, "purple");
	print("");
}

export function main(args = ""): void {
	modTraceList(args);
}
