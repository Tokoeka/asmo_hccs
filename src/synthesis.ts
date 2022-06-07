import {
    availableAmount,
    create,
    getInventory,
    haveEffect,
    sweetSynthesis,
    toString as toStringAsh,
    toInt,
    useSkill,
    visitUrl,
    Item,
} from "kolmafia";
import { $effect, $item, $items, $skill, get, have } from "libram";
import { gingerCandy, inMysClass, inMoxClass, inMusClass } from "./asmohccs-lib";

export function synthMysExp(): void {
    if (get("harvestGardenHardcore") === "none") {
        visitUrl("campground.php?action=garden");
    }
    if (!get("_candySummons")) {
        useSkill(1, $skill`Summon Crimbo Candy`);
    }
    const fudge = $item`Crimbo fudge`;
    const pecan = $item`Crimbo candied pecan`;
    const bark = $item`Crimbo peppermint bark`;
    const fudges = availableAmount(fudge);
    const pecans = availableAmount(pecan);
    const barks = availableAmount(bark);
    if (fudges >= 2) {
        sweetSynthesis(fudge, fudge);
    } else if (barks >= 1) {
        if (pecans >= 1) {
            sweetSynthesis(pecan, bark);
        } else {
            sweetSynthesis(bark, $item`peppermint sprout`);
        }
    } else {
        gingerCandy(); //Section below stolen from Bean (with edits)
        const inventory = getInventory();
        for (const itemName of Object.keys(inventory)) {
            const item = Item.get(itemName);
            const count = inventory[itemName];
            const mod = toInt(Item.get(itemName)) % 5;

            if (item.candyType !== "complex" || item === $item`Ultra Mega Sour Ball`) {
                continue;
            }
            if (mod === 4 && item !== fudge) {
                if (fudges >= 1) {
                    sweetSynthesis(fudge, item);
                    break;
                }
            } else if (mod === 3) {
                if (pecans >= 1) {
                    sweetSynthesis(pecan, item);
                    break;
                }
            } else if (mod === 0) {
                if (barks >= 1) {
                    sweetSynthesis(bark, item);
                    break;
                }
            }
        }
        for (const itemName0 of Object.keys(inventory)) {
            const item0 = Item.get(itemName0);
            const count = inventory[itemName0];
            const mod0 = toInt(Item.get(itemName0)) % 5;
            if (
                item0.candyType !== "complex" ||
                $items`Ultra Mega Sour Ball, Crimbo fudge, crimbo candied pecan, Crimbo peppermint bark, peppermint sprout, pepperint twist`.includes(
                    item0
                )
            ) {
                continue;
            }
            for (const itemName1 of Object.keys(inventory)) {
                const item1 = Item.get(itemName1);
                const mod1 = toInt(Item.get(itemName1)) % 5;
                if (
                    item1.candyType !== "complex" ||
                    $items`Ultra Mega Sour Ball, Crimbo fudge, crimbo candied pecan, Crimbo peppermint bark, peppermint sprout, pepperint twist`.includes(
                        item1
                    ) ||
                    (item1 === item0 && count <= 1)
                ) {
                    continue;
                }
                if ((mod0 + mod1) % 5 === 3) {
                    sweetSynthesis(item0, item1);
                    break;
                }
            }
            if (haveEffect($effect`Synthesis: Learning`)) {
                break;
            }
        }
        if (!have($effect`Synthesis: Learning`)) {
            if (!have($item`sugar shotgun`)) {
                if (!have($item`sugar sheet`)) {
                    create(1, $item`sugar sheet`);
                }
                create(1, $item`sugar shotgun`);
            }
            if (pecans >= 1) {
                sweetSynthesis(pecan, $item`sugar shotgun`);
            } else {
                sweetSynthesis($item`sugar shotgun`, $item`peppermint sprout`);
            }
        }
    }
    if (!have($effect`Synthesis: Learning`)) {
        throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize learning. Pwease fix me :c.";
    }
}

export function synthMusExp(): void {
    if (get("harvestGardenHardcore") === "none") {
        visitUrl("campground.php?action=garden");
    }
    if (!get("_candySummons")) {
        useSkill(1, $skill`Summon Crimbo Candy`);
    }
    const fudge = $item`Crimbo fudge`;
    const pecan = $item`Crimbo candied pecan`;
    const bark = $item`Crimbo peppermint bark`;
    const fudges = availableAmount(fudge);
    const pecans = availableAmount(pecan);
    const barks = availableAmount(bark);
    const twist = $item`peppermint twist`;
    const twists = availableAmount(twist);
    const sprout = $item`peppermint sprout`;
    const sprouts = availableAmount(sprout);
    if (fudges >= 1 && barks >= 1) {
        sweetSynthesis(bark, fudge);
    } else if (fudges < 3) {
        if (twists < 2) {
            create(2 - twists, twist);
        }
        sweetSynthesis(twist, twist);
    } else {
        gingerCandy(); //Section below stolen from Bean (with edits)
        const inventory = getInventory();
        for (const itemName of Object.keys(inventory)) {
            const item = Item.get(itemName);
            const count = inventory[itemName];
            const mod = toInt(Item.get(itemName)) % 5;

            if (item.candyType !== "complex" || item === $item`Ultra Mega Sour Ball`) {
                continue;
            }
            if (mod === 3) {
                if (fudges >= 1) {
                    sweetSynthesis(fudge, item);
                    break;
                }
            } else if (mod === 4) {
                if (barks >= 1) {
                    sweetSynthesis(bark, item);
                    break;
                }
            } else if (mod === 2) {
                if (pecans >= 1) {
                    sweetSynthesis(pecan, item);
                    break;
                } else if (sprouts >= 1) {
                    sweetSynthesis(sprout, item);
                    break;
                }
            } else if (mod === 1 && item !== twist) {
                if (twists >= 1 || sprouts >= 1) {
                    if (twists < 1 && sprouts >= 1) {
                        create(1, twist);
                    }
                    sweetSynthesis(twist, item);
                    break;
                }
            }
        }
        if (!have($effect`Synthesis: Movement`)) {
            if (fudges >= 1) {
                if (!have($item`sugar shotgun`)) {
                    if (!have($item`sugar sheet`)) create(1, $item`sugar sheet`);
                    create(1, $item`sugar shotgun`);
                }
                sweetSynthesis(fudge, $item`sugar shotgun`);
            }
            if (!have($item`sugar shorts`)) {
                if (!have($item`sugar sheet`)) create(1, $item`sugar sheet`);
                create(1, $item`sugar shorts`);
            }
            if (pecans >= 1) {
                sweetSynthesis(pecan, $item`sugar shorts`);
            } else {
                sweetSynthesis($item`sugar shorts`, sprout);
            }
        }
    }
    if (!have($effect`Synthesis: Movement`)) {
        throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize movement. Help? :c.";
    }
}

export function synthMoxExp(): void {
    if (get("harvestGardenHardcore") === "none") {
        visitUrl("campground.php?action=garden");
    }
    if (!get("_candySummons")) {
        useSkill(1, $skill`Summon Crimbo Candy`);
    }
    const fudge = $item`Crimbo fudge`;
    const pecan = $item`Crimbo candied pecan`;
    const bark = $item`Crimbo peppermint bark`;
    const fudges = availableAmount(fudge);
    const pecans = availableAmount(pecan);
    const barks = availableAmount(bark);
    const twist = $item`peppermint twist`;
    const twists = availableAmount(twist);
    const sprout = $item`peppermint sprout`;
    const sprouts = availableAmount(sprout);
    //const sprouts = availableAmount(sprout);
    if (fudges >= 1) {
        sweetSynthesis(fudge, sprout);
    } else if (barks >= 1 && twists + sprouts >= 1) {
        if (twists < 1 && sprouts >= 1) {
            create(1, twist);
        }
        sweetSynthesis(twist, bark);
    } else if (have($item`bag of many confections`) && pecans >= 1) {
        sweetSynthesis(pecan, $item`bag of many confections`);
    } else {
        gingerCandy(); //Section below stolen from Bean (with edits)
        const inventory = getInventory();
        for (const itemName of Object.keys(inventory)) {
            const item = Item.get(itemName);
            const count = inventory[itemName];
            const mod = toInt(Item.get(itemName)) % 5;

            if (item.candyType !== "complex" || item === $item`Ultra Mega Sour Ball`) {
                continue;
            }
            if (mod === 0) {
                if (fudges >= 1) {
                    sweetSynthesis(fudge, item);
                    break;
                }
            } else if (mod === 4) {
                if (pecans >= 1) {
                    sweetSynthesis(pecan, item);
                    break;
                }
            } else if (mod === 1) {
                if (barks >= 1) {
                    sweetSynthesis(bark, item);
                    break;
                }
            }
        }
        if (!have($effect`Synthesis: Style`)) {
            if (!have($item`sugar shillelagh`)) {
                if (!have($item`sugar sheet`)) create(1, $item`sugar sheet`);
                create(1, $item`sugar shillelagh`);
            }
            if (pecans >= 1) {
                sweetSynthesis(pecan, $item`sugar shillelagh`);
            } else {
                sweetSynthesis($item`sugar shillelagh`, $item`peppermint sprout`);
            }
        }
    }
    if (!have($effect`Synthesis: Style`)) {
        throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize style.  ¯_(ツ)_/¯";
    }
}

export function synthItem(): void {
    if (get("harvestGardenHardcore") === "none") {
        visitUrl("campground.php?action=garden");
    }
    if (!get("_candySummons")) {
        useSkill(1, $skill`Summon Crimbo Candy`);
    }
    const fudge = $item`Crimbo fudge`;
    const pecan = $item`Crimbo candied pecan`;
    const bark = $item`Crimbo peppermint bark`;
    const fudges = availableAmount(fudge);
    const pecans = availableAmount(pecan);
    const barks = availableAmount(bark);

    if (inMysClass()) {
        if (barks > 2) {
            sweetSynthesis(bark, bark);
        } else {
            if (!have($item`peppermint twist`)) {
                create(1, $item`peppermint twist`);
            }
            if (pecans >= 1) {
                sweetSynthesis(pecan, $item`peppermint twist`);
            } else {
                sweetSynthesis($item`peppermint sprout`, $item`peppermint twist`);
            }
        }
    } else if (inMusClass()) {
        if (barks >= 2 && fudges == 0) {
            sweetSynthesis(bark, bark);
        } else {
            if (!have($item`peppermint twist`)) {
                create(1, $item`peppermint twist`);
            }
            if (pecans >= 1) {
                sweetSynthesis(pecan, $item`peppermint twist`);
            } else {
                sweetSynthesis($item`peppermint sprout`, $item`peppermint twist`);
            }
        }
    } else if (inMoxClass()) {
        if (barks >= 2 && pecans == 0) {
            sweetSynthesis(bark, bark);
        } else {
            if (!have($item`peppermint twist`)) {
                create(1, $item`peppermint twist`);
            }
            if (pecans >= 1) {
                sweetSynthesis(pecan, $item`peppermint twist`);
            } else {
                sweetSynthesis($item`peppermint sprout`, $item`peppermint twist`);
            }
        }
    }

    if (!have($effect`Synthesis: Collection`)) {
        throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize collection. Pwease fix me :c.";
    }
}

export function synthMyst(): void {
    if (get("harvestGardenHardcore") === "none") {
        visitUrl("campground.php?action=garden");
    }
    if (!get("_candySummons")) {
        useSkill(1, $skill`Summon Crimbo Candy`);
    }
    //const fudge = $item`Crimbo fudge`;
    //const pecan = $item`Crimbo candied pecan`;
    //const bark = $item`Crimbo peppermint bark`;
    //const fudges = availableAmount(fudge);
    //const pecans = availableAmount(pecan);
    //const barks = availableAmount(bark);
    if (have($item`bag of many confections`)) {
        if (!get("_chubbyAndPlumpUsed")) {
            useSkill(1, $skill`Chubby and Plump`);
        }
        sweetSynthesis($item`Chubby and Plump bar`, $item`bag of many confections`);
    } else {
        const mint = $item`Senior Mints`;
        const mints = availableAmount(mint);
        const orangeHeart = $item`orange candy heart`;
        const orangeHearts = () => availableAmount(orangeHeart);
        const pinkHeart = $item`pink candy heart`;
        const pinkHearts = () => availableAmount($item`pink candy heart`);
        let n = 0;
        while (mints + orangeHearts() + pinkHearts() === 0 && n < 11) {
            useSkill(1, $skill`Summon Candy Heart`);
            n++;
        }
        if (mints + orangeHearts() + pinkHearts() === 0) {
            throw "Failed to summon hearts in a timely manner";
        }
        if (mints >= 1) {
            sweetSynthesis(mint, $item`peppermint sprout`);
        } else if (orangeHearts() >= 1) {
            sweetSynthesis(orangeHeart, $item`peppermint sprout`);
        } else if (pinkHearts() >= 1) {
            if (!have($item`peppermint twist`)) {
                create(1, $item`peppermint twist`);
            }
            sweetSynthesis(pinkHeart, $item`peppermint twist`);
        }
    }
    if (haveEffect($effect`Synthesis: Smart`) === 0) {
        throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize smart. Pwease fix me :c.";
    }
}

export function synthMus(): void {
    if (get("harvestGardenHardcore") === "none") {
        visitUrl("campground.php?action=garden");
    }
    if (!get("_candySummons")) {
        useSkill(1, $skill`Summon Crimbo Candy`);
    }
    //const fudge = $item`Crimbo fudge`;
    //const pecan = $item`Crimbo candied pecan`;
    const bark = $item`Crimbo peppermint bark`;
    //const fudges = availableAmount(fudge);
    //const pecans = availableAmount(pecan);
    const barks = availableAmount(bark);
    if (!get("_chubbyAndPlumpUsed")) {
        useSkill(1, $skill`Chubby and Plump`);
    }
    if (have($item`Chubby and Plump bar`) && barks >= 2) {
        sweetSynthesis($item`Chubby and Plump bar`, bark);
    } else if (have($item`bag of many confections`)) {
        const mint = $item`Senior Mints`;
        const mints = availableAmount(mint);
        const orangeHeart = $item`orange candy heart`;
        const orangeHearts = () => availableAmount(orangeHeart);
        const pinkHeart = $item`pink candy heart`;
        const pinkHearts = () => availableAmount($item`pink candy heart`);
        let n = 0;
        while (mints + orangeHearts() === 0 && n < 11) {
            useSkill(1, $skill`Summon Candy Heart`);
            n++;
        }
        if (mints + orangeHearts() + pinkHearts() === 0) {
            throw "Failed to summon hearts in a timely manner";
        }
        if (mints >= 1) {
            sweetSynthesis(mint, $item`bag of many confections`);
        } else if (orangeHearts() >= 1) {
            sweetSynthesis(orangeHeart, $item`bag of many confections`);
        } else if (pinkHearts() >= 1) {
            sweetSynthesis(pinkHeart, $item`peppermint sprout`);
        }
    }
    if (haveEffect($effect`Synthesis: Strong`) === 0) {
        throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize strong. You're on your own pal.";
    }
}

export function synthMox(): void {
    if (get("harvestGardenHardcore") === "none") {
        visitUrl("campground.php?action=garden");
    }
    if (!get("_candySummons")) {
        useSkill(1, $skill`Summon Crimbo Candy`);
    }
    const fudge = $item`Crimbo fudge`;
    const pecan = $item`Crimbo candied pecan`;
    const bark = $item`Crimbo peppermint bark`;
    const fudges = availableAmount(fudge);
    const pecans = availableAmount(pecan);
    const barks = availableAmount(bark);
    if (!get("_chubbyAndPlumpUsed")) {
        useSkill(1, $skill`Chubby and Plump`);
    }
    if (pecans >= 1) {
        sweetSynthesis($item`Chubby and Plump bar`, pecan);
    } else if (fudges > 1 && have($item`bag of many confections`)) {
        const taffy = $item`Daffy Taffy`;
        const taffys = availableAmount(taffy);
        const candy = $item`Cold Hots candy`;
        const candys = availableAmount(candy);
        const yellowHeart = $item`yellow candy heart`;
        const yellowHearts = () => availableAmount(yellowHeart);
        let n = 0;
        while (taffys + yellowHearts() + candys === 0 && n < 11) {
            useSkill(1, $skill`Summon Candy Heart`);
            n++;
        }
        if (taffys + yellowHearts() + candys === 0) {
            throw "Failed to summon hearts in a timely manner";
        }
        if (taffys >= 1) {
            sweetSynthesis(taffy, $item`bag of many confections`);
        } else if (yellowHearts() >= 1) {
            sweetSynthesis(yellowHeart, $item`bag of many confections`);
        } else if (candys >= 1) {
            sweetSynthesis(candy, $item`bag of many confections`);
        } else {
            sweetSynthesis($item`peppermint sprout`, $item`Chubby and Plump bar`);
        }
    } else if (barks >= 1) {
        sweetSynthesis($item`peppermint sprout`, $item`Chubby and Plump bar`);
    }
    if (haveEffect($effect`Synthesis: Cool`) === 0) {
        throw "I'm very embarrassed, and I'm sorry to admit it, but I failed to synthesize cool. Good Luck Buster.";
    }
}
