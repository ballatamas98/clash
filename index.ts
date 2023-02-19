import { Arena } from "./Arena";
import { Warrior } from "./heroes/Warrior";
import { Sword } from "./weapons/Sword";
import { Rouge } from './heroes/Rouge';
import { Dagger } from "./weapons/Dagger";

const bela = new Rouge("Béla");
bela.equipWeapon(new Dagger());
const pista = new Warrior('Pista');
pista.equipWeapon(new Sword());

Arena.tournament(bela, pista);