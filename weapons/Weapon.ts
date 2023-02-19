import { Hero } from "../heroes/hero";

export interface Weapon {
    
    damage: Array<number>;
    hittingChance: number;
    hasItCanUse(hero: Hero): boolean;
    getName(): string;
}