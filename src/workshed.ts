import {
	availableAmount,
	buy,
	cliExecute,
	create,
	print,
	use,
	getWorkshed,
	Phylum,
} from "kolmafia";
import { $item, get, have } from "libram";
import { getEffect, getTonic, makeTonic, tonicsLeft } from "libram/dist/resources/2014/DNALab";

export function fuelUp(): void {
	if (getWorkshed() === $item`Asdon Martin Keyfob`) {
		buy(1, $item`all-purpose flower`);
		use(1, $item`all-purpose flower`);
		buy(availableAmount($item`wad of dough`), $item`soda water`);
		create(availableAmount($item`wad of dough`), $item`loaf of soda bread`);
		cliExecute(`asdonmartin fuel ${availableAmount($item`loaf of soda bread`)} soda bread`);
	}
}

// Checks that you don't already have the tonic or effect and if your syringe has the right phylum and if so, makes the appropriate tonic.

export function geneTonic(ph: Phylum) {
	if (getWorkshed() !== $item`Little Geneticist DNA-Splicing Lab`) {
		return;
	}
	if (tonicsLeft() < 1) throw "You can't make any more tonics";
	if (!have(getEffect(ph)) && !have(getTonic(ph))) {
		if (get("dnaSyringe") !== ph) throw "You have the wrong DNA in your syringe";
		makeTonic();
		if (!have(getTonic(ph))) {
			throw "something went wrong getting your gene tonic";
		} else {
			print(`successfully created ${getTonic(ph).name}`);
		}
	} else {
		print(`You already have ${ph} DNA`);
	}
}
