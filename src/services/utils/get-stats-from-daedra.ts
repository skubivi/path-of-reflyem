import { EDaedraes } from "../enums/daedraes";
import { IBaseStats } from "../types/main-stats";
import { BASE_STATS } from "./const";

type TGetStatsFromAedra = (daedra: EDaedraes) => IBaseStats

export const getStatsFromDaedra: TGetStatsFromAedra = (daedra) => {
    switch (daedra) {
        case EDaedraes.Hermeus: 
            return {
                ...BASE_STATS,
                mana: 35
            }
        case EDaedraes.Malacath:
            return {
                ...BASE_STATS,
                health: 35
            }
        case EDaedraes.Mehrunes:
            return {
                ...BASE_STATS,
                mana: 25,
                stamina: 25
            }
        case EDaedraes.Mephala:
            return {
                ...BASE_STATS,
                stamina: 35
            }
        case EDaedraes.Sanguine:
            return {
                ...BASE_STATS,
                darkRes: 5,
                poisonRes: 10
            }
        case EDaedraes.Clavicus:
            return {
                ...BASE_STATS,
                health: 25,
                stamina: 25
            }
        default:
            return BASE_STATS
    }
}