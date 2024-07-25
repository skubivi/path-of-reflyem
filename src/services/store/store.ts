import { configureStore } from '@reduxjs/toolkit'

import mainStatReducer from './slices/main-stats-slice'
import configurationReducer from './slices/configuration-slice'
import skillPointsForBossesReducer from './slices/skillpoints-for-bosses-slice'

export const store = configureStore({
  reducer: {
    mainStat: mainStatReducer,
    configuration: configurationReducer,
    skillPointsForBosses: skillPointsForBossesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch