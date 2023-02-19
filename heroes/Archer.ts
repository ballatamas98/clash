import { HeadShot } from "../abilities/HeadShot";
import { Hero } from "./hero";

export class Archer extends Hero {

    constructor(name: string) {
        super(name, 80, new HeadShot(), 2, 15);
    }

}