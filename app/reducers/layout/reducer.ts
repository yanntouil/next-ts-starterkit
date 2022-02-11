
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import config from "app/config"

interface LayoutState {
    darkmode: boolean,
    menu: boolean,
}

/**
 * initialState
 */
const initialState = (): LayoutState => {
    const state: LayoutState = {
        darkmode: false,
        menu: false,
    }
    if(typeof window !== 'undefined') {// Client side rendering
        state.darkmode = localStorage.getItem('darkmode') === 'true' || false
        if (state.darkmode) document.body.classList.add('darkmode')
        localStorage.setItem('darkmode', state.darkmode ? 'true' : 'false')
    }
    return state
}

/**
 * Translation reducer
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        toggleDarkmode: (state) => {
            state.darkmode = !state.darkmode
        },
        setDarkmode: (state, action: PayloadAction<boolean>) => {
            state.darkmode = action.payload
        },
        toggleMenu: (state) => {
            state.menu = !state.menu
        },
        setMenu: (state, action: PayloadAction<boolean>) => {
            state.menu = action.payload
        },

    }
})

export const { toggleDarkmode, setDarkmode, toggleMenu, setMenu } = layoutSlice.actions
export const selectLayout = (state: RootState) => state.layout
export default layoutSlice.reducer



