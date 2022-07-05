import {
	equippedItem,
	familiarWeight,
	haveEffect,
	haveEquipped,
	haveSkill,
	inMoxieSign,
	inMuscleSign,
	inMysticalitySign,
	myEffects,
	myFamiliar,
	mySign,
	numericModifier,
	print,
	toEffect,
	toInt,
	weightAdjustment,
} from "kolmafia";
import { $effect, $item, $skills, $slot, $slots, get } from "libram";
import { horsery } from "./asmohccs-lib";

const moonBonus = [
	["weapon damage percent", "mongoose", "20"],
	["spell damage percent", "wallaby", "20"],
	["familiar weight", "platypus", "5"],
	["meat drop", "wombat", "20"],
	["item drop", "packrat", "10"],
];

export function modTraceList(modifier: string): void {
	let totalVal = 0;
	print("");
	print(`MOD TRACE: ${modifier}`, "red");
	for (const effect in myEffects()) {
		const ef = toEffect(effect);
		if (numericModifier(ef, modifier) !== 0) {
			totalVal = totalVal + numericModifier(ef, modifier);
			print(
				`EFFECT ${ef} : ${numericModifier(ef, modifier)} ${modifier} for ${haveEffect(
					ef
				)} more turns`
			);
		}
	}

	for (const slot of $slots``) {
		const it = equippedItem(slot);
		if (
			numericModifier(it, modifier) !== 0 &&
			(haveEquipped(it) ||
				(haveEquipped($item`your cowboy boots`) &&
					$slots`bootspur, bootskin`.includes(slot)) ||
				(haveEquipped($item`over-the-shoulder Folder Holder`) &&
					slot.toString().includes("folder")) ||
				((haveEquipped($item`scratch 'n' sniff sword`) ||
					haveEquipped($item`scratch 'n' sniff crossbow`)) &&
					slot.toString().includes("sticker")))
		) {
			totalVal = totalVal + numericModifier(it, modifier);
			print(`SLOT ${slot} ITEM ${it} : ${numericModifier(it, modifier)}`);
		}
	}
	if (equippedItem($slot`back`) === $item`unwrapped knock-off retro superhero cape`) {
		const capeForm = get(`retroCapeSuperhero`).toLowerCase();
		const capeWash = get(`retroCapeWashingInstructions`).toLowerCase();
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
				totalVal = totalVal + 3;
				print(`RETROCAPE ${capeForm} ${capeWash} : ${3}`);
			} else if (modifier === "muscle percent") {
				totalVal = totalVal + 30;
				print(`RETROCAPE ${capeForm} ${capeWash} : ${30}`);
			} else if (modifier === "maximum hp") {
				totalVal = totalVal + 50;
				print(`RETROCAPE ${capeForm} ${capeWash} : ${50}`);
			}
		} else if (capeForm === "heck") {
			if (modifier === "mysticality percent") {
				totalVal = totalVal + 30;
				print(`RETROCAPE ${capeForm} ${capeWash} : ${30}`);
			} else if (modifier === "maximum mp") {
				totalVal = totalVal + 50;
				print(`RETROCAPE ${capeForm} ${capeWash} : ${50}`);
			}
		} else if (capeForm === "robot") {
			if (modifier === "moxie percent") {
				totalVal = totalVal + 30;
				print(`RETROCAPE ${capeForm} ${capeWash} : ${30}`);
			} else if (["maximum hp", "maximum mp"].includes(modifier)) {
				totalVal = totalVal + 25;
				print(`RETROCAPE ${capeForm} ${capeWash} : ${25}`);
			}
		}
	}

	const famMod = numericModifier(
		myFamiliar(),
		modifier,
		familiarWeight(myFamiliar()) + weightAdjustment(),
		$item`none`
	);
	if (famMod !== 0) {
		totalVal = totalVal + famMod;
		print(`FAMILIAR ${myFamiliar()} : ${famMod}`);
	}
	for (const sk of $skills``) {
		if (haveSkill(sk) && numericModifier(sk, modifier) !== 0) {
			totalVal = totalVal + numericModifier(sk, modifier);
			print(`SKILL ${sk} : ${numericModifier(sk, modifier)}`);
		}
	}

	const myMoon = mySign().toLowerCase();
	if (modifier.includes("experience percent")) {
		if (modifier.includes("muscle") && inMuscleSign()) {
			totalVal = totalVal + 10;
			print(`MOON ${myMoon} : ${10}`);
		} else if (modifier.includes("mysticality") && inMysticalitySign()) {
			totalVal = totalVal + 10;
			print(`MOON ${myMoon} : ${10}`);
		} else if (modifier.includes("moxie") && inMoxieSign()) {
			totalVal = totalVal + 10;
			print(`MOON ${myMoon} : ${10}`);
		}
	} /*else if (modifier.includes("damage percent")) {
        if (modifier.includes("weapon") && myMoon === "mongoose") {
            totalVal = totalVal + 20;
            print("MOON " + myMoon + " : " + 20);
        } else if (modifier.includes("spell") && myMoon === "wallaby") {
            totalVal = totalVal + 20;
            print("MOON " + myMoon + " : " + 20);
        }
    } else if (modifier === "familiar weight" && myMoon === "platypus") {
        totalVal = totalVal + 5;
        print("MOON " + myMoon + " : " + 5);
    }*/ else {
		for (const line in moonBonus) {
			const mod = line[0];
			const moon = line[1];
			const bonus = line[2];
			if (modifier === mod && myMoon.toLowerCase() === moon) {
				totalVal = totalVal + parseInt(bonus);
				print(`MOON ${myMoon} : ${bonus}`);
			}
		}
	}

	if (horsery() !== "" && get(`horseryAvailable`)) {
		const myHorse = horsery();
		if (modifier.includes("init") && myHorse.includes("normal")) {
			totalVal = totalVal + 10;
			print(`HORSERY ${myHorse} : ${10}`);
		} else if (modifier.includes("combat") && myHorse.includes("dark")) {
			totalVal = totalVal - 5;
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
			totalVal = totalVal + 1;
			print(`HORSERY ${myHorse} : ${1}`);
		} else if (modifier === "moxie" && myHorse.includes("crazy")) {
			totalVal = totalVal + toInt(get(`_horseryCrazyMox`));
			print(`HORSERY ${myHorse} : ${get(`_horseryCrazyMox`)}`);
		} else if (modifier === "muscle" && myHorse.includes("crazy")) {
			totalVal = totalVal + toInt(get(`_horseryCrazyMus`));
			print(`HORSERY ${myHorse} : ${get(`_horseryCrazyMus`)}`);
		} else if (modifier === "mysticality" && myHorse.includes("crazy")) {
			totalVal = totalVal + toInt(get(`_horseryCrazyMys`));
			print(`HORSERY ${myHorse} : ${get(`_horseryCrazyMys`)}`);
		}
	}

	const squint = $effect`Steely-Eyed Squint`;
	const swagger = $effect`Bow-Legged Swagger`;

	if (modifier === `item drop` && haveEffect(squint)) {
		print(`EFFECT ${squint} : ${totalVal}`);
		totalVal = totalVal * 2;
	}

	if (
		haveEffect(swagger) &&
		[`weapon damage`, `weapon damage percent`, `initiative`].includes(modifier)
	) {
		print(`EFFECT ${swagger} : ${totalVal}`);
		totalVal = totalVal * 2;
	}

	print(`Total ${modifier}: ${totalVal}`, "purple");
	print("");
}
