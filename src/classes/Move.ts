export class Move {
  name: string;
  pokemonType: string;
  power: number;
  durationTurns: number | undefined;
  energyDelta: number | undefined;
  buffs: {
    attackerAttackStatStageChange: number | undefined,
    attackerDefenseStatStageChange: number | undefined,
    targetAttackStatStageChange: number | undefined,
    targetDefenseStatStageChange: number | undefined,
    buffActivationChance: number
  } | undefined;

  constructor(move: any) {
    this.name = move?.uniqueId;
    this.pokemonType = move?.type;
    this.power = move?.power;
    this.durationTurns = move?.durationTurns;
    this.energyDelta = move?.energyDelta;
    this.buffs = move?.buffs;
  }
}