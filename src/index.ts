import { logAll } from './utilities';
import { Pokemon } from './classes/Pokemon';
import { Move } from './classes/Move';
import { PokemonType } from './classes/Type';

import * as pokemonGoData from './data/master-file.json';

(async () => {
  const misc = new Map();
  const pokemon = new Map();
  const pokeIdMap = new Map();
  const combat = new Map();
  const types = new Map();

  pokemonGoData['template'].forEach((data: any) => {
    const template = data.templateId.split('_');

    if (template[0].includes('V') && !isNaN(parseInt(template[0].substring(1)))) {

      if (template[1] === 'POKEMON') {
        if (!data?.data?.pokemon?.uniqueId) return;
        const id = parseInt(template[0].substring(1));

        template.shift(); // Remove ID
        template.shift(); // Remove POKEMON
        const name = template.join('_');

        pokemon.set(name, new Pokemon(id, data.data.pokemon));

        // Save all forms of a pokemon under one ID
        if (pokeIdMap.has(id)) {
          pokeIdMap.get(id).push(name);
        } else {
          pokeIdMap.set(id, [ name ]);
        }
      } else {
        misc.set(data.templateId, data.data);
      }

    } else if (template[0] === 'COMBAT' && !isNaN(parseInt(template[1].substring(1)))) {
      combat.set(data.data.combatMove.uniqueId, new Move(data.data.combatMove));
    } else if (template[0] === 'POKEMON' && template[1] === 'TYPE') {
      types.set(data.templateId, new PokemonType(data.data.typeEffective));
    } else {
      misc.set(data.templateId, data.data);
    }
  });

  const bulba = pokemon.get('BULBASAUR');
  logAll(bulba);

  // logAll(pokeIdMap.get(bulba.id));
  // bulba.pokemonType.map((type:string) => logAll(types.get(type)));
  // bulba.quickMoves.map((move:string) => logAll(combat.get(move)));
  // bulba.cinematicMoves.map((move:string) => logAll(combat.get(move)));
})();