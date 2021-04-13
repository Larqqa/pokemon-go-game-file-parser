export class Pokemon {
  id: number;
  name: string;
  pokemonType: string[];
  familyId: string;
  parentId: string | undefined;
  form: string | undefined;
  candyToEvolve: number | undefined;
  buddyDistance: number;
  buddyWalkedMegaEnergyAward: number | undefined;
  evolutionBranch: {
    evolution: string,
    candyCost: number,
    form: string | undefined
  }[] | undefined;
  evolution: string[] | undefined;
  quickMoves: string[];
  cinematicMoves: string[];
  stats: {
    baseStamina: number,
    baseAttack: number,
    baseDefense: number
  };
  shadow: {
    purificationStardustNeeded: number,
    purificationCandyNeeded: number,
    purifiedChargeMove: string,
    shadowChargeMove: string
  } | undefined;
  thirdMove: {
    stardustToUnlock: number,
    candyToUnlock: number
  };

  constructor(id: number, pokemon: any) {
    this.id = id;
    this.name = pokemon?.uniqueId;

    this.pokemonType = [];
    let i = 1;
    while (pokemon[`type${i}`]) {
      this.pokemonType.push(pokemon[`type${i}`]);
      i++;
    }

    this.form = pokemon?.form;
    this.familyId = pokemon?.familyId;
    this.parentId = pokemon?.parentId;
    this.candyToEvolve = pokemon?.candyToEvolve;
    this.buddyDistance = pokemon?.kmBuddyDistance;
    this.buddyWalkedMegaEnergyAward = pokemon?.buddyWalkedMegaEnergyAward;
    this.evolutionBranch = pokemon?.evolutionBranch;
    this.evolution = pokemon?.evolution;
    this.quickMoves = pokemon?.quickMoves;
    this.cinematicMoves = pokemon?.cinematicMoves;
    this.stats = pokemon?.stats;
    this.thirdMove = pokemon?.thirdMove;
  }
}