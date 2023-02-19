import { Dodge } from "../abilities/Dodge";
import { Hero } from "./hero";

export class Rouge extends Hero {

    constructor(name: string) {
        super(name, 80, new Dodge(), 3, 30);
    }

}