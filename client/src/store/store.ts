import { configureStore } from '@reduxjs/toolkit'
import sessionReducer from './sessionSlice'
import {createLogger} from 'redux-logger'


const store = configureStore({
  reducer: {
    session: sessionReducer
  },
  // @ts-ignore
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    createLogger()
  ]
})

export default store
