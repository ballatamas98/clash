import { Hero } from "../heroes/hero";
import { Mage } from "../heroes/Mage";
import { Weapon } from "./Weapon";

export class Wand implements Weapon {

    damage = Array.of(9, 10, 11, 12, 13, 14, 15);
    hittingChance: number = 97;
    hasItCanUse(hero: Hero): boolean {
        return hero instanceof Mage ? true : false;

    }
    
    getName(): string {
        return "Wand";
    }

}