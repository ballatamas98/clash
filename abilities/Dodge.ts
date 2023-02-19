import { Hero } from "../heroes/hero";
import { Ability } from "./Ability";

export class Dodge implements Ability{

    doEffect(hero: Hero): void {
        throw new Error("Method not implemented.");
    }
    removeEffect(hero: Hero): void {
        throw new Error("Method not implemented.");
    }
}