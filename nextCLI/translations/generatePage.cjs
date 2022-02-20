const config = require('../config.json')


/**
 * Generate a translation file for a page
 * @param {string} name
 * @param {string} relatedFile
 * @return {string}
 */
function generatePage(name, relatedFile) {
    return `import { TranslationLanguages } from "${config.translations.folders.base}/types"
/**
 * Translation of page ${name}
 * @pageRef ${relatedFile}
 */
const translation: TranslationLanguages = {
${config.translations.languages.map((language) => 
`    ${language}: {
        'page-title': "",
    }`).join(',\n')}
}

export default translation`
}
exports.generatePage = generatePage