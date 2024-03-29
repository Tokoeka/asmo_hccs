import { use, useFamiliar } from "kolmafia";
import {
	$class,
	$classes,
	$familiar,
	$item,
	$path,
	ascend,
	have,
	Lifestyle,
	prepareAscension,
} from "libram";

/* const timespinnerTargets = [
	"Busta_Rhymes",
	"Manendra",
	"Gausie",
	"Beldur",
	"worthawholebean",
	"ReverKiller",
	"phreddrickv2",
	"The Dictator",
];
 */
/*while ($skill`Experience Safari`.timescast < get("skillLevel180") && safariTargets.length) {
    useSkill($skill`Experience Safari`, 1, safariTargets[0]);
    safariTargets.shift();
}*/

export function main(args = ""): void {
	const newClass = args.includes(`sc`)
		? $class`Seal Clubber`
		: args.includes(`tt`)
		? $class`Turtle Tamer`
		: args.includes(`sr`)
		? $class`Sauceror`
		: args.includes(`db`)
		? $class`Disco Bandit`
		: args.includes(`at`)
		? $class`Accordion Thief`
		: $class`Pastamancer`;

	const shed = args.includes(`asdon`)
		? $item`Asdon Martin keyfob`
		: args.includes(`pizza`)
		? $item`diabolic pizza cube`
		: args.includes(`train`)
		? $item`model train set`
		: $item`Little Geneticist DNA-Splicing Lab`;

	prepareAscension({
		garden: `Peppermint Pip Packet`,
		eudora: `Our Daily Candles™ order form`,
		chateau: {
			desk: `continental juice bar`,
			nightstand: $classes`Seal Clubber, Turtle Tamer`.includes(newClass)
				? `electric muscle stimulator`
				: $classes`Disco Bandit, Accordion Thief`.includes(newClass)
				? `bowl of potpourri`
				: `foreign language tapes`,
			ceiling: `ceiling fan`,
		},
	});

	const pet = have($familiar`Baby Bugged Bugbear`)
		? $item`astral chapeau`
		: $item`astral pet sweater`;

	const lifestyle = args.includes("softcore") ? Lifestyle.softcore : Lifestyle.hardcore;
	if (!have($item`homemade robot gear`) && have($familiar`Homemade Robot`)) {
		useFamiliar($familiar`Homemade Robot`);
		use($item`box of Familiar Jacks`);
	}

	ascend($path`Community Service`, newClass, lifestyle, "knoll", $item`astral six-pack`, pet);

	use(shed);
}
