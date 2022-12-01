import { $item, $skill, $skills, get, have } from "libram";
import { resources } from ".";
import { canCastLibrams } from "./asmohccs-lib";

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
			resources.libram($skill`Summon Candy Heart`);
		} else if (
			!testsDone.includes("Breed More Collies") &&
			!have($item`love song of icy revenge`, 4) &&
			have($skill`Summon Love Song`)
		) {
			resources.libram($skill`Summon Love Song`);
		} /*else if (have($skill`Summon BRICKOs`) && get("_brickoEyeSummons") < 3) {
            resources.libram($skill`Summon BRICKOs`);
        } else if (
                have($skill`Summon Taffy`) &&
                (!testsDone.includes("Breed More Collies") && !have($item`Pulled Blue Taffy`, 5))
        ) {
            resources.libram($skill`Summon Taffy`);
        }*/ else {
			const summonSkill = $skills`Summon Candy Heart, Summon Love Song`.find((skill) =>
				have(skill)
			);
			if (!summonSkill) return;
			resources.libram(summonSkill);
		}
	}
}