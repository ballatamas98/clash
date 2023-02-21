import { Arena } from "./Arena";
import { Warrior } from "./heroes/Warrior";
import { Sword } from "./weapons/Sword";
import { Rouge } from './heroes/Rouge';
import { Dagger } from "./weapons/Dagger";
import { Mage } from './heroes/Mage';
import { Wand } from './weapons/Wand';

const bela = new Mage("Béla");
bela.equipWeapon(new Wand());
const pista = new Rouge('Pista');
pista.equipWeapon(new Dagger());

Arena.tournament(bela, pista);