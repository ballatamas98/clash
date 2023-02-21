import { Hero } from "../heroes/hero";
import { Ability } from "./Ability";

export class Dodge implements Ability{

    doEffect(hero: Hero): void {
       hero.setEvasion(hero.getEvasion() + 100);
    }
    removeEffect(hero: Hero): void {
        hero.setEvasion(hero.getEvasion() - 100);
    }
}