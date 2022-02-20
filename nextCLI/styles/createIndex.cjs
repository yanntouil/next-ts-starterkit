const fs = require('fs')
const config = require('../config.json')
const { ucFirst } = require('../helpers.cjs')


/**
 * Create folder index if not exist
 * @param {string} type
 * @returns {string}
 */
function createIndex(type) {
    if (! ['mixin', 'function'].includes(type)) return
    const folder = type === 'mixin' ? config.styles.folders.mixins : config.styles.folders.functions
    if (!fs.existsSync(`./${folder}/_index.scss`)) {
        fs.writeFileSync(
            `./${folder}/_index.scss`, 
            `/**\n * ${ucFirst(type)}s index\n */\n\n`
        )
    }
    return folder
}
exports.createIndex = createIndex