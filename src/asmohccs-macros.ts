import { $item, $skill, Macro } from "libram";

export const delevel = Macro.trySkill("curse of weaksauce")
    .trySkill("micrometeorite")
    .tryItem("time-spinner")
    .skill("summon love gnats");

export const candyblast = Macro.while_(
    '!match "Hey, some of it is even intact afterwards!"',
    Macro.trySkill($skill`Candyblast`)
);

export const easyFight = Macro.trySkill($skill`Extract`).trySkill($skill`Sing Along`);
export const defaultKill = Macro.step(delevel).step(easyFight).attack().repeat();
