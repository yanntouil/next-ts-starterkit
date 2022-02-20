const fs = require('fs')

/**
 * Capitalize the first character
 * @param {string} string
 * @return {string}
 */
const ucFirst = ([ first, ...rest ]) => first.toLocaleUpperCase() + rest.join('')
exports.ucFirst = ucFirst

/**
 * Camalize a string
 * @param {string} string
 * @returns {string}
 */
const camalize = (string) => string.replace(/[^a-zA-Z0-9]+(.)/g, (match, char) => char.toUpperCase())
exports.camalize = camalize

/**
 * Pascalize a string
 * @param {string} string
 * @returns {string}
 */
const pascalize = (string) => ucFirst(camalize(string))
exports.pascalize = pascalize

/** @const {RegExp} componentRegex (Folder/){0,}(Component){1} */
const componentRegex = /^([A-Z]{1}[a-zA-Z0-9]{0,}\/){0,}([A-Z]{1}[a-zA-Z0-9]{0,})$/
exports.componentRegex = componentRegex

/** @const {RegExp} componentRegex (Folder/){0,}(Component){1} */
const componentPageRegex = /^(([\[]{1}[a-z]{1}[a-zA-Z0-9]{0,}[\]]{1}\/){1}|([a-z]{1}[a-zA-Z0-9\-]{0,}\/)){0,}([A-Z]{1}[a-zA-Z0-9]{0,})$/
exports.componentPageRegex = componentPageRegex

/** @const {RegExp} pageRegex ([param]|folder/){0,}([param]|page){1} */
const pageRegex = /^(([\[]{1}[a-z]{1}[a-zA-Z0-9]{0,}[\]]{1}\/){1}|([a-z]{1}[a-zA-Z0-9\-]{0,}\/)){0,}(([a-z]{1}[a-zA-Z0-9\-]{0,})|([\[]{1}[a-z]{1}[a-zA-Z0-9]{0,}[\]]{1})){1}$/
exports.pageRegex = pageRegex

/** @const {RegExp} folderAndPageRegex ([param]|folder/){0,}(page){1} */
const folderAndPageRegex = /^(([\[]{1}[a-z]{1}[a-zA-Z0-9]{0,}[\]]{1}\/){1}|([a-z]{1}[a-zA-Z0-9\-]{0,}\/)){0,}([a-z]{1}[a-zA-Z0-9\-]{0,}){1}$/
exports.folderAndPageRegex = folderAndPageRegex

/** @const {RegExp} folderAndPageParamRegex ([param]|folder/){0,}([param]){1} */
const folderAndPageParamRegex = /^(([\[]{1}[a-z]{1}[a-zA-Z0-9]{0,}[\]]{1}\/){1}|([a-z]{1}[a-zA-Z0-9\-]{0,}\/)){0,}([\[]{1}[a-z]{1}[a-zA-Z0-9]{0,}[\]]{1}){1}$/
exports.folderAndPageParamRegex = folderAndPageParamRegex

/** @const {RegExp} helperRegex (camelCase|PascalCase|UPPER_SNAKE_CASE){1} */
const helperRegex = /^(([a-z]{1}[a-zA-Z0-9]{0,})|([A-Z]{1}[a-zA-Z0-9]{0,})|([A-Z]{1}[A-Z0-9_]{0,})){1}$/
exports.helperRegex = helperRegex

/** @const {RegExp} styleRegex ((kebab-case|snake_case)/){0,}(kebab-case|snake_case){1} */
const styleRegex = /^(([a-z]{1}[a-z0-9_]{0,}\/){1}|([a-z]{1}[a-z0-9\-]{0,}\/){1}){0,}(([a-z]{1}[a-z0-9_]{0,}){1}|([a-z]{1}[a-z0-9\-]{0,}){1}){1}$/
exports.styleRegex = styleRegex

/**
 * Pascalize a string
 * @param {string} fullPath
 * @returns {void}
 */
const createFoldersFromPath = (fullPath) => {
    let path = '.'
    const foldersList = fullPath.split('/')
    foldersList.slice(1, foldersList.length - 1).forEach((part) => {// Remove first and last (./ {...} /file.ext)
        path += `/${part}`
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path)
        }
    })
}
exports.createFoldersFromPath = createFoldersFromPath


/*
Group param
([\[]{1}[a-z]{1}[a-zA-Z0-9]{0,}[\]]{1}){1}

Group page
([a-z]{1}[a-zA-Z0-9\-]{0,})

Group param folder
([\[]{1}[a-z]{1}[a-zA-Z0-9]{0,}[\]]{1}\/){1}

Group page folder
([a-z]{1}[a-zA-Z0-9\-]{0,}\/)

Group folder + param
    (([\[]{1}[a-z]{1}[a-zA-Z0-9]{0,}[\]]{1}\/){1}|([a-z]{1}[a-zA-Z0-9\-]{0,}\/)){0,}([\[]{1}[a-z]{1}[a-zA-Z0-9]{0,}[\]]{1}){1}
Group folder + page
    (([\[]{1}[a-z]{1}[a-zA-Z0-9]{0,}[\]]{1}\/){1}|([a-z]{1}[a-zA-Z0-9\-]{0,}\/)){0,}([a-z]{1}[a-zA-Z0-9\-]{0,}){1}


(([a-z]{1}[[a-zA-Z0-9\-]]{0,})|([a-z]{1}[[a-zA-Z0-9_]]{0,})\/){0,}
[a-z]{1}[[a-zA-Z0-9\-_]]{1}

^
    ([a-z]{1}[a-z0-9_]{0,}[\]]{1}\/){1}

*/
