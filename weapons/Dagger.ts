import { Hero } from "../heroes/hero";
import { Rouge } from "../heroes/Rouge";
import { Warrior } from "../heroes/Warrior";
import { Weapon } from "./Weapon";

export class Dagger implements Weapon {

    damage = Array.of(4, 5);
    hittingChance = 98;
    hasItCanUse(hero: Hero): boolean {
        return hero instanceof Rouge ? true : false;

    }


    getName(): string {
        return "Dagger";
    }
}