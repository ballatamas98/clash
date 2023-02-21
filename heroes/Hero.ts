import { Ability } from "../abilities/Ability";
import { NullWeapon } from "../weapons/NullWeapon";
import { Weapon } from "../weapons/Weapon";

export abstract class Hero {
   
    protected name: string;
    protected healthPoints: number;
    protected ability: Ability;
    protected armour: number;
    protected evasion: number;
    protected weapon: Weapon;

    constructor(name: string, healthPoint: number, ability: Ability, armour: number, evasion: number) {
        this.name = name;
        this.healthPoints = healthPoint;
        this.ability = ability;
        this.armour = armour;
        this.evasion = evasion;
        this.weapon = new NullWeapon();
    }

    public equipWeapon(weapon: Weapon): void {
        this.weapon = weapon;
    };
    public sufferDamege(damege: number): number {
        const finalDamage: number = (damege - (this.armour / 3));
        this.healthPoints -= finalDamage;
        return finalDamage;
    }
    public getName(): string {
        return this.name;
    }
    public getArmor(): number {
        return this.armour;
    }
    public setArmor(armour: number): void {
        this.armour = armour;
    }
    public getEvasion(): number {
        return this.evasion;
    }
    public setEvasion(evasion: number): void {
        this.evasion = evasion;
    }
    getHealthPoints(): number {
        return this.healthPoints;
    }
    getWeapon(): Weapon {
        return this.weapon;
    }
    getAbility() {
        return this.ability;

    }

    heal(num: number) {
        this.healthPoints += 10;
    }

    public status(): string {
        return (this.name + ":" + this.healthPoints);
    }
}