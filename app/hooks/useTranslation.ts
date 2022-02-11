import { useSelector } from 'react-redux'
import { selectTranslation } from 'app/reducers/translation/reducer'
import { TranslationLanguages, TranslationObject, TranslationOptions } from 'translations/types';
import config from 'app/config';

/**
 * Hook : useTranslation
 * @param {string?} parentContext Use in magic method to prefix each context
 * @return {{__: Function, trans: Function, transChoice: Function}}
 */
export default function useTranslation(parentContext?: string): {
    __: (context: string, options?: TranslationOptions) => string,
    trans: (context: string, options?: TranslationOptions) => string,
    transChoice: (context: string, count: number, options?: TranslationOptions, language?: string) => string,
} {
    const { language: currentLanguage, translations } = useSelector(selectTranslation)
    return {
        __ : (// Magic
            context: string, 
            options: TranslationOptions = {}
        ): string => translate(parentContext ? [parentContext, context].join('.') : context, translations, options, config.translation.notFoundError, currentLanguage),
        trans: (// Basic
            context: string, 
            options: TranslationOptions = {}, 
            language: string = currentLanguage
        ): string => translate(context, translations, options, config.translation.notFoundError, language),
        transChoice: (// Pluralize
            context: string, 
            count: number, 
            options: TranslationOptions = {}, 
            language: string = currentLanguage
        ): string => translate(context, translations, options = {...options, count}, config.translation.notFoundError, language),
    }
}

/**
 * Find a translation
 * @param {string} context Sentence, key or doted keys
 * @param {object} translations Contain all translations
 * @param {boolean} notFoundError Generate an error
 * @param {string} language Language use to search
 * @returns {string}
 */
const findTranslation = (context: string, translations: TranslationLanguages, notFoundError: boolean = config.translation.notFoundError, language: string): string => {
    let translation: TranslationObject | string = {...translations[language]}
    // Context bring direct a string
    if (context in translation) {
        const translationContext = translation[context]
        if (translationContext === 'string') return translationContext
        if (!notFoundError) return context// Return context in place of generate an error
        else throw `Translation error : "${context}" bring an object in place of translation`
    }
    // Context is doted
    const keys = context.split('.')
    for (const key of keys) {// Reduce translations
        if (typeof translation === 'object' && key in translation) {
            translation = translation[key]
        } else {
            if (language !== config.translation.fallbackLanguage) {// Try from fallback
                return findTranslation(context, translations, notFoundError, config.translation.fallbackLanguage)
            }
            if (!notFoundError) return context// Return context in place of generate an error
            else throw `Translation error : "${context}" not found on key "${key}"`
            
        }
    }
    if (typeof translation === 'string') return translation
    else if (!notFoundError) return context// Return context in place of generate an error
    else throw `Translation error : "${context}" bring not a translation`
}

/**
 * Translate a sentence from a context
 * ? __(string) basic use
 * ?    __('form.title')
 * ?    form: {
 * ?        title: "My super title"
 * ?    }
 * ? __(string, {count: number}) to pluralize
 * ?    __('how-many', {count: 20})
 * ?    {0} There are none|[1,19] There are some|[20,*] There are many
 * ?    {0} There are none|{1} There is one|[2,*] There are :count
 * ? __(string, {myVar: string | number}) to replace variable
 * ?    __('welcome', {name: user.name})
 * ?    Welcome :name, how are you today?
 * @param {string} context - Sentence, key or doted keys
 * @param {object} translations - Contain all translations
 * @param {object} options - Placeholders to replace in translation use 'count' for pluralization
 * @param {boolean} notFoundError - Generate error on true
 * @param {string} language - Language use to search
 * @returns {string}
 */
export const translate = (context: string, translations: TranslationLanguages, options: TranslationOptions, notFoundError: boolean, language: string): string => {
    if (!context) return ''
    // Get translation
    let translation = findTranslation(context, translations, notFoundError, language)
    // Pluralize translation
    if (typeof options.count === 'number')
        translation = pluralize(translation, options.count)
    // Replace variables in translation
    Object.entries(options).forEach(
        (placeholder) => translation = translation.replace(new RegExp(`:${placeholder[0]}`, 'g'), `${placeholder[1]}`)
    )
    return translation
}

/**
 * Pluralization
 * ? __(string, {count: number})
 * ? {0} There are none|[1,19] There are some|[20,*] There are many
 * ? {0} There are none|{1} There is one|[2,*] There are :count
 * @param {string} translation
 * @param {number} count
 * @returns {string}
 */
const pluralize = (translation: string, count: number): string => {
    let parts = translation.split('|')
    let translationString: false | string = false
    const pattern = /^(\[(\s*\d+\s*)+,(\s*(\d+|\*)\s*)])|({\s*\d+\s*})/
    for (const i in parts) {
        let matched = parts[i].match(pattern)
        if (matched === null) {// No range in translation
            if (+i === (parts.length - 1)) parts[i] = `[${i},*] ${parts[i]}`// Last one [n,*]
            else parts[i] = `{${i}} ${parts[i]}`// Others {n}
            matched = [parts[i]]
        }
        const replaced = matched[0].replace(/[{}\[\]]/g, '')// Remove {} and []
        const range = replaced.split(',').map((m) => {
            const parsed = Number.parseInt(m.trim())
            return Number.isInteger(parsed) ? parsed : count + 1// Case [n,*]
        })
        parts[i] = parts[i].replace(pattern, '')// Remove range to the string
        if (range.length == 1 && range[0] == count)// Case {n}
            translationString = parts[i]
        else if (range.length == 2 && range[0] <= count && range[1] >= count)// Case [nx,ny]
            translationString = parts[i]
    }
    return (translationString === false) ? parts[parts.length - 1] : translationString// Case not found -> return last
}

