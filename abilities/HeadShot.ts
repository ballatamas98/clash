import { Hero } from "../heroes/hero";
import { Ability } from "./Ability";

export class HeadShot  implements Ability{
    
    
    doEffect(hero: Hero): void {
        hero.getWeapon().damage.forEach(damage => damage += 15);
    }
    removeEffect(hero: Hero): void {
        hero.getWeapon().damage.forEach(damage => damage += 15);
    }
}