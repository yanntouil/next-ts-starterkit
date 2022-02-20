const fs = require('fs')
const chalk = require('chalk')
const config = require('../config.json')
const { camalize, createFoldersFromPath } = require('../helpers.cjs')
const { generateComponent } = require('./generateComponent.cjs')
const { generatePage } = require('./generatePage.cjs')
const { createTypes } = require('./createTypes.cjs')
const { createIndex } = require('./createIndex.cjs')

/**
 * Create a new helper
 * @param {string} name
 * @param {string} type
 * @param {string} subType
 * @return {void}
 */
function create(name, type, subType) {
    // Format params
    const { folders } = config.translations
    const module = {}
    switch (type) {
        case 'pages': {
            module.name = camalize(`page ${name.replace('/', ' ')}`)// Prefixed by page
            module.fullPath = `./${folders.base}/${folders.pages}/${name}.ts`
            module.from = `${folders.base}/${folders.pages}/${name}`
            module.relatedFile = `${config.pages.folder}/${name}.tsx`
            module.content = generatePage(name, module.relatedFile)
            break
        } case 'components': {
            module.name = camalize(`${subType} ${name.replace('/', ' ')}`)// Prefixed by subType
            module.fullPath = `./${folders.base}/${folders.components}/${subType}/${name}.ts`
            module.from = `${folders.base}/${folders.components}/${subType}/${name}`
            module.relatedFile = `${config.components.folder}/${subType}/${name}.tsx`
            module.content = generateComponent(name, subType, module.relatedFile)
            break
        }
    }
    // Break if component already exists
    if (fs.existsSync(module.fullPath)) return console.log(chalk.red(`Translation ${chalk.bold(name)} already exists`))
    // Create folders
    createFoldersFromPath(module.fullPath)
    // Create module file
    fs.writeFileSync(module.fullPath, module.content)
    // Create index file
    createIndex()
    // Create types file
    createTypes()
    // Append module export in index
    fs.appendFileSync(`./${folders.base}/index.ts`, `\nexport { default as ${module.name} } from '${module.from}'`)
    // Display success message
    console.log(chalk.green(`Translation ${chalk.bold(module.name)} has been created in ${chalk.bold(module.fullPath)} and added in index`))
}
exports.create = create