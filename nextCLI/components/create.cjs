const fs = require('fs')
const chalk = require('chalk')
const config = require('../config.json')
const { camalize, createFoldersFromPath } = require('../helpers.cjs')
const { create: createTranslation } = require('../translations/create.cjs')
const { create: createStyle } = require('../styles/create.cjs')
const { generate } = require('./generate.cjs')
const { createIndex } = require('./createIndex.cjs')

/**
 * Create a new component
 * @param {string} name
 * @param {string} type
 * @param {string[]} options
 * @return {void}
 */
function create(name, type, options) {
    // Format params
    const module = {
        name: camalize(name.replace('/', ' ')),
        fullPath: `./${config.components.folder}/${type}/${name}.tsx`,
        from: `${config.components.folder}/${type}/${name}`,
    }
    // Break if module already exists
    if (fs.existsSync(module.fullPath)) return console.log(chalk.red(`Component ${chalk.bold(name)} already exists`))
    // Create folders
    createFoldersFromPath(module.fullPath)
    // Format options
    const parseOptions = {
        withTranslation: options.includes('withTranslation') ? type + module.name : false,
        withStyle: options.includes('withStyle') ? `${module.from}.module.scss` : false,
    }
    // Create component
    fs.writeFileSync(module.fullPath, generate(module.name, parseOptions))// Create file
    // Create index
    createIndex(type)
    // Append module export in index
    fs.appendFileSync(`./${config.components.folder}/${type}/index.ts`, `\nexport { default as ${module.name} } from '${module.from}'`)
    // Display success
    console.log(chalk.green(`Component ${chalk.bold(module.name)} has been created in ${chalk.bold(module.fullPath)} and added in index`))
    // Create optionals file
    if (options.includes('withTranslation')) createTranslation(name, 'component', type)
    if (options.includes('withStyle')) createStyle(name, 'component', type)
}
exports.create = create