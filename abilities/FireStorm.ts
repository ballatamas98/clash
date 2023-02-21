import { Hero } from "../heroes/hero";
import { Ability } from "./Ability";

export class FireStorm  implements Ability{
    
    
    doEffect(hero: Hero): void {
        hero.getWeapon().damage.forEach(damage => damage += 20); 
    }
    removeEffect(hero: Hero): void {
        hero.getWeapon().damage.forEach(damage => damage -= 20);
    }
}