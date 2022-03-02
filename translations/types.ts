/**
 * Translation Types
 */
export type TranslationLanguages = {
    [key: string]: TranslationObject
}
export type TranslationObject = {
    [key: string]: string | TranslationObject
}
export type TranslationOptions = {
    [key: string]: string | number
}
