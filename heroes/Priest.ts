import { Heal } from "../abilities/Heal";
import { Hero } from "./hero";

export class Priest extends Hero {

    constructor(name: string) {
        super(name, 90, new Heal(), 4, 20);
    }

}