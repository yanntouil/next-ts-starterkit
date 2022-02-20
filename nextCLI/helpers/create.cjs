const fs = require('fs')
const chalk = require('chalk')
const config = require('../config.json')
const { createFoldersFromPath } = require('../helpers.cjs')
const { createIndex } = require('./createIndex.cjs')
const { generate } = require('./generate.cjs')

/**
 * Create a new helper
 * @param {string} name
 * @param {string} type
 * @return {void}
 */
function create(name, type) {
    // Format params
    const module = {
        name,
        fullPath: `./${config.helpers.folder}/${name}.ts`,
        from: `${config.helpers.folder}/${name}`,
    }
    // Break if module already exists
    if (fs.existsSync(module.fullPath)) return console.log(chalk.red(`Helper ${chalk.bold(name)} already exists`))
    // Create folders
    createFoldersFromPath(module.fullPath)
    // Create module
    fs.writeFileSync(module.fullPath, generate[type](module.name))
    // Create index if not exist
    createIndex()
    // Append export in index
    fs.appendFileSync(`./${config.helpers.folder}/index.ts`, `\nexport { default as ${module.name} } from '${module.from}'`)
    // Display success
    console.log(chalk.green(`Helper ${chalk.bold(name)} has been created in ${chalk.bold(module.fullPath)} and added in index`))
}
exports.create = create