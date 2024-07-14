import { EAedraes } from "../enums/aedraes"
import { EDaedraes } from "../enums/daedraes"
import { ERaces } from "../enums/races"
import { EStandingStones } from "../enums/standing-stones"
import { ESubClasses } from "../enums/sub-classes"

export interface IBaseStats {
    health: number
    mana: number
    stamina: number
    poisonRes: number,
    diseaseRes: number,
    fireRes: number,
    lightningRes: number,
    coldRes: number,
    darkRes: number,
    manaShield: number
}

export interface IOptions {
    level: number,
    subClass: ESubClasses,
    race: ERaces,
    standingStone: EStandingStones,
    aedra1: EAedraes,
    aedra2: EAedraes,
    daedra1: EDaedraes,
    daedra2: EDaedraes,
    pointsInHealth: number,
    pointsInMana: number,
    pointsInStamina: number
}

export interface IMainStats extends IBaseStats, IOptions {}