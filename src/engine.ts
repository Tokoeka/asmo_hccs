import { Engine as BaseEngine, Outfit, Task } from "grimoire-kolmafia";
import { $effect, $skill, have } from "libram";
import { debug } from "./lib";
import { myHp, myMaxhp, useSkill } from "kolmafia";
import uniform from "./outfit";

export class Engine extends BaseEngine {
  public getNextTask(): Task | undefined {
    return this.tasks.find((task) => !task.completed());
  }

  public execute(task: Task): void {
    debug(``);
    debug(`Executing ${task.name}`, "blue");
    this.checkLimits(task);
    super.execute(task);
    if (have($effect`Beaten Up`)) throw "Fight was lost; stop.";
    if (task.completed()) {
      debug(`${task.name} completed!`, "blue");
    } else {
      debug(`${task.name} not completed!`, "blue");
    }
  }

  dress(task: Task, outfit: Outfit): void {
    if (task.combat !== undefined && !outfit.skipDefaults) uniform();
    super.dress(task, outfit);
  }

  prepare(task: Task): void {
    super.prepare(task);
    if (task.combat !== undefined && myHp() < myMaxhp() * 0.9) useSkill($skill`Cannelloni Cocoon`);
    // throw `Verify outfit before continuing`;
  }
}
