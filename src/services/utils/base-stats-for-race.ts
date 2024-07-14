import { ERaces } from "../enums/races";
import { IBaseStats } from "../types/main-stats";
import { BASE_STATS } from "./const";

type TGetBaseStats = (race: ERaces) => IBaseStats

export const getBaseStats: TGetBaseStats = (race) => {
    switch (race) {
        case ERaces.Nothing:
            return {
                ...BASE_STATS,
                health: 100,
                mana: 100,
                stamina: 100
            }
        case ERaces.Orsimer:
            return {
                ...BASE_STATS,
                health: 130,
                mana: 60,
                stamina: 110,
                physSuperresistance: 15
            }
        case ERaces.Nord:
            return {
                ...BASE_STATS,
                health: 110,
                mana: 80,
                stamina: 110,
                coldRes: 50,
                lightningRes: 15
            }
        case ERaces.Redguard:
            return {
                ...BASE_STATS,
                health: 110,
                mana: 70,
                stamina: 120,
                poisonRes: 50,
                diseaseRes: 75
            }
        case ERaces.Altmer:
            return {
                ...BASE_STATS,
                health: 90,
                mana: 180,
                stamina: 80,
                diseaseRes: 75
            }
        case ERaces.Dunmer:
            return {
                ...BASE_STATS,
                health: 100,
                mana: 100,
                stamina: 100,
                fireRes: 25
            }
        case ERaces.Breton:
            return {
                ...BASE_STATS,
                health: 90,
                mana: 120,
                stamina: 90,
                manaShield: 10,
                darkRes: 10,
                magickSuperresistance: 15
            }
        case ERaces.Bosmer:
            return {
                ...BASE_STATS,
                health: 80,
                mana: 100,
                stamina: 120,
                diseaseRes: 75
            }
        case ERaces.Khajiit:
            return {
                ...BASE_STATS,
                health: 90,
                mana: 90,
                stamina: 120,
            }
        case ERaces.Argonian:
            return {
                ...BASE_STATS,
                health: 100,
                mana: 90,
                stamina: 110,
                diseaseRes: 75,
                poisonRes: 75
            }
        case ERaces.Imperial:
            return {
                ...BASE_STATS,
                health: 100,
                mana: 90,
                stamina: 160,
                poisonRes: 25,
                diseaseRes: 25
            }
        default:
            return {
                ...BASE_STATS,
                health: 100,
                mana: 100,
                stamina: 100
            }
    }
}