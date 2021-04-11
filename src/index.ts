// import * as dotenv from 'dotenv';
// dotenv.config();
import { fetchData, logAll } from './utilities';

(async () => {
  const url = 'https://raw.githubusercontent.com/pokemongo-dev-contrib/pokemongo-game-master/master/versions/latest/V2_GAME_MASTER.json';
  const pokemonGoData: any = await fetchData(url);

  const misc = new Map();
  const pokemonMap = new Map();
  const pokemon = new Map();
  const family = new Map();
  const sequence = new Map();
  const avatar = new Map();
  const item = new Map();
  const combat = new Map();
  const types = new Map();
  const forms = new Map();
  const weather = new Map();

  pokemonGoData['template'].forEach((x: any) => {
    const idArray = x.templateId.split('_');

    if (idArray[0].includes('V') && !isNaN(parseInt(idArray[0].substring(1)))) {

      if (idArray[1] === 'POKEMON') {
        if (!x?.data?.pokemon?.uniqueId) return;

        pokemonMap.set(idArray[0], x.data.pokemon.uniqueId);
        pokemon.set(x.templateId, x.data);
      }

      if (idArray[1] === 'FAMILY') {
        family.set(x.data.pokemonFamily.familyId, x.data);
      }

    } else if (idArray[0] === 'sequence') {
      sequence.set(x.templateId, x.data);
    } else if (idArray[0] === 'AVATAR') {
      avatar.set(x.templateId, x.data);
    } else if (idArray[0] === 'ITEM') {
      item.set(x.templateId, x.data);
    } else if (idArray[0] === 'COMBAT') {
      combat.set(x.templateId, x.data);
    } else if (idArray[0] === 'FORMS') {
      forms.set(x.templateId, x.data);
    } else if (idArray[0] === 'WEATHER') {
      weather.set(x.templateId, x.data);
    } else if (idArray[0] === 'POKEMON' && idArray[1] === 'TYPE') {
      types.set(x.templateId, x.data);
    } else {
      misc.set(x.templateId, x.data);
    }
  });

  // console.log(pokemon.get('V0619_POKEMON_MIENFOO'));
  // console.log(family.get('FAMILY_MIENFOO'));
})();