const attackTypes: string[] = [
  'NORMAL',
  'FIGHTING',
  'FLYING',
  'POISON',
  'GROUND',
  'ROCK',
  'BUG',
  'GHOST',
  'STEEL',
  'FIRE',
  'WATER',
  'GRASS',
  'ELECTRIC',
  'PSYCHIC',
  'ICE',
  'DRAGON',
  'DARK',
  'FAIRY'
];

export class PokemonType {
  attackType: string;
  attackScalar: Map<string, number>;

  constructor(pokemonType: any) {
    const name = pokemonType?.attackType.split('_');
    name.shift(); // Remove POKEMON
    name.shift(); // Remove TYPE

    this.attackType = name.join('_');
    this.attackScalar = new Map();

    pokemonType.attackScalar.forEach((v: number, i: number) => this.attackScalar.set(attackTypes[i], v));
  }
}