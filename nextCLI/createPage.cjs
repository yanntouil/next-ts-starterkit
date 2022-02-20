const inquirer = require('inquirer')
const { folderAndPageRegex, folderAndPageParamRegex } = require('./helpers.cjs')
const { create } = require('./pages/create.cjs')

/**
 * Prompt to create a new component
 */
async function createPage() {
    console.clear()
    const { type } = await inquirer.prompt([{
        type: 'list',
        name: 'type',
        message: 'Which kind of page would you like to create',
        choices: [
            {
                name: 'Static page',
                value: 'static'
            },
            {
                name: 'Dynamic page',
                value: 'dynamic'
            },
        ]
    }])
    const { options } = await inquirer.prompt([{
        type: 'checkbox',
        name: 'options',
        message: 'Options :',
        choices: [
            {
                name: 'With translation',
                value: 'withTranslation'
            },
            {
                name: 'With module styles',
                value: 'withStyle'
            },
            {
                name: 'With SEO',
                value: 'withSEO'
            },
        ]
    }])
    const { dataFetching } = await inquirer.prompt([{
        type: 'list',
        name: 'dataFetching',
        message: 'Add data Fetching',
        choices: [
            {
                name: 'none',
                value: 'none'
            },
            {
                name: 'getServerSideProps',
                value: 'getServerSideProps'
            },
            {
                name: 'getStaticProps',
                value: 'getStaticProps'
            },
        ]
    }])
    const { name } = await inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: "Page name :",
        validate: (value) => value.match(type === 'static' ? folderAndPageRegex : folderAndPageParamRegex) ? 
            true : 
            `Page name must be valid and can include folder`,
    }])
    console.log('\n')
    create(name, options, type, dataFetching)
    console.log('\n')
    const { relaunch } = await inquirer.prompt([{
        type: 'confirm',
        name: 'relaunch',
        message: "Would you like to create an other page",
    }])
    if (relaunch === true) await createPage()
}
exports.createPage = createPage

