import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOtherSkillPoints } from "../../types/other-skillpoints";

const initialState: IOtherSkillPoints = {
    completedDaedraQuests: [],
    isOgmaReaded: false,
    blackBooks: []
}

export const otherSkillPointsSlice = createSlice({
    name: 'otherSkillPoints',
    initialState,
    reducers: {
        addDaedraQuestToCompleted: (state, action: PayloadAction<number>) => {
            const questIndex = state.completedDaedraQuests.findIndex(element => element === action.payload)
            if (questIndex === -1)
                state.completedDaedraQuests = [...state.completedDaedraQuests, action.payload]
        },
        removeDaedraQuestFromCompleted: (state, action: PayloadAction<number>) => {
            const questIndex = state.completedDaedraQuests.findIndex(element => element === action.payload)
            if (questIndex !== -1)
                state.completedDaedraQuests.splice(questIndex, 1)
        },
        setIsOgmaReaded: (state, action: PayloadAction<boolean>) => {
            state.isOgmaReaded = action.payload
        },
        addBlackBook: (state, action: PayloadAction<number>) => {
            const blackBookIndex = state.blackBooks.findIndex(element => element === action.payload)
            if (blackBookIndex === -1)
                state.blackBooks = [...state.blackBooks, action.payload]
        },
        removeBlackBook: (state, action: PayloadAction<number>) => {
            const blackBookIndex = state.blackBooks.findIndex(element => element === action.payload)
            if (blackBookIndex !== -1)
                state.blackBooks.splice(blackBookIndex, 1)
        },
    }
})

export const {
    addDaedraQuestToCompleted,
    removeDaedraQuestFromCompleted,
    setIsOgmaReaded,
    addBlackBook,
    removeBlackBook
} = otherSkillPointsSlice.actions

export default otherSkillPointsSlice.reducer