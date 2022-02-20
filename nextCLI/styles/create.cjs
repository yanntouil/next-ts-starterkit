const fs = require('fs')
const chalk = require('chalk')
const config = require('../config.json')
const { createFoldersFromPath } = require('../helpers.cjs')
const { generate } = require('./generate.cjs')
const { createIndex } = require('./createIndex.cjs')




/**
 * Create a new style
 * @param {string} name
 * @param {string} type
 * @param {string} subType
 * @returns {void}
 */
function create(name, type, subType) {
    // Format params
    const style = {}
    switch (type) {
        case 'page': {
            style.name = name
            style.fullPath = `./${config.pages.folder}/${name}.module.scss`
            style.message = `Page module styles ${chalk.bold(style.name)} has been created in ${chalk.bold(style.fullPath)}`
            break
        } case 'component': {
            style.name = name
            style.fullPath = `./${config.components.folder}/${subType}/${name}.module.scss`
            style.message = `Component module styles ${chalk.bold(style.name)} has been created in ${chalk.bold(style.fullPath)}`
            break
        } case 'mixin': {
            style.name = name.replace('/', '-')
            style.fullPath = `./${config.styles.folders.mixins}/${name.replace(/([a-z0-9\-_]{1,})$/, m => `_${m}`)}.scss`
            style.message = `Mixin ${chalk.bold(style.name)} has been created in ${chalk.bold(style.fullPath)} and added in index`
            break
        } case 'function': {
            style.name = name.replace('/', '-')
            style.fullPath = `./${config.styles.folders.functions}/${name.replace(/([a-z0-9\-_]{1,})$/, m => `_${m}`)}.scss`
            style.message = `Function ${chalk.bold(style.name)} has been created in ${chalk.bold(style.fullPath)} and added in index`
            break
        }
    }
    // Break if style already exists
    if (fs.existsSync(style.fullPath)) return console.log(chalk.red(`Style ${chalk.bold(name)} already exists`))
    // Create folders
    createFoldersFromPath(style.fullPath)
    // Create component
    fs.writeFileSync(style.fullPath, generate(style.name, type))// Create file
    // Create index and append style import
    if (['mixin', 'function'].includes(type)) {
        const folder = createIndex(type)
        fs.appendFileSync(`./${folder}/_index.scss`, `\n@import '${name}';`)
    }
    // Display success
    console.log(chalk.green(style.message))
}
exports.create = create