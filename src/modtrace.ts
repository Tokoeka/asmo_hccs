import { equippedItem, familiarWeight, haveEffect, haveEquipped, haveSkill, inMoxieSign, inMuscleSign, inMysticalitySign, myEffects, myFamiliar, mySign, numericModifier, print, toEffect, weightAdjustment } from "kolmafia";
import { $effect, $item, $skills, $slots, get } from "libram";
import { horse, horsery } from "./asmohccs-lib";

const moonBonus = [
    ["weapon damage percent", "Mongoose", "20"],
    ["spell damage percent", "Wallaby", "20"],
    ["familiar weight", "Platypus", "5"],
    ["meat drop", "Wombat", "20"],
    ["item drop", "Packrat", "10"],
];

export function modTraceList(modifier: string) {
    let totalVal = 0;
    print("");
    print("MOD TRACE: " + modifier, "red");
    for (const effect in myEffects()) {
        let ef = toEffect(effect);
        if (numericModifier(ef, modifier) != 0) {
            totalVal = totalVal + numericModifier(ef, modifier);
            print(
                "EFFECT " +
                    ef +
                    " : " +
                    numericModifier(ef, modifier) +
                    " " +
                    modifier +
                    " for " +
                    haveEffect(ef) +
                    " more turns"
            );
        }
    }

    for (const slot of $slots``) {
        let it = equippedItem(slot);
        if (
            numericModifier(it, modifier) != 0 &&
            (haveEquipped(it) ||
                (haveEquipped($item`your cowboy boots`) &&
                    $slots`bootspur, bootskin`.includes(slot)))
        ) {
            totalVal = totalVal + numericModifier(it, modifier);
            print("SLOT " + slot + " ITEM " + it + " : " + numericModifier(it, modifier));
        }
    }
    const famMod = numericModifier(
        myFamiliar(),
        modifier,
        familiarWeight(myFamiliar()) + weightAdjustment(),
        $item`none`
    );
    if (famMod != 0) {
        totalVal = totalVal + famMod;
        print("FAMILIAR " + myFamiliar() + " : " + famMod);
    }
    for (const sk of $skills``) {
        if (haveSkill(sk) && numericModifier(sk, modifier) != 0) {
            totalVal = totalVal + numericModifier(sk, modifier);
            print("SKILL " + sk + " : " + numericModifier(sk, modifier));
        }
    }

    const myMoon = mySign();
    if (modifier.includes("experience percent")) {
        if (modifier.includes("muscle") && inMuscleSign()) {
            totalVal = totalVal + 10;
            print("MOON " + myMoon + " : " + 10);
        } else if (modifier.includes("mysticality") && inMysticalitySign()) {
            totalVal = totalVal + 10;
            print("MOON " + myMoon + " : " + 10);
        } else if (modifier.includes("moxie") && inMoxieSign()) {
            totalVal = totalVal + 10;
            print("MOON " + myMoon + " : " + 10);
        }
    	else if (modifier.includes("damage percent")){
			if (modifier.includes("weapon") && myMoon === "Mongoose"){
				totalVal = totalVal + 20;
				print("MOON " + myMoon + " : " + 20);			
			}
			else if (modifier.includes("spell") && myMoon === "Wallaby"){
				totalVal = totalVal + 20;
				print("MOON " + myMoon + " : " + 20);	
			}
		}
		else if (modifier === "familiar weight" && myMoon === "Platypus"){
			totalVal = totalVal + 5;
			print("MOON " + myMoon + " : " + 5);	
		}
        /*for (const line in moonBonus) {
            const mod = line[0];
            const moon = line[1];
            const bonus = line[2];
            if (modifier === mod && myMoon === moon) {
                totalVal = totalVal + parseInt(bonus);
                print("MOON " + myMoon + " : " + bonus);
            }
        }*/
    }

	if (horsery() !== "" && get(`horseryAvailable`)){
		const myHorse = horsery();
		if (modifier.includes("init") && myHorse.includes("normal")){
			totalVal = totalVal + 10;
			print("HORSERY " + myHorse + " : " + 10);
		}
		else if (modifier.includes("combat") && myHorse.includes("dark")){
			totalVal = totalVal - 5;
			print("HORSERY " + myHorse + " : -5");
		}
		else if (modifier.includes("resistance") && myHorse.includes("pale")){
			totalVal = totalVal + 1;
			print("HORSERY " + myHorse + " : " + 1);
		}
		else if (modifier.includes("moxie") && myHorse.includes("pale")){
			totalVal = totalVal + 1;
			print("HORSERY " + myHorse + " : " + 1);
		}
	}

    const squint = $effect`Steely-Eyed Squint`;
    const swagger = $effect`Bow-Legged Swagger`;

    if (modifier === `item drop` && haveEffect(squint)) {
        print("EFFECT " + squint + " : " + totalVal);
        totalVal = totalVal * 2;
    }

    if (
        haveEffect(swagger) &&
        [`weapon damage`, `weapon damage percent`, `initiative`].includes(modifier)
    ) {
        print("EFFECT " + swagger + " : " + totalVal);
        totalVal = totalVal * 2;
    }

    print("Total " + modifier + ": " + totalVal, "purple");
    print("");
}