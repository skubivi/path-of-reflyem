import { configureStore } from '@reduxjs/toolkit'

import mainStatReducer from './slices/main-stats-slice'
import configurationReducer from './slices/configuration-slice'

export const store = configureStore({
  reducer: {
    mainStat: mainStatReducer,
    configuration: configurationReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch