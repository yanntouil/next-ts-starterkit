const config = require('../config.json')

/**
 * Generate a translation file for a component
 * @param {string} name
 * @param {string} type
 * @param {string} relatedFile
 * @return {string}
 */
function generateComponent(name, type, relatedFile) {
    return `import { TranslationLanguages } from "${config.translations.folders.base}/types"
        
/**
 * Translation of ${type} component ${name}
 * @componentRef ${relatedFile}
 */
const translation: TranslationLanguages = {
${config.translations.languages.map((language) => 
`    ${language}: {
        'entries': "translation",
    }`).join(',\n')}
}

export default translation`
}
exports.generateComponent = generateComponent