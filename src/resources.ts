import {
	chew,
	cliExecute,
	create,
	eat,
	Effect,
	effectModifier,
	haveEffect,
	Item,
	itemAmount,
	itemType,
	Location,
	Monster,
	myFullness,
	myInebriety,
	print,
	pullsRemaining,
	retrieveItem,
	runChoice,
	runCombat,
	Skill,
	toItem,
	toSkill,
	toUrl,
	use,
	useSkill,
	visitUrl,
} from "kolmafia";
import { $effect, $item, $skill, CombatLoversLocket, get, have, Macro } from "libram";
import { canCastLibrams, pullIfPossible } from "./asmohccs-lib";

export class ResourceTracker {
	deckCards: string[] = [];
	genieWishes: (Monster | Effect)[] = [];
	// Items represent clip art summons.
	tomeSummons: (Skill | Item)[] = [];
	libramSummons: Skill[] = [];
	saberForces: (Item | Effect)[] = [];
	maps: Monster[] = [];
	locketMonsters: Monster[] = [];
	pulls: Item[] = [];
	consumedFood = new Map<Item, number>();
	consumedBooze = new Map<Item, number>();

	deck(card: string, attempt = false): void {
		if (get("_deckCardsSeen").toLowerCase().includes(card)) return;
		if (get("_deckCardsDrawn") <= 10) {
			cliExecute(`cheat ${card}`);
			this.deckCards.push(card);
		} else if (!attempt) {
			print(`WARNING: Tried to pull ${card} from deck, but we're out of draws.`, "orange");
		}
	}

	wish(MonsterorEffect: Monster | Effect, attempt = false): void {
		if (MonsterorEffect instanceof Effect) {
			if (have(MonsterorEffect)) return;
			if (3 - get("_genieWishesUsed") + itemAmount($item`pocket wish`) > 0) {
				cliExecute(`genie effect ${MonsterorEffect}`);
				this.genieWishes.push(MonsterorEffect);
			} else if (!attempt) {
				print(
					`WARNING: Tried to wish for ${MonsterorEffect}, but we're out of wishes.`,
					"orange"
				);
			}
		} else if (MonsterorEffect instanceof Monster) {
			if (3 - get("_genieWishesUsed") + itemAmount($item`pocket wish`) > 0) {
				cliExecute(`genie monster ${MonsterorEffect}`);
				this.genieWishes.push(MonsterorEffect);
			} else if (!attempt) {
				print(
					`WARNING: Tried to wish to fight a(n) ${MonsterorEffect}, but we're out of wishes.`,
					"orange"
				);
			}
		} else if (!attempt) {
			print(
				`WARNING: Tried to wish for ${MonsterorEffect}, but thats neither a Monster or an Effect.`,
				"orange"
			);
		}
	}

	clipArt(item: Item, attempt = false): void {
		if (get("tomeSummons") < 3) {
			retrieveItem(item);
			this.tomeSummons.push(item);
		} else if (!attempt) {
			print(`WARNING: Tried to summon clip art, but we're out of tome summons.`, "orange");
		}
	}

	tome(skillOrItem: Skill | Item, attempt = false): void {
		if (get("tomeSummons") < 3) {
			if (skillOrItem instanceof Skill) useSkill(skillOrItem);
			else create(skillOrItem);
			this.tomeSummons.push(skillOrItem);
		} else if (!attempt) {
			print(`WARNING: Tried to use tome summon ${skillOrItem}, but we're out.`, "orange");
		}
	}

	libram(skill: Skill, attempt = false): void {
		if (canCastLibrams()) {
			useSkill(skill);
			this.libramSummons.push(skill);
		} else if (!attempt) {
			print(
				`WARNING: Tried to use libram summon ${skill}, but we don't have enough mana`,
				"orange"
			);
		}
	}

	mapMacro(location: Location, monster: Monster, macro: Macro): void {
		macro.setAutoAttack();
		useSkill($skill`Map the Monsters`);
		if (!get("mappingMonsters")) throw `I am not actually mapping anything. Weird!`;
		else {
			while (get("mappingMonsters") && !have($effect`Meteor Showered`)) {
				visitUrl(toUrl(location));
				runChoice(1, `heyscriptswhatsupwinkwink=${monster.id}`);
				runCombat(macro.toString());
			}
			this.maps.push(monster);
		}
	}

	locket(monster: Monster, attempt = false): void {
		if (CombatLoversLocket.monstersReminisced().includes(monster)) return;
		if (CombatLoversLocket.reminiscesLeft() > 0) {
			this.locketMonsters.push(monster);
			CombatLoversLocket.reminisce(monster);
		} else if (!attempt) {
			print(
				`WARNING: Tried to use CLL to fight ${monster}, but we have no reminisces left.`,
				"orange"
			);
		}
	}

	pull(item: Item, maxPrice: number, attempt = false): void {
		if (pullsRemaining() > 0 && pullIfPossible(1, item, maxPrice)) {
			this.pulls.push(item);
		} else if (!attempt) {
			print(`WARNING: Tried to pull ${item}, but we're out of pulls.`, "orange");
		}
	}

	ensurePullPotion(item: Item, maxPrice: number, attempt = false): void {
		const effect = effectModifier(item, "Effect");
		if (!have(item) && !have(effect)) {
			this.pull(item, maxPrice, attempt);
			this.pulls.push(item);
		}
		if (!have(effect)) {
			if (itemType(item) === "spleen item") chew(item);
			else use(item);
		}
	}

	consumeTo(threshold: number, item: Item): void {
		const typ = itemType(item);
		if (typ === "booze") {
			const count = Math.floor((threshold - myInebriety()) / item.inebriety);
			if (count > 0) {
				useSkill(
					Math.ceil((count * item.inebriety - haveEffect($effect`Ode to Booze`)) / 5),
					$skill`The Ode to Booze`
				);
				cliExecute(`drink ${count} ${item}`);
				this.consumedBooze.set(item, (this.consumedBooze.get(item) ?? 0) + count);
			}
		} else if (typ === "food") {
			const count = Math.floor((threshold - myFullness()) / item.fullness);
			if (count > 0) {
				eat(count, item);
				this.consumedFood.set(item, (this.consumedFood.get(item) ?? 0) + count);
			}
		}
	}

	summarize(): void {
		print("====== RESOURCE SUMMARY ======");
		print(`Deck: ${this.deckCards.join(", ")}`);
		print(
			`Wishes: ${this.genieWishes.map((MonsterorEffect) => MonsterorEffect.name).join(", ")}`
		);
		print(`Tomes: ${this.tomeSummons.map((skillOrItem) => skillOrItem.name).join(", ")}`);
		print(`Libram summons: ${this.libramSummons.map((skill) => skill.name).join(", ")}`);
		print(`Sabers: ${this.saberForces.map((effectOrItem) => effectOrItem.name).join(", ")}`);
		print(`Locket Fights: ${this.locketMonsters.map((monster) => monster.name).join(", ")}`);
		print(`Maps: ${this.maps.map((monster) => monster.name).join(", ")}`);
		print(`Pulls: ${this.pulls.map((item) => item.name).join(", ")}`);
		print("Consumed:");
		if (this.consumedFood.size > 0) {
			print("FOOD");
			for (const [food, count] of this.consumedFood) {
				print(`${count} ${count > 1 ? food.plural : food.name}`);
			}
		}
		if (this.consumedBooze.size > 0) {
			print("BOOZE");
			for (const [booze, count] of this.consumedBooze) {
				print(`${count} ${count > 1 ? booze.plural : booze.name}`);
			}
		}
	}

	serialize(): string {
		return JSON.stringify({
			deckCards: this.deckCards,
			genieWishes: this.genieWishes.map((effect) => effect.name),
			tomeSummons: this.tomeSummons.map((itemOrSkill) => itemOrSkill.name),
			locketMonsters: this.locketMonsters.map((monster) => monster.name),
			pulls: this.pulls.map((item) => item.name),
			consumedFood: [...this.consumedFood.entries()].map(([food, count]) => [
				food.name,
				count,
			]),
			consumedBooze: [...this.consumedBooze.entries()].map(([booze, count]) => [
				booze.name,
				count,
			]),
		});
	}

	static deserialize(data: string): ResourceTracker {
		const {
			deckCards,
			genieWishes,
			tomeSummons,
			locketMonsters,
			pulls,
			consumedFood,
			consumedBooze,
		} = JSON.parse(data);
		const result = new ResourceTracker();
		result.deckCards = deckCards ?? [];
		result.genieWishes = genieWishes ? genieWishes.map((name: string) => Effect.get(name)) : [];
		result.tomeSummons = tomeSummons
			? tomeSummons.map((name: string) => {
					const skill = toSkill(name);
					const item = toItem(name);
					return skill !== $skill`none` ? skill : item;
			  })
			: [];
		result.locketMonsters = locketMonsters
			? locketMonsters.map((name: string) => Monster.get(name))
			: [];
		result.pulls = pulls ? pulls.map((name: string) => Item.get(name)) : [];
		result.consumedFood = new Map(
			consumedFood
				? consumedFood.map(([name, count]: [string, number]) => [Item.get(name), count])
				: []
		);
		result.consumedBooze = new Map(
			consumedBooze
				? consumedBooze.map(([name, count]: [string, number]) => [Item.get(name), count])
				: []
		);
		return result;
	}
}
