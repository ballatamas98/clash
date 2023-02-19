import { Hero } from "../heroes/hero";
import { Weapon } from "./Weapon";

export class NullWeapon implements Weapon {

    damage = Array.of(0);
    hittingChance = 0;
    hasItCanUse(hero: Hero): boolean {
        return true;
    }

    
    getName(): string { 
    return "Null Weapon";
    }
}