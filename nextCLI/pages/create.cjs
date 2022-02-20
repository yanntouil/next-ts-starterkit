const fs = require('fs')
const chalk = require('chalk')
const config = require('../config.json')
const { createFoldersFromPath, pascalize } = require('../helpers.cjs')
const { create: createTranslation } = require('../translations/create.cjs')
const { create: createStyle } = require('../styles/create.cjs')
const { generate } = require('./generate.cjs')



/**
 * Create a new page
 * @param {string} name
 * @param {string[]} options
 * @param {string} type
 * @param {string} dataFetching
 */
function create(name, options, type, dataFetching) {
    // Format params
    const module = {
        name: type === 'dynamic' ? pascalize(name.replace('/', ' ').replace(/[\[\]]/g, '')) : pascalize(name.replace('/', ' ')),
        fullPath: `./${config.pages.folder}/${name}.tsx`,
        from: `${config.pages.folder}/${name}`,
    }
    // Break if module already exists
    if (fs.existsSync(module.fullPath)) return console.log(chalk.red(`Page ${chalk.bold(name)} already exists`))
    // Create folders
    createFoldersFromPath(module.fullPath)
    // Format options
    const parseOptions = {
        withTranslation: options.includes('withTranslation') ? 'page' + module.name : false,
        withStyle: options.includes('withStyle') ? `${module.from}.module.scss` : false,
        withServerSideProps: dataFetching === 'getServerSideProps',
        withStaticProps: dataFetching === 'getStaticProps',
        withStaticPaths: dataFetching === 'getStaticProps' && type === 'dynamic',
    }
    // Create component
    fs.writeFileSync(module.fullPath, generate(module.name, parseOptions))// Create file
    // Display success
    console.log(chalk.green(`Page ${chalk.bold(name)} has been created in ${chalk.bold(module.fullPath)}`))
    // Create optionals file
    if (options.includes('withTranslation')) createTranslation(name, 'pages')
    if (options.includes('withStyle')) createStyle(name, 'page')
}
exports.create = create