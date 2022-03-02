const config = require('../config.json')
const { ucFirst } = require('../helpers.cjs')

/**
 * Generate a translation file for a page
 * @param {string} name
 * @param {string[]} options
 * @param {string} relatedFile
 * @return {string}
 */
function generatePage(name, options, relatedFile) {
    const pageName = ucFirst(name.split('/').pop()).replaceAll('-', ' ')
    return `import { TranslationLanguages } from "${config.translations.folders.base}/types"
/**
 * Translation of page ${pageName}
 * @pageRef ${relatedFile}
 */
const translation: TranslationLanguages = {
${config.translations.languages.map((language) => 
`    ${language}: {
        'page-title': "${pageName}",${options.includes('withSEO') ? `
        'meta': {
            'title': "${pageName}",
            'description': "Description of ${pageName} page",
        },` : ''
        }
    }`).join(',\n')}
}

export default translation`
}
exports.generatePage = generatePage