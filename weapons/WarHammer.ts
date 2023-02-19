import { Hero } from "../heroes/hero";
import { Priest } from "../heroes/Priest";
import { Weapon } from "./Weapon";

export class WarHammer implements Weapon {
    

    damage = Array.of(10, 11, 12, 13, 14, 15);
    hittingChance: number = 93;
    hasItCanUse(hero: Hero): boolean {
        return hero instanceof Priest ? true : false;

    }
    getName(): string {
        return "War Hammer";
    }

}