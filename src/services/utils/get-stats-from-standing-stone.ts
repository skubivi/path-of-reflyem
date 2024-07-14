import { EStandingStones } from "../enums/standing-stones"
import { IBaseStats } from "../types/main-stats"
import { BASE_STATS } from "./const"

type TGetStatsFromStandingStone = (standingStone: EStandingStones) => IBaseStats

export const getStatsFromStandingStone: TGetStatsFromStandingStone = (stone) => {
    switch (stone) {
        case EStandingStones.Warrior:
            return {
                ...BASE_STATS,
                health: 50
            }
        case EStandingStones.Lord:
            return {
                ...BASE_STATS,
                fireRes: 10,
                coldRes: 10,
                lightningRes: 10,
                darkRes: 10
            }
        case EStandingStones.Mage:
            return {
                ...BASE_STATS,
                mana: 50
            }
        case EStandingStones.Atronach:
            return {
                ...BASE_STATS,
                mana: 100,
                manaShield: 20
            }
        case EStandingStones.Thief:
            return {
                ...BASE_STATS,
                stamina: 50
            }
        case EStandingStones.Serpent:
            return {
                ...BASE_STATS,
                poisonRes: 25
            }
        default:
            return BASE_STATS
    }
}