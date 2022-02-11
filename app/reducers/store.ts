import { configureStore } from '@reduxjs/toolkit'
import translationReducer from './translation/reducer'
import layoutReducer from './layout/reducer'


const store = configureStore({
    reducer: {
        translation: translationReducer,
        layout: layoutReducer,
    },
  })

export type RootState = ReturnType<typeof store.getState>
  
export default store