import { ArmourBoost } from "../abilities/Armour";
import { Hero } from "./hero";

export class Warrior extends Hero {

    constructor(name: string) {
        super(name, 100, new ArmourBoost(), 5, 20);
    }

}