import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISkillPointsForBosses } from "../../types/skillpoints-for-bosses";
import { BANDITS_BOSS_COUNT, DVEMERS_BOSS_COUNT, EXILES_BOSS_COUNT, FALMERS_BOSS_COUNT, MAGES_BOSS_COUNT } from "../../utils/const";

const initialState: ISkillPointsForBosses = {
    skillPoints: 0,
    skillPointsForExiles: 0,
    skillPointsForBandits: 0,
    skillPointsForDvemers: 0,
    skillPointsForFalmers: 0,
    skillPointsForMages: 0,
    collectedId: []
}

export const skillPointsForBossesSlice = createSlice({
    name: 'skillPointsForBosses',
    initialState,
    reducers: {
        addSkillPoints: (state, action: PayloadAction<number>) => {
            state.skillPoints += action.payload
        },
        removeSkillPoints: (state, action: PayloadAction<number>) => {
            if (state.skillPoints < action.payload) state.skillPoints = 0
            else state.skillPoints -= action.payload
        },
        setSkillPointsForBandits: (state, action: PayloadAction<number>) => {
            if (action.payload > BANDITS_BOSS_COUNT) state.skillPointsForBandits = BANDITS_BOSS_COUNT
            else state.skillPointsForBandits = action.payload
        },
        setSkillPointsForExiles: (state, action: PayloadAction<number>) => {
            if (action.payload > EXILES_BOSS_COUNT) state.skillPointsForExiles = EXILES_BOSS_COUNT
            else state.skillPointsForExiles = action.payload
        },
        setSkillPointsForMages: (state, action: PayloadAction<number>) => {
            if (action.payload > MAGES_BOSS_COUNT) state.skillPointsForMages = MAGES_BOSS_COUNT
            else state.skillPointsForMages = action.payload
        },
        setSkillPointsForFalmers: (state, action: PayloadAction<number>) => {
            if (action.payload > FALMERS_BOSS_COUNT) state.skillPointsForFalmers = FALMERS_BOSS_COUNT
            else state.skillPointsForFalmers = action.payload
        },
        setSkillPointsForDvemers: (state, action: PayloadAction<number>) => {
            if (action.payload > DVEMERS_BOSS_COUNT) state.skillPointsForDvemers = DVEMERS_BOSS_COUNT
            else state.skillPointsForDvemers = action.payload
        },
        addBossToCollected: (state, action: PayloadAction<number>) => {
            const bossIndex = state.collectedId.findIndex(element => element === action.payload)
            if (bossIndex === -1)
                state.collectedId = [...state.collectedId, action.payload]
        },
        removeBossFromCollected: (state, action: PayloadAction<number>) => {
            const bossIndex = state.collectedId.findIndex(element => element === action.payload)
            if (bossIndex !== -1)
                state.collectedId.splice(bossIndex, 1)
        },
    }
})

export const {
    addSkillPoints,
    removeSkillPoints,
    setSkillPointsForBandits,
    setSkillPointsForDvemers,
    setSkillPointsForExiles,
    setSkillPointsForFalmers,
    setSkillPointsForMages,
    addBossToCollected,
    removeBossFromCollected
} = skillPointsForBossesSlice.actions

export default skillPointsForBossesSlice.reducer