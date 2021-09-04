import {
    autosell,
    availableAmount,
    buy,
    cliExecute,
    containsText,
    create,
    eudoraItem,
    haveEffect,
    itemAmount,
    myLevel,
    mySpleenUse,
    retrieveItem,
    runChoice,
    use,
    useFamiliar,
    useSkill,
    visitUrl,
} from "kolmafia";
import { $coinmaster, $effect, $familiar, $item, $items, $skill, get, have, SourceTerminal } from "libram";
import { ensureSong, ensureEffect, setClan, tryUse } from "./phredhccs-lib";

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
    autosell( itemAmount($item`porquoise`) -2, $item`porquoise`);
    if (!have($item`toy accordion`)) {
        buy(1, $item`toy accordion`);
    }
}

export function grimoires() {
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
    setClan(get("phccs_mainClan", "Alliance From Heck"));
}

function getTurns() {
    if (myLevel() === 1 && !mySpleenUse()) {
        while (get("_universeCalculated") < get("skillLevel144")) {
            cliExecute("numberology 69");
        }
    }
    if (!get("_borrowedTimeUsed")) {
        if (!have($item`borrowed time`)) {
            create(1, $item`borrowed time`);
        }
        use(1, $item`borrowed time`);
    }
}

function prepGear() {
    if (!have($item`dromedary drinking helmet`)) {
        useFamiliar($familiar`Melodramedary`);
        if (!have($item`box of Familiar Jacks`)) {
            create(1, $item`box of Familiar Jacks`);
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
        cliExecute("acquire codpiece");
    }*/

    // Get flimsy hardwood scraps.
    visitUrl("shop.php?whichshop=lathe");
    if (availableAmount($item`flimsy hardwood scraps`) > 0) {
        retrieveItem(1, $item`weeping willow wand`);
    }

    if (!have($item`pantogram pants`)) {
        cliExecute("pantogram mysticality|hot|drops of blood|some self-respect|your dreams|silent");
    }

    if (get("boomBoxSong") !== "Total Eclipse of Your Meat") {
        cliExecute("boombox meat");
    }

    cliExecute("briefcase enchantment weapon -combat");
}

function vote() {
    if (!get("_voteToday")) {
        visitUrl("place.php?whichplace=town_right&action=townright_vote");
        visitUrl("choice.php?option=1&whichchoice=1331&g=2&local%5B%5D=2&local%5B%5D=3");
    }
}

function deck() {
    if (!get("_deckCardsDrawn")) {
        cliExecute("cheat wrench; cheat rope");
        //autosell(1, $item`1952 Mickey Mantle card`);
        //useSkill(2, $skill`Ancestral Recall`);
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
    if( get("horseryAvailable") && get("_horsery")==="") {
        cliExecute("horsery crazy");
    }
}

export function runStart(): void {
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
