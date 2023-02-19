import { Hero } from "../heroes/hero";
import { Ability } from "./Ability";

export class ArmourBoost implements Ability {

    
    doEffect(hero: Hero): void {
        hero.setArmor(hero.getArmor() + 10);
    }
    removeEffect(hero: Hero): void {
        hero.setArmor(hero.getArmor() - 10);
    }

}