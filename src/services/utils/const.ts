import { IBaseStats } from "../types/main-stats"

export const STARTING_LEVEL = 6
export const STATS_PER_LEVEL = 5
export const SECOND_AEDRA_LEVEL = 30
export const BASE_STATS: IBaseStats = {
    health: 0,
    mana: 0,
    stamina: 0,
    manaShield: 0,
    darkRes: 0,
    fireRes: 0,
    lightningRes: 0,
    coldRes: 0,
    diseaseRes: 0,
    poisonRes: 0
}
export const MAX_MANA_SHIELD = 75
export const STARTING_MAX_MANA_SHIELD = 20
export const MANA_PER_MAX_MANA_SHIELD = 30