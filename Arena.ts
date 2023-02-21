import { Hero } from "./heroes/hero";
import { Weapon } from './weapons/Weapon';

export class Arena {
    public static tournament(hero1: Hero, hero2: Hero) {
        let round: number = 1;
        while (hero1.getHealthPoints() > 0 || hero2.getHealthPoints() > 0) {
            console.log("Round: " + round + "\n");
            ({ hero1, hero2 } = Arena.suffleHeros(hero1, hero2));
            let hasHero1AbilityActivated: boolean = this.heroAbility(hero1);
            let hasHero2AbilityActivated: boolean = this.heroAbility(hero2);

            console.log(hero1.status() + " -> " + hero2.status());
            this.attack(hero1, hero2);
            if (hero2.getHealthPoints() <= 0) {
                this.removeHeroAbilityEffects(hasHero1AbilityActivated, hero1, hasHero2AbilityActivated, hero2);
                break;
            }
            console.log();
            console.log(hero2.status() + " -> " + hero1.status());
            this.attack(hero2, hero1);
            console.log();

            this.removeHeroAbilityEffects(hasHero1AbilityActivated, hero1, hasHero2AbilityActivated, hero2);

            round++;
        }

        console.log("%cThe winner is: " + (hero1.getHealthPoints() > 0 ? hero1.getName() : hero2.getName()), "color: gold");

    }

    private static removeHeroAbilityEffects(hasHero1AbilityActivated: boolean, hero1: Hero, hasHero2AbilityActivated: boolean, hero2: Hero) {
        if (hasHero1AbilityActivated) { this.deactivateHeroAbility(hero1); }
        if (hasHero2AbilityActivated) { this.deactivateHeroAbility(hero2); }
    }

    private static suffleHeros(hero1: Hero, hero2: Hero) {
        if (Math.random() < 0.5) {
            let tempHero = hero1;
            hero1 = hero2;
            hero2 = tempHero;
        }
        return { hero1, hero2 };
    }

    private static calculateInitialDameage(weapon: Weapon): number {
        const randomIndex = Math.floor(Math.random() * weapon.damage.length);
        return weapon.damage[randomIndex];
    }

    private static attack(attaker: Hero, defender: Hero): void {
        if (attaker.getWeapon().hasItCanUse(attaker)) {
            let initialDamage = this.calculateInitialDameage(attaker.getWeapon());

            if (defender.getEvasion() > Math.random() * 100) {
                console.log(defender.getName() + " has dodged the attack");
                return;
            }
            if (attaker.getWeapon().hittingChance < Math.random() * 100) {
                console.log(attaker.getName() + " has missed the attack");
                return;
            }
            console.log("initialDamage: " + initialDamage.toFixed(2));
            console.log(defender.getName() + " has sufferd: " + defender.sufferDamege(initialDamage).toFixed(2) + " damage");

        } else {
            console.log(attaker.getName() + " can't use the weapon: " + attaker.getWeapon().getName());

        }

    }

    private static heroAbility(hero: Hero): boolean {
        if (Math.random() < 0.1) {
            hero.getAbility().doEffect(hero);
            console.log("%c" + hero.getName() + "'s ability has been activated", "color: yellow");

            return true;
        }
        return false;
    }

    private static deactivateHeroAbility(hero: Hero): void {
        hero.getAbility().removeEffect(hero);
    }

}