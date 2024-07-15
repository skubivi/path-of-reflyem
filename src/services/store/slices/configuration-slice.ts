import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IConfiguration } from "../../types/configuration";
import { ESkillpointsDificulty } from "../../enums/skillpoints-dificulty";

const initialState: IConfiguration = {
    skillpointsDificulty: ESkillpointsDificulty.Default
}

export const configurationSlice = createSlice({
    name: 'configuration',
    initialState,
    reducers: {
        setSkillpointsDificulty: (state, action: PayloadAction<ESkillpointsDificulty>) => {
            state.skillpointsDificulty = action.payload
        }
    }
})

export const {
    setSkillpointsDificulty
} = configurationSlice.actions

export default configurationSlice.reducer