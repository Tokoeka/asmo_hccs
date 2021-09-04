import { useSkill } from "kolmafia";
import {
    $class,
    $familiar,
    $item,
    $skill,
    ascend,
    get,
    have,
    Lifestyle,
    Paths,
    prepareAscension,
} from "libram";

const timespinnerTargets = [
    "Phillammon",
    "Busta_Rhymes",
    "Manendra",
    "Gausie",
    "Beldur",
    "worthawholebean",
    "ReverKiller",
    "phreddrickv2",
    "The Dictator",
];

/*while ($skill`Experience Safari`.timescast < get("skillLevel180") && safariTargets.length) {
    useSkill($skill`Experience Safari`, 1, safariTargets[0]);
    safariTargets.shift();
}*/

prepareAscension(
    {
        workshed: $item`Little Geneticist DNA-Splicing Lab`,
        garden: $item`Peppermint Pip Packet`,
        eudora: $item`Our Daily Candles™ order form`,
    },
    {
        desk: $item`continental juice bar`,
        nightstand: $item`foreign language tapes`,
        ceiling: $item`ceiling fan`,
    }
);

/*const pet = have($familiar`Baby Bugged Bugbear`)
    ? $item`astral statuette`
    : $item`astral pet sweater`;*/

ascend(
    Paths.CommunityService,
    $class`Pastamancer`,
    Lifestyle.hardcore,
    "knoll",
    $item`astral six-pack`//,
    //pet
);
