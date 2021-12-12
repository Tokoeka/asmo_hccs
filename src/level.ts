import {
    adv1,
    availableAmount,
    buy,
    cliExecute,
    containsText,
    create,
    drink,
    eat,
    equip,
    getCounters,
    haveEffect,
    haveEquipped,
    haveSkill,
    knollAvailable,
    maximize,
    mpCost,
	myClass,
    myGardenType,
    myInebriety,
    myLevel,
    myMp,
    numericModifier,
    print,
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
} from "libram";
import { candyblast, defaultKill, delevel, easyFight } from "./asmohccs-macros";
import {
    advMacro,
    advMacroAA,
    burnLibrams,
    ensureEffect,
    ensureInnerElf,
    ensureMp,
    geneTonic,
    heal,
    horse,
	inMoxClass,
	inMusClass,
	inMysClass,
    mapMacro,
    multiFightAutoAttack,
    questStep,
    setChoice,
	synthMoxExp,
	synthMusExp,
    synthMysExp,
	synthMox,
	synthMus,
    synthMyst,
	tryUse,
    useDefaultFamiliar,
} from "./asmohccs-lib";
import { universalWeightBuffs, universalWeightEffects } from "./familiarweight";
import uniform from "./outfits";

function initialExp() {
	if (!have($effect`That's Just Cloud-Talk, Man`)) {
        visitUrl("place.php?whichplace=campaway&action=campaway_sky");
    }

    

    if (myGardenType() === "peppermint") {
        cliExecute("garden pick");
      } else {
        print(
          "WARNING: This script is built for peppermint garden. Switch gardens or find other candy."
        );
      }
	
	if(inMysClass()){
		ensureEffect($effect`Inscrutable Gaze`);
    	ensureEffect($effect`Thaumodynamic`);
		if (!have($effect`Synthesis: Learning`)) synthMysExp();
		equip($item`LOV Epaulettes`, $slot`back`)
	}
	else if (inMusClass()){
    	ensureEffect($effect`Muscle Unbound`);
		if (!have($effect`Synthesis: Movement`)) synthMusExp();
		equip($item`LOV Eardigan`, $slot`shirt`)
	}
	else if (inMoxClass()){
    	ensureEffect($effect`So Fresh and So Clean`);
		if (!have($effect`Synthesis: Style`)) synthMoxExp();
		equip($item`LOV Earrings`, $slot`acc1`)
	}
	

    equip($item`familiar scrapbook`, $slot`off-hand`);
    

    if (have($item`white candy heart`)) {
       	ensureEffect($effect`Heart of White`);
    }

    if (availableAmount($item`a ten-percent bonus`)) {
        use(1, $item`a ten-percent bonus`);
    }

	if(inMysClass()){
		cliExecute("bastille myst brutalist");
	}
	else if (inMusClass()){
		cliExecute("bastille muscle brutalist");
	}
	else if (inMoxClass()){
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
	
	if(inMysClass()){
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
	}
	else if (inMusClass()){
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
	}
	else if (inMoxClass()){
		BeachComb.tryHead($effect`Pomp & Circumsands`);
		ensureEffect($effect`Ten out of Ten`);
		ensureEffect($effect`Quiet Desperation`);

		if (!have($effect`Unrunnable Face`)) {
			tryUse(1, $item`runproof mascara`);
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
	}


    if (!get("_lyleFavored")) ensureEffect($effect`Favored by Lyle`);
    if (!get("telescopeLookedHigh")) ensureEffect($effect`Starry-Eyed`);

    ensureEffect($effect`Broad-Spectrum Vaccine`);

    if (!get("_streamsCrossed")) {
        cliExecute("crossstreams");
    }

    equip($slot`acc3`, $item`Powerful Glove`);
    ensureEffect($effect`Triple-Sized`);
    ensureEffect($effect`Feeling Excited`);
    if (!get("_favoriteBirdVisited")) useSkill($skill`Visit your Favorite Bird`);

    if (have($item`votive of confidence`)) use($item`votive of confidence`);

    if (!get("_freePillKeeperUsed")) {
        cliExecute("pillkeeper familiar");
    }
}

function castBuffs() {
    useFamiliar($familiar`Left-Hand Man`);
    maximize("mp", false);

    if (get("_sausagesEaten") === 0) {
        cliExecute("eat 1 magic sausage");
        useSkill(1, $skill`Advanced Saucecrafting`);
        useSkill(1, $skill`Advanced Cocktailcrafting`);
        useSkill(1, $skill`Acquire Rhinestones`);
        useSkill(1, $skill`Prevent Scurvy and Sobriety`);
    }

	if (have($item`Napalm In The Morning™ candle`)) use($item`Napalm In The Morning™ candle`);

    if (!have($item`turtle totem`)) cliExecute("acquire turtle totem");
    if (!have($item`saucepan`)) cliExecute("acquire saucepan");

    $skills`The Magical Mojomuscular Melody, 
    Stevedave's Shanty of Superiority, Fat Leon's Phat Loot Lyric, 
     Polka of Plenty, Leash of Linguini, Empathy of the Newt, 
     Blood Bond, Blood Bubble, Song of Bravado, Get Big`.forEach(
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

	universalWeightEffects();
}

function getYoked() {
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
    uniform();
    equip($slot`back`, $item`protonic accelerator pack`);
    cliExecute("fold makeshift garbage shirt");
    equip($slot`shirt`, $item`makeshift garbage shirt`);
    heal();
    useDefaultFamiliar();
    ensureMp(100);
    Macro.skill("curse of weaksauce").skill("micrometeor").attack().repeat().setAutoAttack();
    if (!have($item`battle broom`)) {
        Witchess.fightPiece($monster`Witchess Witch`);
    }
    equip($slot`acc3`, $item`battle broom`);

    const ghostLocation = get("ghostLocation");
    if (ghostLocation) {
        //moved acquiring portscan into the if to stop it doubling up on portscan if need to rerun the script.
        SourceTerminal.educate($skill`Portscan`);
        equip($slot`off-hand`, $item`familiar scrapbook`);

		if ($classes`sauceror, pastamancer`.includes(myClass())){
			equip($slot`hat`, $item`Daylight Shavings Helmet`);
		}

        useDefaultFamiliar();
        advMacro(
            ghostLocation,
            Macro.step(delevel)
                .step(easyFight)
                .skill("portscan")
                .skill("shoot ghost")
                .skill("shoot ghost")
                .skill("shoot ghost")
                .skill("trap ghost")
        );
    }
    if (!have($item`government`) && !have($item`government cheese`)) {
        equip($slot`back`, $item`vampyric cloake`);
        useDefaultFamiliar();
        equip($slot`acc2`, $item`gold detective badge`);
        equip($slot`acc3`, $item`Lil' Doctor™ bag`);
        equip($slot`off-hand`, $item`familiar scrapbook`);
        advMacroAA(
            $location`Noob Cave`,
            Macro.step(delevel).skill("otoscope").skill("become a bat").skill("chest x-ray"),
            () => {
                return getCounters("Portscan", 0, 0) !== "";
            }
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

function lov() {
    uniform();
    equip($slot`back`, $item`vampyric cloake`);
    cliExecute("fold makeshift garbage shirt");
    equip($slot`shirt`, $item`makeshift garbage shirt`);
    heal();
    useDefaultFamiliar();
    Macro.if_("monstername LOV enforcer", Macro.attack().repeat())
        .if_(
            "monstername LOV Engineer",
            Macro.step(candyblast).skill("saucegeyser").repeat()
        )
        .if_(
            "monstername LOV equivocator",
            Macro.step(delevel).step(easyFight).trySkill($skill`Become a Wolf`).step(candyblast).attack().repeat()
        )
        .setAutoAttack();
    if (!get("_loveTunnelUsed") && inMysClass()) {
        TunnelOfLove.fightAll(
            "LOV Epaulettes",
            "Open Heart Surgery",
            "LOV Extraterrestrial Chocolate"
        );
        use(1, $item`LOV Extraterrestrial Chocolate`);
        burnLibrams();
    } else if (!get("_loveTunnelUsed") && inMusClass()) {
        TunnelOfLove.fightAll(
            "LOV Eardigan",
            "Open Heart Surgery",
            "LOV Extraterrestrial Chocolate"
        );
        use(1, $item`LOV Extraterrestrial Chocolate`);
        burnLibrams();
    } else if (!get("_loveTunnelUsed") && inMoxClass()) {
        TunnelOfLove.fightAll(
            "LOV Earring",
            "Open Heart Surgery",
            "LOV Extraterrestrial Chocolate"
        );
        use(1, $item`LOV Extraterrestrial Chocolate`);
        burnLibrams();
    }
    
}

function sauceCraft() {
    cliExecute("backupcamera ml");

	//TODO - map/wish for Lemon for Muscle Classes ???
	//TODO - Wish to fight Evil Olive for olive for Moxie Classes - needs to be done to get a Jumbo Olive anyway

	if(inMysClass()){
		
	}
	else if (inMusClass()){
		
	}
	else if (inMoxClass()){
		

	}

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
    }
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
	if(inMysClass()){
		if (!have($effect`Mystically Oiled`)) {
			if (!have($item`ointment of the occult`)) {
				create(1, $item`ointment of the occult`);
			}
			if (have($item`ointment of the occult`)) {
				use(1, $item`ointment of the occult`);
			}
		}
	}
	else if (inMusClass()){
		if (!have($effect`Phorcefullness`)) {
			if (!have($item`philter of phorce`)) {
				create(1, $item`philter of phorce`);
			}
			if (have($item`philter of phorce`)) {
				use(1, $item`philter of phorce`);
			}
		}
	}
	else if (inMoxClass()){
		if (!have($effect`Superhuman Sarcasm`)) {
			if (!have($item`serum of sarcasm`)) {
				create(1, $item`serum of sarcasm`);
			}
			if (have($item`serum of sarcasm`)) {
				use(1, $item`serum of sarcasm`);
			}
		}
	}
    
}

function godLob() {
    if (get("_godLobsterFights") === 0) {
        Macro.step(delevel).step(easyFight).attack().repeat().setAutoAttack();
        uniform();
        equip($slot`shirt`, $item`makeshift garbage shirt`);
        heal();
        useFamiliar($familiar`God Lobster`);
        setChoice(1310, 1);
        visitUrl("main.php?fightgodlobster=1");
        runCombat(Macro.step(delevel).step(easyFight).attack().repeat().toString());
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

function snojo() {
    uniform();
    useDefaultFamiliar();
    if (get("snojoSetting") === "NONE") {
        visitUrl("place.php?whichplace=snojo&action=snojo_controller");
		if (inMysClass()){
			runChoice(2);
		} else if (inMusClass()){
			runChoice(1);
		} else if (inMoxClass()){
			runChoice(3);
		}
        
    }
    advMacroAA(
        $location`The X-32-F Combat Training Snowman`,
        Macro.item($item`DNA extraction syringe`).step(delevel).step(easyFight).attack().repeat(),
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
    advMacroAA(
        $location`The X-32-F Combat Training Snowman`,
        Macro.step(delevel).step(easyFight).attack().repeat(),
        () => {
            return get("_snojoFreeFights") < 10;
        },
        () => {
            heal();
            useDefaultFamiliar();
        }
    );
    cliExecute("hottub");
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

    uniform();
    equip($slot`shirt`, $item`makeshift garbage shirt`);
    equip($slot`off-hand`, $item`Kramco Sausage-o-Matic™`);
    useDefaultFamiliar();
    advMacroAA(
        $location`The Neverending Party`,
        Macro.step(delevel).trySkill("feel pride").trySkill($skill`%fn, spit on me!`).step(easyFight).attack().repeat(),
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
        }
    );
    advMacroAA(
        $location`The Neverending Party`,
        Macro.if_(
            "!monstername sausage goblin",
            Macro.trySkill("shattering punch")
                .trySkill("gingerbread mob hit")
                .trySkill("chest x-ray")
        ).if_("monstername sausage goblin", Macro.step(delevel).step(candyblast).attack().repeat()),
        () => {
            return (get("_shatteringPunchUsed") < 3 && !get("_gingerbreadMobHitUsed") && myLevel() < 15);
        },
        () => {
            heal();
            useDefaultFamiliar();
            if (get("_sausageFights") > 3 && haveEquipped($item`Kramco Sausage-o-Matic™`)) {
                equip($slot`off-hand`, $item`familiar scrapbook`);
            }
            if (get("choiceAdventure1324") !== 5 && questStep("_questPartyFair") > 0) {
                setChoice(1324, 5);
            }
            if (myLevel() >= 13 && !have($effect`Inner Elf`)) {
                ensureInnerElf();
            }
        }
    );
    equip($slot`acc3`, $item`Lil' Doctor™ bag`);
    advMacroAA(
        $location`The Neverending Party`,
        Macro.if_(
            "!monstername sausage goblin",
            Macro.trySkill("shattering punch")
                .trySkill("gingerbread mob hit")
                .trySkill("chest x-ray")
        ).if_("monstername sausage goblin", Macro.step(delevel).step(candyblast).attack().repeat()),
        () => {
            return (get("_chestXRayUsed") < 3 && myLevel() < 15);
        },
        () => {
            heal();
            useDefaultFamiliar();
            if (get("_sausageFights") > 3 && haveEquipped($item`Kramco Sausage-o-Matic™`)) {
                equip($slot`off-hand`, $item`familiar scrapbook`);
            }
            if (get("choiceAdventure1324") !== 5 && questStep("_questPartyFair") > 0) {
                setChoice(1324, 5);
            }
            if (myLevel() >= 13 && !have($effect`Inner Elf`)) {
                ensureInnerElf();
            }
        }
    );
}

function mElfLeveling() {
    uniform();
    cliExecute("fold garbage shirt");
    equip($slot`shirt`, $item`makeshift garbage shirt`);
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
        Macro.tryItem("jam band flyer")
            .tryItem("gas can")
            .tryItem("time-spinner")
            .attack()
            .repeat()
            .setAutoAttack();
        uniform();
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
	ChateauMantegna.changeNightstand($item`foreign language tapes`);
    while (get("timesRested") < totalFreeRests()) {
        burnLibrams();
        visitUrl("place.php?whichplace=chateau&action=chateau_restbox");
    }
}

function digitwinked() { 
    uniform();
    useDefaultFamiliar();
    if( !get("latteUnlocks").includes("chili")){
        equip($slot`off-hand`, $item`latte lovers member's mug`)
    }
    
    advMacroAA(
        $location`the haunted kitchen`,
        Macro.step(delevel).step(easyFight).step(candyblast).attack().repeat(), 
        () => {
            return getCounters("Digitize", 0, 0).trim() !== "";
        }
    );


    uniform();
    if( get("latteUnlocks").includes("chili")){
        equip($slot`off-hand`, $item`familiar scrapbook`);
    }
    
    advMacroAA(
        $location`the haunted kitchen`,
        Macro.step(delevel).step(easyFight).step(candyblast).attack().repeat(), 
        () => {
            return getCounters("Romantic Monster window end", 0, 0).trim() !== "";
        }
    );

    
}

function hybridize() {
    // become a human fish hybrid
    if (!DNALab.isHybridized($phylum`fish`) && get("dnaSyringe") !== $phylum`fish`) {
        useFamiliar($familiar`ms puck man`);
        advMacroAA(
            $location`The Bubblin' Caldera`,
            Macro.while_("!monstername lava lamprey",
					Macro.trySkill($skill`Extract`).trySkill($skill`Macrometeorite`))
				.if_("monstername lava lamprey",
                	Macro.trySkill($skill`Extract`).item($item`DNA extraction syringe`).skill($skill`Feel Hatred`)
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
    if (haveEffect($effect`Drenched in Lava`)){
		cliExecute("hottub");
	}	
}

function prelude() {
    horse("dark");
    if (availableAmount($item`astral six-pack`) !== 0) use(1, $item`astral six-pack`);
    if (have($effect`The Magical Mojomuscular Melody`))
        cliExecute("shrug The Magical Mojomuscular Melody");
    useSkill($skill`The Ode to Booze`);
    while (myInebriety() < 5) {
        drink(1, $item`astral pilsner`);
    }
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
    sauceCraft();
    //getYoked();
    //digitwinked();
    witchGhostAgent();
    godLob();
    snojo();

    restAndBuff();

    royalty();
    mElfLeveling();
    sauceCraft(); //done twice in case not enough meat for Dramatic Range when first run
    NEP();
    prelude();
    

}
