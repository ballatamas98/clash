import { FireStorm } from "../abilities/FireStorm";
import { Hero } from "./hero";

export class Mage extends Hero {

    constructor(name: string) {
        super(name, 70, new FireStorm(), 1, 5);
    }

}