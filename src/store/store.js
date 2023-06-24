import { configureStore } from '@reduxjs/toolkit'
import MainSlice from './MainSlice'

export const store = configureStore({
  reducer: MainSlice,
})