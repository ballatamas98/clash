import { Hero } from "../heroes/hero";
import { Ability } from "./Ability";

export class Heal  implements Ability{
    
    doEffect(hero: Hero): void {
        hero.heal(10);
    }
    removeEffect(hero: Hero): void {
        return;
    }
}