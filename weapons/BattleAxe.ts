import { Hero } from "../heroes/hero";
import { Warrior } from "../heroes/Warrior";
import { Weapon } from "./Weapon";

export class BattleAxe implements Weapon {

    damage = Array.of(12, 13, 14, 15);
    hittingChance = 92;
    hasItCanUse(hero: Hero): boolean {
        return hero instanceof Warrior ? true : false;

    }

    
    getName(): string {
        return "Battle Axe";
    }
}