import {
	availableAmount,
	buy,
	cliExecute,
	create,
	eat,
	equip,
	getCounters,
	getWorkshed,
	haveEffect,
	haveEquipped,
	holiday,
	knollAvailable,
	mpCost,
	myClass,
	myLevel,
	myMeat,
	myMp,
	numericModifier,
	retrieveItem,
	runChoice,
	runCombat,
	toEffect,
	totalFreeRests,
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
	$items,
	$location,
	$monster,
	$phylum,
	$skill,
	$skills,
	$slot,
	BeachComb,
	ChateauMantegna,
	DNALab,
	get,
	have,
	Macro,
	SourceTerminal,
	TunnelOfLove,
	Witchess,
	withProperty,
} from "libram";
import { candyblast, defaultKill, delevel, easyFight } from "./asmohccs-macros";
import {
	advMacro,
	advMacroAA,
	burnLibrams,
	ensureEffect,
	ensureInnerElf,
	ensureMp,
	heal,
	horse,
	inMoxClass,
	inMusClass,
	inMysClass,
	mapMacro,
	multiFightAutoAttack,
	questStep,
	setChoice,
	tryUse,
	useDefaultFamiliar,
} from "./asmohccs-lib";
import { universalWeightEffects } from "./familiarweight";
import uniform from "./outfits";
import { synthMox, synthMoxExp, synthMus, synthMusExp, synthMysExp, synthMyst } from "./synthesis";
import { geneTonic } from "./workshed";
import { resources } from ".";

function initialExp() {
	if (!have($effect`That's Just Cloud-Talk, Man`)) {
		visitUrl("place.php?whichplace=campaway&action=campaway_sky");
	}

	if (inMysClass()) {
		ensureEffect($effect`Inscrutable Gaze`);
		ensureEffect($effect`Thaumodynamic`);
		if (!have($effect`Synthesis: Learning`)) synthMysExp();
		equip($item`LOV Epaulettes`, $slot`back`);
	} else if (inMusClass()) {
		ensureEffect($effect`Muscle Unbound`);
		if (!have($effect`Synthesis: Movement`)) synthMusExp();
		equip($item`LOV Eardigan`, $slot`shirt`);
	} else if (inMoxClass()) {
		ensureEffect($effect`So Fresh and So Clean`);
		if (!have($effect`Synthesis: Style`)) synthMoxExp();
		equip($item`LOV Earrings`, $slot`acc1`);
	}

	equip($item`familiar scrapbook`, $slot`off-hand`);

	if (have($item`white candy heart`)) {
		ensureEffect($effect`Heart of White`);
	}

	if (availableAmount($item`a ten-percent bonus`)) {
		use(1, $item`a ten-percent bonus`);
	}

	if (inMysClass()) {
		cliExecute("bastille myst brutalist");
	} else if (inMusClass()) {
		cliExecute("bastille muscle brutalist");
	} else if (inMoxClass()) {
		cliExecute("bastille moxie brutalist");
	}
}

function buffMainstat() {
	if (have($item`natural magick candle`)) use($item`natural magick candle`);

	use(1, $item`Bird-a-Day calendar`);

	const lovePotion = $item`Love Potion #0`;
	const loveEffect = $effect`Tainted Love Potion`;

	BeachComb.tryHead($effect`You Learned Something Maybe!`);
	BeachComb.tryHead($effect`Do I Know You From Somewhere?`);

	if (have($item`potion of temporary gr8ness`)) {
		use($item`potion of temporary gr8ness`);
	}

	if (inMysClass()) {
		BeachComb.tryHead($effect`We're All Made of Starfish`);
		ensureEffect($effect`Uncucumbered`);
		ensureEffect($effect`Glittering Eyelashes`);

		if (!have($effect`Synthesis: Smart`)) synthMyst();

		if (!have(loveEffect)) {
			if (!have(lovePotion)) {
				useSkill(1, $skill`Love Mixology`);
			}
			visitUrl(`desc_effect.php?whicheffect=${loveEffect.descid}`);
			if (
				numericModifier(loveEffect, "mysticality") > 10 &&
				numericModifier(loveEffect, "muscle") > -30 &&
				numericModifier(loveEffect, "moxie") > -30 &&
				numericModifier(loveEffect, "maximum hp percent") > -0.001
			) {
				use(1, lovePotion);
			}
		}

		if (
			get("yourFavoriteBirdMods")
				.split(",")
				.some((mod) => mod.includes("Mysticality Percent: +"))
		) {
			useSkill($skill`Visit your Favorite Bird`);
		}
	} else if (inMusClass()) {
		BeachComb.tryHead($effect`Lack of Body-Building`);
		ensureEffect($effect`Muddled`);
		ensureEffect($effect`Quiet Determination`);

		if (!have($effect`Go Get 'Em, Tiger!`)) {
			retrieveItem($item`Ben-Gal™ Balm`);
			use(1, $item`Ben-Gal™ Balm`);
		}

		if (!have($effect`Synthesis: Strong`)) synthMus();

		if (!have(loveEffect)) {
			if (!have(lovePotion)) {
				useSkill(1, $skill`Love Mixology`);
			}
			visitUrl(`desc_effect.php?whicheffect=${loveEffect.descid}`);
			if (
				numericModifier(loveEffect, "mysticality") > -30 &&
				numericModifier(loveEffect, "muscle") > 10 &&
				numericModifier(loveEffect, "moxie") > -30 &&
				numericModifier(loveEffect, "maximum hp percent") > -0.001
			) {
				use(1, lovePotion);
			}
		}

		if (
			get("yourFavoriteBirdMods")
				.split(",")
				.some((mod) => mod.includes("Muscle Percent: +"))
		) {
			useSkill($skill`Visit your Favorite Bird`);
		}
	} else if (inMoxClass()) {
		BeachComb.tryHead($effect`Pomp & Circumsands`);
		ensureEffect($effect`Ten out of Ten`);
		ensureEffect($effect`Quiet Desperation`);

		if (!have($effect`Unrunnable Face`)) {
			tryUse(1, $item`runproof mascara`);
		}

		if (have($item`eyedrops of newt`)) {
			use($item`eyedrops of newt`);
		}

		if (!have($effect`Synthesis: Cool`)) synthMox();

		if (!have(loveEffect)) {
			if (!have(lovePotion)) {
				useSkill(1, $skill`Love Mixology`);
			}
			visitUrl(`desc_effect.php?whicheffect=${loveEffect.descid}`);
			if (
				numericModifier(loveEffect, "mysticality") > -30 &&
				numericModifier(loveEffect, "muscle") > -30 &&
				numericModifier(loveEffect, "moxie") > 10 &&
				numericModifier(loveEffect, "maximum hp percent") > -0.001
			) {
				use(1, lovePotion);
			}
		}

		if (
			get("yourFavoriteBirdMods")
				.split(",")
				.some((mod) => mod.includes("Moxie Percent: +"))
		) {
			useSkill($skill`Visit your Favorite Bird`);
		}
	}

	if (!get("_lyleFavored")) ensureEffect($effect`Favored by Lyle`);
	if (!get("telescopeLookedHigh")) ensureEffect($effect`Starry-Eyed`);

	if (get("spacegateVaccine2") && get("spaceGateAlways") && !get("_spacegateVaccine")) {
		cliExecute("spacegate vaccine 2");
	}

	if (!get("_streamsCrossed")) {
		cliExecute("crossstreams");
	}

	equip($slot`acc3`, $item`Powerful Glove`);
	ensureEffect($effect`Triple-Sized`);
	ensureEffect($effect`Feeling Excited`);
	if (!get("_favoriteBirdVisited")) useSkill($skill`Visit your Favorite Bird`); //TODO check on this

	if (have($item`votive of confidence`)) use($item`votive of confidence`);

	if (!get("_freePillKeeperUsed")) {
		cliExecute("pillkeeper familiar");
	}
	if (have($item`MayDay™ supply package`)) {
		use($item`MayDay™ supply package`);
	}
}

function castBuffs() {
	/*useFamiliar($familiar`Left-Hand Man`);
    maximize("mp", false);*/
	uniform($item`Abracandalabra`);

	if (get("_sausagesEaten") === 0) {
		cliExecute("eat 1 magic sausage");
		useSkill(1, $skill`Advanced Saucecrafting`);
		useSkill(1, $skill`Advanced Cocktailcrafting`);
		useSkill(1, $skill`Acquire Rhinestones`);
		useSkill(1, $skill`Prevent Scurvy and Sobriety`);
	}

	if (!have($item`blue rocket`) && !have($effect`Glowing Blue`)) {
		visitUrl("clan_viplounge.php?action=fwshop&whichfloor=2");
		buy(1, $item`blue rocket`);
	}

	if (have($item`Napalm In The Morning™ candle`)) use($item`Napalm In The Morning™ candle`);

	if (have($item`pressurized potion of proficiency`))
		use($item`pressurized potion of proficiency`);

	if (!have($item`turtle totem`)) cliExecute("acquire turtle totem");
	if (!have($item`saucepan`)) cliExecute("acquire saucepan");

	$skills`The Magical Mojomuscular Melody, Stevedave's Shanty of Superiority, Fat Leon's Phat Loot Lyric, The Polka of Plenty, Leash of Linguini, Empathy of the Newt, Blood Bond, Blood Bubble, Song of Bravado, Get Big`.forEach(
		(buff) => {
			if (!have(toEffect(buff))) {
				if (myMp() < mpCost(buff)) {
					if (totalFreeRests() > get("timesRested")) {
						visitUrl("place.php?whichplace=chateau&action=chateau_restbox");
					} else if (availableAmount($item`psychokinetic energy blob`) >= 1) {
						use(2, $item`psychokinetic energy blob`);
					} else {
						eat(1, $item`magical sausage`);
					}
				}
				useSkill(1, buff);
			}
		}
	);

	if (holiday() === `Dependence Day` && myMeat() >= 400) {
		if (inMoxClass()) {
			buy($item`snake`, 1, 300);
			use($item`snake`);
		} else if (inMusClass()) {
			buy($item`M-242`, 1, 300);
			use($item`M-242`);
		} else {
			buy($item`sparkler`, 1, 300);
			use($item`sparkler`);
		}
	}

	universalWeightEffects();
}

function getYoked() {
	//I Don't get Yoked due to my Test Order
	uniform();
	useFamiliar($familiar`Ghost of Crimbo Carols`);
	if (get("snojoSetting") === "NONE") {
		visitUrl("place.php?whichplace=snojo&action=snojo_controller");
		runChoice(2);
	}
	heal();
	advMacroAA(
		$location`The X-32-F Combat Training Snowman`,
		Macro.step(delevel).attack().repeat(),
		() => {
			return !have($effect`Holiday Yoked`);
		}
	);
}

function witchGhostAgent() {
	if (questStep("questM25Armorer") === -1) {
		visitUrl("shop.php?whichshop=armory&action=talk");
		runChoice(1);
	}
	cliExecute("fold makeshift garbage shirt");
	uniform(...$items`protonic accelerator pack, makeshift garbage shirt, familiar scrapbook`);
	heal();
	useDefaultFamiliar();
	ensureMp(100);
	Macro.step(defaultKill).repeat().setAutoAttack();
	if (!have($item`battle broom`)) {
		Witchess.fightPiece($monster`Witchess Witch`);
	}
	equip($slot`acc3`, $item`battle broom`);

	const ghostLocation = get("ghostLocation");
	if (ghostLocation) {
		//moved acquiring portscan into the if to stop it doubling up on portscan if need to rerun the script.
		SourceTerminal.educate($skill`Portscan`);
		equip($slot`off-hand`, $item`familiar scrapbook`);

		if (inMysClass()) {
			equip($slot`hat`, $item`Daylight Shavings Helmet`);
		}

		useDefaultFamiliar();
		advMacro(
			ghostLocation,
			Macro.step(delevel)
				.step(easyFight)
				.trySkill($skill`Portscan`)
				.trySkill($skill`Shoot Ghost`)
				.trySkill($skill`Shoot Ghost`)
				.trySkill($skill`Shoot Ghost`)
				.trySkill($skill`Trap Ghost`)
		);
	}
	if (!have($item`government`) && !have($item`government cheese`)) {
		equip($slot`back`, $item`vampyric cloake`);
		useDefaultFamiliar();
		uniform(
			$item`vampyric cloake`,
			[$item`gold detective badge`, $slot`acc2`],
			[$item`Lil' Doctor™ bag`, $slot`acc3`]
		);
		advMacroAA(
			$location`Noob Cave`,
			Macro.step(delevel)
				.trySkill($skill`Otoscope`)
				.trySkill($skill`Become a Bat`)
				.trySkill($skill`Chest X-Ray`),
			() => {
				return getCounters("Portscan", 0, 0) !== "";
			},
			() => () => ensureMp(30)
		);
		const desertAccessItem = knollAvailable()
			? $item`bitchin' meatcar`
			: $item`Desert Bus pass`;
		if (!have(desertAccessItem)) {
			cliExecute(`acquire ${desertAccessItem.name}`);
		}
		visitUrl("place.php?whichplace=desertbeach&action=db_nukehouse");
	}
}

function lov(): void {
	if (get("_loveTunnelUsed")) {
		return;
	}
	cliExecute("fold makeshift garbage shirt");
	uniform(...$items`vampyric cloake, makeshift garbage shirt`);
	heal();
	useDefaultFamiliar();
	Macro.if_("monstername LOV enforcer", Macro.attack().repeat())
		.if_("monstername LOV Engineer", Macro.step(candyblast).skill("saucegeyser").repeat())
		.if_(
			"monstername LOV equivocator",
			Macro.step(delevel)
				.step(easyFight)
				.trySkill($skill`Become a Wolf`)
				.step(candyblast)
				.attack()
				.repeat()
		)
		.setAutoAttack();
	if (inMysClass()) {
		TunnelOfLove.fightAll(
			"LOV Epaulettes",
			"Open Heart Surgery",
			"LOV Extraterrestrial Chocolate"
		);
	} else if (inMusClass()) {
		TunnelOfLove.fightAll(
			"LOV Eardigan",
			"Open Heart Surgery",
			"LOV Extraterrestrial Chocolate"
		);
	} else if (inMoxClass()) {
		TunnelOfLove.fightAll(
			"LOV Earring",
			"Open Heart Surgery",
			"LOV Extraterrestrial Chocolate"
		);
	}
	if (get(`_loveChocolatesUsed`) === 0) {
		use(1, $item`LOV Extraterrestrial Chocolate`);
	}
	burnLibrams();
}

function acquireFruit() {
	cliExecute("backupcamera ml");

	if ($classes`Sauceror, Seal Clubber, Turtle Tamer`.includes(myClass())) {
		//acquiring lemon (for mus classes) and cherry for saucerors (as well as lime and grapefruit if you don't have Summon Sobriety & Scurvy)
		uniform();
		useDefaultFamiliar(false);

		if (get("questM23Meatsmith") === "unstarted") {
			visitUrl("shop.php?whichshop=meatsmith&action=talk");
			runChoice(1);
		}

		mapMacro(
			$location`The Skeleton Store`,
			$monster`novelty tropical skeleton`,
			Macro.if_(
				`monsterid ${$monster`novelty tropical skeleton`.id}`,
				Macro.trySkill($skill`Feel Envy`).trySkill($skill`Shattering Punch`)
			)
		);
	} else if (inMoxClass()) {
		uniform();
		useDefaultFamiliar(false);
		//resources.locket($monster`evil olive`);
		resources.wish($monster`Evil Olive`);
		//cliExecute("genie monster evil olive");
		runCombat(
			Macro.trySkill($skill`Feel Envy`)
				.trySkill($skill`Shattering Punch`)
				.toString()
		);
	}
}

function sauceCraft() {
	/*if (have($item`magical sausage casing`) || have($item`magical sausage`)) {
        cliExecute("eat magic sausage");
    }
    uniform();
    if (
        get("_monstersMapped") < 2 &&
        availableAmount($item`tomato`) +
            availableAmount($item`tomato juice of powerful power`) +
            haveEffect($effect`Tomato Power`) ===
            0
    ) {
        equip($slot`acc3`, $item`Lil' Doctor™ bag`);
        useDefaultFamiliar();
        mapMacro(
            $location`The Haunted Pantry`,
            $monster`possessed can of tomatoes`,
            Macro.if_(
                `monsterid ${$monster`possessed can of tomatoes`.id}`,
                Macro.skill($skill`Reflex Hammer`)
            )
        );
    }*/

	if (!get("hasRange")) {
		if (!have($item`Dramatic™ range`)) {
			buy(1, $item`Dramatic™ range`);
		}
		use(1, $item`Dramatic™ range`);

		useSkill($skill`Advanced Saucecrafting`);
		useSkill($skill`Prevent Scurvy and Sobriety`);
		if (!have($effect`Tomato Power`)) {
			if (!have($item`tomato juice of powerful power`) && have($item`tomato`)) {
				create(1, $item`tomato juice of powerful power`);
			}
			if (have($item`tomato juice of powerful power`)) {
				use(1, $item`tomato juice of powerful power`);
			}
		}
		if (inMysClass()) {
			if (!have($effect`Mystically Oiled`)) {
				if (!have($item`ointment of the occult`)) {
					create(1, $item`ointment of the occult`);
				}
				if (have($item`ointment of the occult`)) {
					use(1, $item`ointment of the occult`);
				}
			}
			if (myClass() === $class`Sauceror`) {
				if (!have($item`oil of expertise`)) {
					create(1, $item`oil of expertise`);
				}
			}
		} else if (inMusClass()) {
			if (!have($effect`Phorcefullness`)) {
				if (!have($item`philter of phorce`)) {
					create(1, $item`philter of phorce`);
				}
				if (have($item`philter of phorce`)) {
					use(1, $item`philter of phorce`);
				}
			}
			if (!have($item`oil of stability`)) {
				create(1, $item`oil of stability`);
			}
		} else if (inMoxClass()) {
			if (!have($effect`Superhuman Sarcasm`)) {
				if (!have($item`serum of sarcasm`)) {
					create(1, $item`serum of sarcasm`);
				}
				if (have($item`serum of sarcasm`)) {
					use(1, $item`serum of sarcasm`);
				}
			}
			if (!have($item`oil of slipperiness`)) {
				create(1, $item`oil of slipperiness`);
			}
		}
	}
}

function godLob() {
	if (get("_godLobsterFights") === 0) {
		Macro.step(delevel).step(easyFight).attack().repeat().setAutoAttack();
		uniform($item`makeshift garbage shirt`);
		heal();
		useFamiliar($familiar`God Lobster`);
		setChoice(1310, 1);
		visitUrl("main.php?fightgodlobster=1");
		runCombat(Macro.step(delevel).step(easyFight).step(defaultKill).repeat().toString());
		multiFightAutoAttack();
		runChoice(-1);
		equip($slot`familiar`, $item`God Lobster's Scepter`);
		heal();
		visitUrl("main.php?fightgodlobster=1");
		runCombat();
		multiFightAutoAttack();
		runChoice(-1);
		equip($slot`familiar`, $item`God Lobster's Ring`);
	}
}

function snojo(): void {
	if (get("_snojoFreeFights") >= 10) {
		return;
	}
	if (get("_discoKnife") === false) {
		useSkill($skill`That's Not a Knife`);
	}
	uniform();
	useDefaultFamiliar();
	if (get("snojoSetting") === "NONE" || get(`snojoSetting`) === null) {
		visitUrl("place.php?whichplace=snojo&action=snojo_controller");
		if (inMysClass()) {
			runChoice(2);
		} else if (inMusClass()) {
			runChoice(1);
		} else if (inMoxClass()) {
			runChoice(3);
		}
	}
	if (
		getWorkshed() === $item`Little Geneticist DNA-Splicing Lab` &&
		!haveEffect($effect`Human-Machine Hybrid`)
	) {
		advMacroAA(
			$location`The X-32-F Combat Training Snowman`,
			Macro.item($item`DNA extraction syringe`)
				.step(delevel)
				.step(easyFight)
				.attack()
				.repeat(),
			() => {
				return get(`dnaSyringe`) !== $phylum`construct`;
			},
			() => {
				heal();
				useDefaultFamiliar();
				geneTonic($phylum`construct`);
				ensureEffect($effect`Human-Machine Hybrid`);
			}
		);
	}

	advMacroAA(
		$location`The X-32-F Combat Training Snowman`,
		Macro.step(delevel).step(easyFight).attack().repeat(),
		() => {
			return get("_snojoFreeFights") < 10;
		},
		() => {
			heal();
			useDefaultFamiliar();
			ensureMp(30);
		}
	);
	cliExecute("hottub");
}

function tentacle(): void {
	if (!have($skill`Evoke Eldritch Horror`) || get(`_eldritchHorrorEvoked`)) return;
	withProperty("autoAbortThreshold", -0.05, () => {
		uniform();
		useDefaultFamiliar();
		const macro = Macro.step(delevel).step(candyblast).step(easyFight).attack().repeat();
		macro.setAutoAttack();
		useSkill($skill`Evoke Eldritch Horror`);
		runCombat(macro.toString());
		if (have($effect`Beaten Up`)) cliExecute("soak");
	});
}

function NEP() {
	if (get("_questPartyFair") === "unstarted") {
		setChoice(1322, "");
		visitUrl("adventure.php?snarfblat=528");
		if (get("_questPartyFairQuest") === "food") {
			runChoice(1);
			setChoice(1324, 2);
			setChoice(1326, 3);
		} else if (get("_questPartyFairQuest") === "booze") {
			runChoice(1);
			setChoice(1324, 3);
			setChoice(1327, 3);
		} else {
			runChoice(2);
			setChoice(1324, 5);
		}
	}

	uniform($item`makeshift garbage shirt`, $item`Kramco Sausage-o-Matic™`);
	useDefaultFamiliar();
	advMacroAA(
		$location`The Neverending Party`,

		Macro.if_("!hasskill Bowl Sideways && hasskill Feel Pride", Macro.skill("Feel Pride"))
			.trySkill("Bowl Sideways")
			.step(delevel)
			.trySkill($skill`%fn, spit on me!`)
			.step(easyFight)
			.attack()
			.repeat(),
		() => {
			return get("_neverendingPartyFreeTurns") < 10;
		},
		() => {
			useDefaultFamiliar();
			heal();
			if (get("_sausageFights") > 3 && haveEquipped($item`Kramco Sausage-o-Matic™`)) {
				equip($slot`off-hand`, $item`familiar scrapbook`);
			}
			if (get("choiceAdventure1324") !== 5 && questStep("_questPartyFair") > 0) {
				setChoice(1324, 5);
			}
			if (myLevel() >= 13 && !have($effect`Inner Elf`)) {
				ensureInnerElf();
			}
			if (myMeat() >= 1000 && !get("hasRange")) {
				sauceCraft();
			}
			ensureMp(30);
		}
	);
	advMacroAA(
		$location`The Neverending Party`,
		Macro.if_(
			"!monstername sausage goblin",
			Macro.trySkill($skill`Shattering Punch`).trySkill($skill`Chest X-Ray`)
		).if_(
			"monstername sausage goblin",
			Macro.step(delevel).step(candyblast).step(easyFight).attack().repeat()
		),
		() => {
			return get("_shatteringPunchUsed") < 3;
		},
		() => {
			heal();
			useDefaultFamiliar();
			if (get("_sausageFights") > 4 && haveEquipped($item`Kramco Sausage-o-Matic™`)) {
				equip($slot`off-hand`, $item`familiar scrapbook`);
			}
			if (get("choiceAdventure1324") !== 5 && questStep("_questPartyFair") > 0) {
				setChoice(1324, 5);
			}
			if (myLevel() >= 13 && !have($effect`Inner Elf`)) {
				ensureInnerElf();
			}
			ensureMp(30);
		}
	);
	equip($slot`acc3`, $item`Lil' Doctor™ bag`);
	advMacroAA(
		$location`The Neverending Party`,
		Macro.if_(
			"!monstername sausage goblin",
			Macro.trySkill($skill`Shattering Punch`).trySkill($skill`Chest X-Ray`)
		).if_(
			"monstername sausage goblin",
			Macro.step(delevel).step(candyblast).step(easyFight).attack().repeat()
		),
		() => {
			return get("_chestXRayUsed") < 3;
		},
		() => {
			heal();
			useDefaultFamiliar();
			if (get("_sausageFights") > 4 && haveEquipped($item`Kramco Sausage-o-Matic™`)) {
				equip($slot`off-hand`, $item`familiar scrapbook`);
			}
			if (get("choiceAdventure1324") !== 5 && questStep("_questPartyFair") > 0) {
				setChoice(1324, 5);
			}
			if (myLevel() >= 13 && !have($effect`Inner Elf`)) {
				ensureInnerElf();
			}
			ensureMp(30);
		}
	);
}

function mElfLeveling() {
	cliExecute("fold garbage shirt");
	uniform($item`makeshift garbage shirt`);
	useFamiliar($familiar`Machine Elf`);
	advMacroAA(
		$location`The Deep Machine Tunnels`,
		defaultKill,
		() => {
			return get("_machineTunnelsAdv") < 5;
		},
		heal
	);
}

function royalty() {
	if (!have($item`very pointy crown`)) {
		Macro.tryItem($item`jam band bootleg`)
			.tryItem($item`gas can`)
			.tryItem($item`Time-Spinner`)
			.attack()
			.repeat()
			.setAutoAttack();
		uniform(...$items`makeshift garbage shirt, familiar scrapbook`);
		useDefaultFamiliar();
		heal();
		Witchess.fightPiece($monster`Witchess Queen`);
	}
	if (!have($item`dented scepter`)) {
		Macro.step(delevel).attack().repeat().setAutoAttack();
		uniform();
		useDefaultFamiliar();
		heal();
		Witchess.fightPiece($monster`Witchess King`);
	}
}

function restAndBuff() {
	ChateauMantegna.changeNightstand(
		inMysClass()
			? `foreign language tapes`
			: inMoxClass()
			? `bowl of potpourri`
			: `electric muscle stimulator`
	);
	if (inMysClass()) {
		ensureEffect($effect`Inscrutable Gaze`);
		ensureEffect($effect`Thaumodynamic`);
		if (!have($effect`Synthesis: Learning`)) synthMysExp();
		equip($item`LOV Epaulettes`, $slot`back`);
	} else if (inMusClass()) {
		ensureEffect($effect`Muscle Unbound`);
		if (!have($effect`Synthesis: Movement`)) synthMusExp();
		equip($item`LOV Eardigan`, $slot`shirt`);
	} else if (inMoxClass()) {
		ensureEffect($effect`So Fresh and So Clean`);
		if (!have($effect`Synthesis: Style`)) synthMoxExp();
		equip($item`LOV Earrings`, $slot`acc1`);
	}

	equip($item`familiar scrapbook`, $slot`off-hand`);
	while (get("timesRested") < totalFreeRests()) {
		burnLibrams();
		visitUrl("place.php?whichplace=chateau&action=chateau_restbox");
	}
}

function digitwinked() {
	uniform();
	useDefaultFamiliar();
	if (!get("latteUnlocks").includes("chili")) {
		equip($slot`off-hand`, $item`latte lovers member's mug`);
	}

	advMacroAA(
		$location`The Haunted Kitchen`,
		Macro.step(delevel).step(easyFight).step(candyblast).attack().repeat(),
		() => {
			return getCounters("Digitize", 0, 0).trim() !== "";
		}
	);

	uniform();
	if (get("latteUnlocks").includes("chili")) {
		equip($slot`off-hand`, $item`familiar scrapbook`);
	}

	advMacroAA(
		$location`The Haunted Kitchen`,
		Macro.step(delevel).step(easyFight).step(candyblast).attack().repeat(),
		() => {
			return getCounters("Romantic Monster window end", 0, 0).trim() !== "";
		}
	);
}

function hybridize(): void {
	if (
		getWorkshed() !== $item`Little Geneticist DNA-Splicing Lab` ||
		DNALab.isHybridized($phylum`fish`)
	) {
		return;
	}
	// become a human fish hybrid
	if (!DNALab.isHybridized($phylum`fish`) && get("dnaSyringe") !== $phylum`fish`) {
		useFamiliar($familiar`Ms. Puck Man`);
		advMacroAA(
			$location`The Bubblin' Caldera`,
			Macro.while_(
				"!monstername lava lamprey",
				Macro.trySkill($skill`Extract`).trySkill($skill`Macrometeorite`)
			).if_(
				"monstername lava lamprey",
				Macro.trySkill($skill`Extract`)
					.item($item`DNA extraction syringe`)
					.skill($skill`Feel Hatred`)
			),
			() => {
				return get("dnaSyringe") !== $phylum`fish`;
			}
		);
	}

	if (!DNALab.hybridize()) {
		throw "Failed to hybridize fish";
	}
	useDefaultFamiliar();
	if (haveEffect($effect`Drenched in Lava`)) {
		cliExecute("hottub");
	}
}

function prelude() {
	horse("dark");
	if (availableAmount($item`astral six-pack`) !== 0) use(1, $item`astral six-pack`);
	if (have($effect`The Magical Mojomuscular Melody`))
		cliExecute("shrug The Magical Mojomuscular Melody");
	useSkill($skill`The Ode to Booze`);
	resources.consumeTo(3, $item`astral pilsner`);
}

/*
Buff Up
LOV Tunnel
ALL THE EXP (Bastille + Ten Percent Bonus)
Fight Portscan - with protopack on (TODO - Move to DMT to reduce freekill usage?)
Fight Ghost
God Lob
Snojo - get construct DNA

Rest - should be level 9 by this point

Melf
NEP
Witch
Queen
King


*/

export default function levelUp(): void {
	buffMainstat();
	castBuffs();
	lov();
	initialExp();
	hybridize();
	acquireFruit();
	sauceCraft(); //GetYoked and or DigitWinked would go in here
	witchGhostAgent();
	godLob();
	snojo();
	tentacle();

	restAndBuff();

	royalty();
	mElfLeveling();
	sauceCraft(); //done twice in case not enough meat for Dramatic Range when first run
	NEP();
	//sauceCraft(); //done thrice in case not enough meat for Dramatic Range when first run
	prelude();
}
