import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMainStats } from "../../types/main-stats";
import { ERaces } from "../../enums/races";
import { ESubClasses } from "../../enums/sub-classes";
import { EStandingStones } from "../../enums/standing-stones";
import { EAedraes } from "../../enums/aedraes";
import { EDaedraes } from "../../enums/daedraes";
import { getBaseStats } from "../../utils/base-stats-for-race";
import { checkStatsWithLevel } from "../../utils/check-stats";
import { SECOND_AEDRA_LEVEL, STARTING_LEVEL, STATS_PER_LEVEL } from "../../utils/const";

const baseStats = getBaseStats(ERaces.Nothing)

const initialState: IMainStats = {
    level: STARTING_LEVEL,
    race: ERaces.Nothing,
    subClass: ESubClasses.Nothing,
    standingStone: EStandingStones.Nothing,
    aedra1: EAedraes.Nothing,
    aedra2: EAedraes.Nothing,
    daedra1: EDaedraes.Nothing,
    daedra2: EDaedraes.Nothing,
    pointsInHealth: 0,
    pointsInMana: 0,
    pointsInStamina: 0,
    ...baseStats
}

export const subClassSlice = createSlice({
    name: 'mainStats',
    initialState,
    reducers: {
        selectSubClass: (state, action: PayloadAction<ESubClasses>) => {
            state.subClass = action.payload
            state.aedra1 = EAedraes.Nothing
            state.aedra2 = EAedraes.Nothing
            state.daedra1 = EDaedraes.Nothing
            state.daedra2 = EDaedraes.Nothing
        },
        selectRace: (state, action: PayloadAction<ERaces>) => {
            state.race = action.payload
            const baseStats = getBaseStats(action.payload)
            state.health = baseStats.health
            state.mana = baseStats.mana
            state.stamina = baseStats.stamina
            state.poisonRes = baseStats.poisonRes
            state.diseaseRes = baseStats.diseaseRes
            state.fireRes = baseStats.fireRes
            state.lightningRes = baseStats.lightningRes
            state.coldRes = baseStats.coldRes
            state.darkRes = baseStats.darkRes
            state.manaShield = baseStats.manaShield
            state.physSuperresistance = baseStats.physSuperresistance
            state.magickSuperresistance = baseStats.magickSuperresistance
        },
        selectStandingStone: (state, action: PayloadAction<EStandingStones>) => {
            state.standingStone = action.payload
        },
        selectAedra1: (state, action: PayloadAction<EAedraes>) => {
            if (state.subClass === ESubClasses.RighteousMan) state.aedra1 = action.payload
        },
        selectAedra2: (state, action: PayloadAction<EAedraes>) => {
            if (state.subClass === ESubClasses.RighteousMan && state.level >= SECOND_AEDRA_LEVEL) state.aedra2 = action.payload
        },
        selectDaedra1: (state, action: PayloadAction<EDaedraes>) => {
            if (state.subClass === ESubClasses.Cultist) state.daedra1 = action.payload
        },
        selectDaedra2: (state, action: PayloadAction<EDaedraes>) => {
            if (state.subClass === ESubClasses.Cultist) state.daedra2 = action.payload
        },
        setLevel: (state, action: PayloadAction<number>) => {
            state.level = action.payload
        },
        increaseLevel: (state) => {
            state.level += 1
        },
        decreaseLevel: (state) => {
            if (state.level <= STARTING_LEVEL) state.level = STARTING_LEVEL
            else state.level -= 1
        },
        increaseHealth: (state) => {
            if (checkStatsWithLevel(state.level, state.pointsInHealth, state.pointsInMana, state.pointsInStamina) > 0) {
                state.health = getBaseStats(state.race).health + ((state.pointsInHealth + 1) * STATS_PER_LEVEL)
                state.pointsInHealth += 1
            }
        },
        decreaseHealth: (state) => {
            if (state.pointsInHealth > 0) {
                state.health = getBaseStats(state.race).health + ((state.pointsInHealth - 1) * STATS_PER_LEVEL)
                state.pointsInHealth -= 1
            }
        },
        setHealth: (state, action: PayloadAction<number>) => {
            state.health = getBaseStats(state.race).health + action.payload * STATS_PER_LEVEL
            state.pointsInHealth = action.payload
        },
        increaseMana: (state) => {
            if (checkStatsWithLevel(state.level, state.pointsInHealth, state.pointsInMana, state.pointsInStamina) > 0) {
                state.mana = getBaseStats(state.race).mana + ((state.pointsInMana + 1) * STATS_PER_LEVEL)
                state.pointsInMana += 1
            }
        },
        decreaseMana: (state) => {
            if (state.pointsInMana > 0) {
                state.mana = getBaseStats(state.race).mana + ((state.pointsInMana - 1) * STATS_PER_LEVEL)
                state.pointsInMana -= 1
            }
        },
        setMana: (state, action: PayloadAction<number>) => {
            state.mana = getBaseStats(state.race).mana + action.payload * STATS_PER_LEVEL
            state.mana = action.payload
        },
        increaseStamina: (state) => {
            if (checkStatsWithLevel(state.level, state.pointsInHealth, state.pointsInMana, state.pointsInStamina) > 0) {
                state.stamina = getBaseStats(state.race).stamina + ((state.pointsInStamina + 1) * STATS_PER_LEVEL)
                state.pointsInStamina += 1
            }
        },
        decreaseStamina: (state) => {
            if (state.pointsInStamina > 0) {
                state.stamina = getBaseStats(state.race).stamina + ((state.pointsInStamina - 1) * STATS_PER_LEVEL)
                state.pointsInStamina -= 1
            }
        },
        setStamina: (state, action: PayloadAction<number>) => {
            state.stamina = getBaseStats(state.race).stamina + action.payload * STATS_PER_LEVEL
            state.stamina = action.payload
        },
    }
})

export const { 
    selectSubClass, 
    selectAedra1, 
    selectAedra2, 
    selectDaedra1, 
    selectDaedra2, 
    selectRace, 
    selectStandingStone, 
    setLevel, 
    increaseHealth, 
    increaseLevel, 
    increaseMana, 
    increaseStamina,
    decreaseMana,
    decreaseStamina,
    decreaseHealth,
    decreaseLevel,
    setHealth,
    setMana,
    setStamina
} = subClassSlice.actions

export default subClassSlice.reducer