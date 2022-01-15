import {
    abort,
    adv1,
    availableAmount,
    buy,
	buyUsingStorage,
    chatPrivate,
    choiceFollowsFight,
    cliExecute,
    containsText,
    create,
    eat,
    equip,
	equippedItem,
    getClanName,
	getInventory,
    getProperty,
    haveEffect,
    inMultiFight,
	myClass,
    myMaxhp,
    myMaxmp,
    myMp,
	mySign,
    myTurncount,
    print,
	pullsRemaining,
    restoreHp,
    restoreMp,
    retrieveItem,
    runChoice,
    runCombat,
    setAutoAttack,
    setProperty,
	shopAmount,
	storageAmount,
    sweetSynthesis,
	takeShop,
    totalTurnsPlayed,
    toString as toStringAsh,
    toEffect,
    toInt,
	toItem,
	toSkill,
	toSlot,
    toUrl,
    use,
    useFamiliar,
    useSkill,
    visitUrl,
    wait,
	myEffects,
	numericModifier,
	equippedAmount,
	haveEquipped,
	myFamiliar,
	familiarWeight,
	weightAdjustment,
	haveSkill,
	inMuscleSign,
	inMysticalitySign,
	inMoxieSign,
} from "kolmafia";
import {
    $class,
	$classes,
	$effect,
    $effects,
    $familiar,
    $item,
    $location,
	$phylum,
    $skill,
    $skills,
    $slot,
	$slots,
    get,
    have,
    Macro,
    PropertiesManager,
    property,
	set,
} from "libram";
import { Outfit, withOutfit } from "./outfits";
import { error } from "libram/dist/console";
import {
	getEffect,
	getTonic,
	makeTonic,
	tonicsLeft,
  } from "libram/dist/resources/2014/DNALab";

export const PropertyManager = new PropertiesManager();

export function gingerCandy(): void {
	if (!get(`_asmo_gingercity`)){
		useFamiliar($familiar`Pair of Stomping Boots`);
		set(`choiceAdventure1215`, 1);
		set(`choiceAdventure1204`, 1);
		advMacroAA($location`Gingerbread Civic Center`, Macro.step(`runaway`), 1);
		advMacroAA($location`Gingerbread Train Station`, Macro.step(`runaway`), 4);
		set(`_asmo_gingercity`, true)
	}
}

export function kramcoCheck(): boolean {
    const kramcoNumber =
        5 + 3 * get("_sausageFights") + Math.pow(Math.max(0, get("_sausageFights") - 5), 3);
    return totalTurnsPlayed() - get("_lastSausageMonsterTurn") + 1 >= kramcoNumber;
}

export function useDefaultFamiliar(canAttack = true): void {
    if (!get("_bagOfCandy") && canAttack) {
        useFamiliar($familiar`Stocking Mimic`);
    } else if (!haveEffect($effect`Spit Upon`)
        && !get("csServicesPerformed").split(",").includes("Reduce Gazelle Population")
    ) {
        useFamiliar($familiar`Melodramedary`);
        equip($slot`familiar`, $item`dromedary drinking helmet`);
    } else if (
        canAttack &&
        !have($item`short stack of pancakes`) &&
        !have($effect`Shortly Stacked`) &&
        !get("csServicesPerformed").split(",").includes("Breed More Collies")
    ) {
        useFamiliar($familiar`Shorter-Order Cook`);
    } else if (!have($item`burning newspaper`) && !have($item`burning paper crane`)) {
        useFamiliar($familiar`Garbage Fire`);
    } else {
        useFamiliar($familiar`Puck Man`);
    }
}

export enum Test {
    HP = 1,
    MUS = 2,
    MYS = 3,
    MOX = 4,
    FAMILIAR = 5,
    WEAPON = 6,
    SPELL = 7,
    NONCOMBAT = 8,
    ITEM = 9,
    HOT_RES = 10,
    COIL_WIRE = 11,
    DONATE = 30,
}

export function testDone(testNum: number): boolean {
    //stolen directly from bean
    print(`Checking test ${testNum}...`);
    const text = visitUrl("council.php");
    return !containsText(text, `<input type=hidden name=option value=${testNum}>`);
}

export function doTest(testNum: number): void {
    //stolen directly from bean
    if (!testDone(testNum)) {
        visitUrl(`choice.php?whichchoice=1089&option=${testNum}`);
        if (!testDone(testNum)) {
            throw 'Failed to do test " + testNum + ". Maybe we are out of turns.';
        }
    } else {
        print(`Test ${testNum} already completed.`);
    }
}

export function ensureInnerElf(): void {
    //stolen merely mostly from bean
    if (!have($effect`Inner Elf`)) {
        setClan(get("asmocs_elfClan", "Hobopolis Vacation Home"));
        try {
            withOutfit(
                new Outfit(
                    new Map<Slot, Item>([[$slot`acc3`, $item`Kremlin's Greatest Briefcase`]]),
                    $familiar`Machine Elf`
                ),
                () => {
                    ensureEffect($effect`Blood Bubble`);
                    advMacro(
                        $location`The Slime Tube`,
                        Macro.trySkill($skill`KGB tranquilizer dart`).trySkill($skill`Snokebomb`)
                    );
                }
            );
        } finally {
            setClan(get("asmocs_mainClan", "Alliance From Heck"));
        }
    }
}

export function fightSausageIfAble(location: Location, macro: Macro): void {
    if (kramcoCheck()) {
        equip($slot`off-hand`, $item`Kramco Sausage-o-Matic™`);
        const sausages = get("_sausageFights");
        advMacroAA(location, macro, () => {
            return sausages === get("_sausageFights");
        });
        if (get("lastEncounter") !== "sausage goblin") {
            throw "Did not fight a sausage, but I thought I would. Uh oh!";
        }
    }
}

export function shrug(ef: Effect) {
    if (haveEffect(ef) > 0) {
      cliExecute(`shrug ${ef.name}`);
    }
  }

// We have Stevedave's, Ur-Kel's on at all times during leveling (managed via mood); third and fourth slots are variable.

const songSlots = [
    $effects`Stevedave's Shanty of Superiority`,
    $effects`Ur-Kel's Aria of Annoyance`,
    $effects`Power Ballad of the Arrowsmith, The Magical Mojomuscular Melody, The Moxious Madrigal, Ode to Booze, Jackasses' Symphony of Destruction`,
    $effects`Carlweather's Cantata of Confrontation, The Sonata of Sneakiness, Fat Leon's Phat Loot Lyric, Polka of Plenty`,
  ];
  const allKnownSongs = ([] as Effect[]).concat(...songSlots);
  const allSongs = Skill.all()
    .filter(
      (skill) => toStringAsh(skill.class as unknown as string) === "Accordion Thief" && skill.buff
    )
    .map((skill) => toEffect(skill));
  export function openSongSlot(song: Effect) {
    for (const songSlot of songSlots) {
      if (songSlot.includes(song)) {
        for (const shruggable of songSlot) {
          shrug(shruggable);
        }
      }
    }
    for (const badSong of allSongs) {
      if (!allKnownSongs.includes(badSong)) {
        shrug(badSong);
      }
    }
  }

export function ensurePotionEffect(ef: Effect, potion: Item): void {
    //stolen directly from bean
    if (!have(ef)) {
        if (availableAmount(potion) === 0) {
            create(1, potion);
        }
        if (!cliExecute(ef.default) || haveEffect(ef) === 0) {
            throw `Failed to get effect ${ef.name}.`;
        }
    } else {
        print(`Already have effect ${ef.name}.`);
    }
}

export function ensureSong(ef: Effect) {
    if (haveEffect(ef) === 0) {
      openSongSlot(ef);
      if (!cliExecute(ef.default) || haveEffect(ef) === 0) {
        throw `Failed to get effect ${ef.name}`;
      }
    } else {
      print(`Already have effect ${ef.name}.`);
    }
  }

export function ensureEffect(ef: Effect, turns = 1): void {
    //stolen directly from bean
    if (haveEffect(ef) < turns) {
        if (!cliExecute(ef.default) || haveEffect(ef) === 0) {
            throw `Failed to get effect ${ef.name}.`;
        }
    } else {
        print(`Already have effect ${ef.name}.`);
    }
}

export function setClan(target: string): boolean {
    //stolen directly from bean
    if (getClanName() !== target) {
        const clanCache = JSON.parse(getProperty("hccs_clanCache") || "{}");
        if (clanCache.target === undefined) {
            const recruiter = visitUrl("clan_signup.php");
            const clanRe = /<option value=([0-9]+)>([^<]+)<\/option>/g;
            let match;
            while ((match = clanRe.exec(recruiter)) !== null) {
                clanCache[match[2]] = match[1];
            }
        }
        setProperty("hccs_clanCache", JSON.stringify(clanCache));

        visitUrl(`showclan.php?whichclan=${clanCache[target]}&action=joinclan&confirm=on&pwd`);
        if (getClanName() !== target) {
            throw `failed to switch clans to ${target}. Did you spell it correctly? Are you whitelisted?`;
        }
    }
    return true;
}

export function setChoice(adv: number, choice: number | string): void {
    PropertyManager.setChoices({ [adv]: choice });
}

export function tryUse(quantity: number, it: Item): boolean {
    //ripped straight from bean
    if (availableAmount(it) > 0) {
        return use(quantity, it);
    } else {
        return false;
    }
}

export function multiFightAutoAttack(): void {
    while (choiceFollowsFight() || inMultiFight()) {
        visitUrl("choice.php");
    }
}

export function heal(): void {
    restoreHp(myMaxhp());
}

export function advMacroAA(
    location: Location,
    macro: Macro,
    parameter: number | (() => boolean) = 1,
    afterCombatAction?: () => void
): void {
    let n = 0;
    const condition = () => {
        return typeof parameter === "number" ? n < parameter : parameter();
    };
    macro.setAutoAttack();
    while (condition()) {
        adv1(location, -1, () => {
            return Macro.if_("!pastround 2", macro).abort().toString();
        });
        if (afterCombatAction) afterCombatAction();
        n++;
    }
}

export function advMacro(
    location: Location,
    macro: Macro,
    parameter: number | (() => boolean) = 1,
    afterCombatAction?: () => void
): void {
    setAutoAttack(0);
    let n = 0;
    const condition = () => {
        return typeof parameter === "number" ? n < parameter : parameter();
    };

    while (condition()) {
        adv1(location, -1, () => {
            return Macro.if_("!pastround 2", macro).abort().toString();
        });
        if (afterCombatAction) afterCombatAction();
        n++;
    }
}

export function mapMacro(location: Location, monster: Monster, macro: Macro): void {
    macro.setAutoAttack();
    useSkill($skill`Map the Monsters`);
    if (!get("mappingMonsters")) throw `I am not actually mapping anything. Weird!`;
    else {
        while (get("mappingMonsters") && !have($effect`Meteor Showered`)) {
            visitUrl(toUrl(location));
            runChoice(1, `heyscriptswhatsupwinkwink=${monster.id}`);
            runCombat(macro.toString());
        }
    }
}

export function horsery(): string {
    return get("_horsery");
}

export function horse(horse: string): void {
    if (!horse.includes("horse")) horse = `${horse} horse`;
    if (horsery() !== horse) cliExecute(`horsery ${horse}`);
}

export interface testDuration {
    testName: string;
    turnPrediction: number;
    turnCost: number;
}

export function convertMilliseconds(milliseconds: number): string {
    const seconds = milliseconds / 1000;
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds - minutes * 60;
    const hours = Math.floor(minutes / 60);
    const minutesLeft = minutes - hours * 60;
    return (
        (hours !== 0 ? `${hours} hours, ` : "") +
        (minutesLeft !== 0 ? `${minutesLeft} minutes, ` : "") +
        (secondsLeft !== 0 ? `${secondsLeft} seconds` : "")
    );
}

function checkFax(monster: Monster): boolean {
    cliExecute("fax receive");
    if (property.getString("photocopyMonster").toLowerCase() === monster.name.toLowerCase())
        return true;
    cliExecute("fax send");
    return false;
}

export function fax(monster: Monster): void {
    if (!get("_photocopyUsed")) {
        if (checkFax(monster)) return;
        chatPrivate("cheesefax", monster.name);
        for (let i = 0; i < 3; i++) {
            wait(10);
            if (checkFax(monster)) return;
        }
        abort(`Failed to acquire photocopied ${monster.name}.`);
    }
}

export const tests: testDuration[] = [];

export function testWrapper(name: string, test: Test, prepare: () => number): void {
    if (testDone(test)) return;
    const startTurns = myTurncount();
    const predictedTurns = prepare();
    doTest(test);
    tests.push({
        testName: name,
        turnPrediction: predictedTurns,
        turnCost: myTurncount() - startTurns,
    });
}

export function questStep(questName: string): number {
    const stringStep = property.getString(questName);
    if (stringStep === "unstarted" || stringStep === "") return -1;
    else if (stringStep === "started") return 0;
    else if (stringStep === "finished") return 999;
    else {
        if (stringStep.substring(0, 4) !== "step") {
            throw "Quest state parsing error.";
        }
        return parseInt(stringStep.substring(4), 10);
    }
}


export function ensureMp(mp: number): void {
    if (myMp() > mp) return;
    if (mp > myMaxmp()) throw `Insufficient maximum mp!`;
    while (
        have($item`magical sausage`) ||
        (have($item`magical sausage casing`) && myMp() < mp && get("_sausagesEaten") < 23)
    ) {
        retrieveItem($item`magical sausage`);
        eat($item`magical sausage`);
    }
    while (have($item`psychokinetic energy blob`) && myMp() < mp) {
        use($item`psychokinetic energy blob`);
    }
    if (myMp() < mp) restoreMp(mp);
}

export const maximizeFamiliar = have($familiar`Disembodied Hand`)
    ? $familiar`Disembodied Hand`
    : $familiar`Left-Hand Man`;


// Checks that you don't already have the tonic or effect and if your syringe has the right phylum and if so, makes the appropriate tonic.


function canCastLibrams(): boolean {
    const summonNumber = 1 + get("libramSummons");
    const cost = 1 + (summonNumber * (summonNumber - 10)) / 2;
    return myMp() >= cost + 100;
}

export function burnLibrams(): void {
	if (!$skills`Summon Candy Heart, Summon Taffy, Summon Love Song`.some((skill) => have(skill)))
        return;
    while (canCastLibrams()) {
        const testsDone = get("csServicesPerformed").split(",");
        if (
            ((!testsDone.includes("Breed More Collies") && !have($item`green candy heart`)) ||
            (!testsDone.includes("Make Margaritas") && !have($item`lavender candy heart`))) &&
            have($skill`Summon Candy Heart`)
        ) {
            useSkill($skill`Summon Candy Heart`);
        } else if (
            !testsDone.includes("Breed More Collies") &&
            !have($item`love song of icy revenge`, 4) && 
            have($skill`Summon Love Song`)
        ) {
            useSkill($skill`Summon Love Song`);
        } /*else if (have($skill`Summon BRICKOs`) && get("_brickoEyeSummons") < 3) {
            useSkill($skill`Summon BRICKOs`);
        } else if (
                have($skill`Summon Taffy`) &&
                (!testsDone.includes("Breed More Collies") && !have($item`Pulled Blue Taffy`, 5))
        ) {
            useSkill($skill`Summon Taffy`);
        }*/
            
            else {
            const summonSkill = $skills`Summon Candy Heart, Summon Love Song`.find(
                (skill) => have(skill)
            );
            if (!summonSkill) return;
            useSkill(summonSkill);
        }
    }
}

const moonBonus = [
	["weapon damage percent", "mongoose", "20"],
	["spell damage percent", "wallaby", "20"],
	["familiar weight", "platypus", "5"],
	["meat drop", "wombat", "20"],
	["item drop", "packrat", "10"]
];

export function pullIfPossible(quantity: number, it: Item, maxPrice: number) {
	if (pullsRemaining() > 0) {
	  const quantityPull = Math.max(0, quantity - availableAmount(it));
	  if (shopAmount(it) > 0) {
		takeShop(Math.min(shopAmount(it), quantityPull), it);
	  }
	  if (storageAmount(it) < quantityPull) {
		buyUsingStorage(quantityPull - storageAmount(it), it, maxPrice);
	  }
	  cliExecute(`pull ${quantityPull} ${it.name}`);
	  return true;
	} else return false;
  }
  
  export function ensurePullEffect(ef: Effect, it: Item) {
	if (haveEffect(ef) === 0) {
	  if (availableAmount(it) > 0 || pullIfPossible(1, it, 50000)) ensureEffect(ef);
	}
  }

export function modTraceList(modifier: string) {
	let totalVal = 0;
	print("");
	print("MOD TRACE: "+ modifier, "red");
	for (const effect in myEffects()) {
		let ef = toEffect(effect);
		if (numericModifier(ef, modifier) !=0) {
			totalVal = totalVal + numericModifier(ef, modifier);
			print("EFFECT "+ ef+" : "+numericModifier(ef, modifier)+" "+modifier+" for "+haveEffect(ef)+" more turns");
		}
	}

	for (const slot of $slots``){
		let it = equippedItem(slot);
		if (numericModifier(it, modifier) != 0 && 
			(haveEquipped(it) || (haveEquipped($item`your cowboy boots`) && $slots`bootspur, bootskin`.includes(slot)))){
				totalVal = totalVal + numericModifier(it, modifier);
				print("SLOT "+ slot +" ITEM " + it + " : "+ numericModifier(it, modifier));
		}
	}
	const famMod = numericModifier(myFamiliar(), modifier, familiarWeight(myFamiliar()) + weightAdjustment(), $item`none`);
	if (famMod != 0){
		totalVal = totalVal + famMod;
		print("FAMILIAR " + myFamiliar() + " : " + famMod);
	}
	for (const sk of $skills``){
		if (haveSkill(sk) && numericModifier(sk, modifier) != 0){
			totalVal = totalVal + numericModifier(sk, modifier);
			print("SKILL "+ sk + " : " + numericModifier(sk, modifier));
		}
	}

	const myMoon = mySign();
	if (modifier.includes("experience percent")){
		if (modifier.includes("muscle") && inMuscleSign()){
			totalVal = totalVal + 10;
			print("MOON " + myMoon + " : " + 10);
		}
		else if (modifier.includes("mysticality") && inMysticalitySign()){
			totalVal = totalVal + 10;
			print("MOON " + myMoon + " : " + 10);
		}
		else if (modifier.includes("moxie") && inMoxieSign()){
			totalVal = totalVal + 10;
			print("MOON " + myMoon + " : " + 10);
		}
	}
	/*else if (modifier.includes("damage percent")){
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
	}*/ 
	else {
		for (const line in moonBonus){
			const mod = line[0];
			const moon = line[1];
			const bonus = line[2];
			if (modifier.includes(mod) && myMoon === moon){
				totalVal = totalVal + parseInt(bonus);
				print("MOON " + myMoon + " : " + bonus)
			}
		}
	}

	const squint = $effect`Steely-Eyed Squint`;
	const swagger = $effect`Bow-Legged Swagger`;

	if (modifier === `item drop` && haveEffect(squint)){
		print("EFFECT " + squint + " : " + totalVal);
		totalVal = totalVal * 2;
	}

	if (haveEffect(swagger) && [`weapon damage`, `weapon damage percent`, `initiative`].includes(modifier)){
		print("EFFECT " + swagger + " : " + totalVal);
		totalVal = totalVal * 2;
	}

	print("Total " + modifier + ": " + totalVal, "purple");
	print("");
}

export function inMysClass() {
	if ($classes`Sauceror, Pastamancer`.includes(myClass())){
		return true;
	}
	else{
		return false;
	}
}

export function inMoxClass() {
	if ($classes`Accordion Thief, Disco Bandit`.includes(myClass())){
		return true;
	}
	else{
		return false;
	}
}

export function inMusClass() {
	if ($classes`Seal Clubber, Turtle Tamer`.includes(myClass())){
		return true;
	}
	else{
		return false;
	}
}

