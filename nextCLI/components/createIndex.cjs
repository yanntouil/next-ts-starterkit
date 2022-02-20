const fs = require('fs')
const config = require('../config.json')
const { ucFirst } = require('../helpers.cjs')


/**
 * Create index if not exist
 * @param {string} type
 * @returns {void}
 */
function createIndex(type) {
    if (!fs.existsSync(`./${config.components.folder}/${type}/index.ts`)) {
        fs.writeFileSync(
            `./${config.components.folder}/${type}/index.ts`, 
            `/**\n * ${ucFirst(type)} components index\n */\n`
        )
    }
}
exports.createIndex = createIndex