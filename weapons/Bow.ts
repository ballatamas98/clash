import { Archer } from "../heroes/Archer";
import { Hero } from "../heroes/hero";
import { Weapon } from "./Weapon";

export class Bow implements Weapon {

    damage = Array.of(7, 8, 9, 10, 11, 12);
    hittingChance = 89;
    hasItCanUse(hero: Hero): boolean {
        return hero instanceof Archer ? true : false;

    }

    
    getName(): string {
        return "Bow";
    }
}