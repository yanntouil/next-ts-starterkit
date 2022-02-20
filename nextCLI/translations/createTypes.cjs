const fs = require('fs')
const config = require('../config.json')


/**
 * Create translation index if not exist
 * @returns {void}
 */
 function createTypes() {
    if (!fs.existsSync(`./${config.translations.folders.base}/types.ts`)) {
        fs.writeFileSync(
            `./${config.translations.folders.base}/types.ts`, 
            `/**
 * Translations types
 */
export type TranslationLanguages = {
    [key: string]: TranslationObject
}
export type TranslationObject = {
    [key: string]: string | TranslationObject
}
export type TranslationOptions = {
    [key: string]: string | number
}`
        )
    }
}
exports.createTypes = createTypes