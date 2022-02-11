import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import config from "app/config"
import * as translations from "translations"
import { TranslationLanguages } from "translations/types"

interface TranslationState {
    language: string,
    locale: string,
    translations: TranslationLanguages, 
}

/**
 * initialState
 */
const initialState = (): TranslationState => {
    const state: TranslationState = {
        language: config.translation.defaultLanguage,
        locale: config.translation.locale[config.translation.defaultLanguage],
        translations: {}
    }
    const translationsModules = Object.entries(translations)
    config.translation.languages.forEach(lang => {
        state.translations[lang] = {}// Init lang as a Translation
        translationsModules.forEach((module) => {// Set all translations
            state.translations[lang][module[0]] = module[1][lang]
        })
    })
    if(typeof window !== 'undefined') {// Client side rendering
        state.language = localStorage.getItem('language') || config.translation.defaultLanguage
        document.documentElement.setAttribute('lang', state.language)
        localStorage.setItem('language', state.language)
    }
    return state
}

/**
 * Translation reducer
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
export const translationSlice = createSlice({
    name: 'translation',
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<string>) => {
            state.language = config.translation.languages.includes(action.payload) ? action.payload : config.translation.defaultLanguage
            state.locale = config.translation.locale[state.language]
            localStorage.setItem('language', state.language)
            document.documentElement.setAttribute('lang', state.language)
        },
    }
})

export const { setLanguage } = translationSlice.actions
export const selectTranslation = (state: RootState) => state.translation
export default translationSlice.reducer
