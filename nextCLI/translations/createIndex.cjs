const fs = require('fs')
const config = require('../config.json')


/**
 * Create translation index if not exist
 * @returns {void}
 */
function createIndex() {
    if (!fs.existsSync(`./${config.translations.folders.base}/index.ts`)) {
        fs.writeFileSync(
            `./${config.translations.folders.base}/index.ts`, 
            `/**\n * Translations index\n */\n`
        )
    }
}
exports.createIndex = createIndex