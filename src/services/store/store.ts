import { configureStore } from '@reduxjs/toolkit'

import mainStatReducer from './slices/main-stats-slice'

export const store = configureStore({
  reducer: {
    mainStat: mainStatReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch