import { Hero } from "../heroes/hero";
import { Weapon } from "./Weapon";

export class Sword implements Weapon {
    damage = Array.of(8, 9, 10, 11, 12);
    hittingChance = 90;
    hasItCanUse(hero: Hero): boolean {
        return true;
    }

    getName(): string {
        return "Sword";
    }

}