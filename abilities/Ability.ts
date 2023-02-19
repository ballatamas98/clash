import { Hero } from "../heroes/hero";

export interface Ability {

    
    doEffect(hero: Hero): void
    removeEffect(hero: Hero): void

}