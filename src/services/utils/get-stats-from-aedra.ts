import { EAedraes } from "../enums/aedraes";
import { IBaseStats } from "../types/main-stats";
import { BASE_STATS } from "./const";

type TGetStatsFromAedra = (aedra: EAedraes) => IBaseStats

export const getStatsFromAedra: TGetStatsFromAedra = (aedra) => {
    switch (aedra) {
        case EAedraes.Julianos:
            return {
                ...BASE_STATS,
                mana: 70
            }
        case EAedraes.Zenithar:
            return {
                ...BASE_STATS,
                health: 70
            }
        case EAedraes.Kynareth:
            return {
                ...BASE_STATS,
                stamina: 70
            }
        case EAedraes.Arkay:
            return {
                ...BASE_STATS,
                darkRes: 15,
                fireRes: 15,
                lightningRes: 15,
                coldRes: 15
            }
        case EAedraes.Auriel:
            return {
                ...BASE_STATS,
                darkRes: 10
            }
        default:
            return BASE_STATS
    }
}