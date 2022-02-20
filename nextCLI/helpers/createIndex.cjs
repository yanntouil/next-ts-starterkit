const fs = require('fs')
const config = require('../config.json')



/**
 * Create index if not exist
 * @returns {void}
 */
function createIndex() {
    if (!fs.existsSync(`./${config.helpers.folder}/index.ts`)) {
        fs.writeFileSync(
            `./${config.helpers.folder}/index.ts`, 
            `/**\n * Helpers index\n */\n`
        )
    }
}
exports.createIndex = createIndex