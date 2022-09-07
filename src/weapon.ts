import {
	cliExecute,
	equip,
	handlingChoice,
	inHardcore,
	myClass,
	retrieveItem,
	runChoice,
	use,
	useFamiliar,
	useSkill,
} from "kolmafia";
import {
	$class,
	$effect,
	$effects,
	$familiar,
	$item,
	$items,
	$monster,
	$phylum,
	$skill,
	$slot,
	BeachComb,
	CommunityService,
	get,
	have,
	Macro,
	set,
	uneffect,
} from "libram";
import {
	ensureEffect,
	ensureInnerElf,
	setChoice,
	unequip,
	useDefaultFamiliar,
} from "./lib";
import { delevel, easyFight } from "./asmohccs-macros";
import { geneTonic } from "./workshed";
import { modTraceList } from "./modtrace";
import { resources } from "./trunk";
import uniform, { weaponOutfit } from "./outfit";

const predictor = () => CommunityService.WeaponDamage.prediction;

function getCrushed() {
	if (!have($effect`Do You Crush What I Crush?`)) {
		if (have($effect`Holiday Yoked`) && have($item`soft green echo eyedrop antidote`)) {
			uneffect($effect`Holiday Yoked`);
		}
		if (!have($effect`Holiday Yoked`)) {
			useFamiliar($familiar`Ghost of Crimbo Carols`);
			uniform();
			equip($slot`acc3`, $item`Lil' Doctor™ bag`);
			Macro.item($item`DNA extraction syringe`)
				.step(delevel)
				.step(easyFight)
				.attack()
				.repeat()
				.setAutoAttack();
			resources.locket($monster`Black Crayon Crimbo Elf`);
			//CombatLoversLocket.reminisce($monster`Black Crayon Crimbo Elf`);
			useDefaultFamiliar();
		}
		geneTonic($phylum`elf`);
		ensureEffect($effect`Human-Elf Hybrid`);
	}
}

function castBuffs() {
	$effects`Carol of the Bulls, Song of the North, Rage of the Reindeer, Scowl of the Auk, Disdain of the War Snapper, Tenacity of the Snapper, Billiards Belligerence, Blessing of the Bird, Jackasses' Symphony of Destruction`.forEach(
		(effect) => ensureEffect(effect)
	);
	ensureEffect($effect`Frenzied, Bloody`);
	if (have($item`LOV Elixir #3`)) use($item`LOV Elixir #3`);
	BeachComb.tryHead($effect`Lack of Body-Building`);

	if (myClass() === $class`Seal Clubber` && !get("_barrelPrayer")) {
		cliExecute("barrelprayer buff");
	}
}

//moved Force Spit to occur during NEP Levelling, in order to get it during last little bit of levelling & as bonus to stat tests.

function kungFuMeteors() {
	//TODO - Insert +ML buffs prior to fighting to reduce liklihood of disembodied hand killing it?
	if (!have($effect`Cowrruption`) && !have($item`corrupted marrow`)) {
		uniform();
		if (inHardcore()) {
			useFamiliar($familiar`Disembodied Hand`);
			equip($slot`weapon`, $item`none`);
			equip($slot`off-hand`, $item`none`);
			equip($slot`familiar`, $item`Fourth of May Cosplay Saber`);
		} else {
			useDefaultFamiliar(false);
			equip($slot`weapon`, $item`Fourth of May Cosplay Saber`);
		}
		setChoice(1387, 3);
		Macro.skill($skill`Meteor Shower`)
			.skill($skill`Use the Force`)
			.setAutoAttack();
		resources.locket($monster`ungulith`);
		//CombatLoversLocket.reminisce($monster`ungulith`);
		if (handlingChoice()) runChoice(-1);
		set("_meteorShowerUses", 1 + get("_meteorShowerUses"));
		if (get("_locketMonstersFought") === "") set("_locketMonstersFought", "1932");
		else set("_locketMonstersFought", `${get("_locketMonstersFought")},1932`);
	}
}

function testPrep() {
	if (have($item`corrupted marrow`) && !have($effect`Cowrruption`)) use($item`corrupted marrow`);
	if (!get("_bowleggedSwaggerUsed")) useSkill($skill`Bow-Legged Swagger`);
	grimBuff();
	/*if (!get("_floundryItemCreated")) {
        setClan(get("asmocs_fishClan", "Alliance From Heck"));
        cliExecute("acquire fish hatchet");
    }*/
	if (!inHardcore()) {
		const meteor = $items`meteorite necklace, meteorite fragment, meteorite earring`.find(
			(item) => have(item)
		);
		if (meteor) {
			unequip(meteor);
			retrieveItem(1, $item`tenderizing hammer`);
			retrieveItem(1, $item`jewelry-making pliers`);
			cliExecute(`smash ${meteor}`);
			cliExecute(`make ${$item`meteorite ring`}`);
		}
	}
	weaponOutfit.dress();
}

function grimBuff() {
	if (!get("_grimBuff")) {
		cliExecute($effect`Grumpy and Ornery`.default);
	}
}

export default function weaponTest(): void {
	castBuffs();
	getCrushed();
	if (inHardcore()) ensureInnerElf();
	kungFuMeteors();
	testPrep();
	if (predictor() > 1) throw "Failed to cap weapon damage!";
	modTraceList("weapon damage");
	modTraceList("weapon damage percent");
}
