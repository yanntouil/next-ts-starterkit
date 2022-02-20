const inquirer = require('inquirer')
const { pageRegex, componentRegex } = require('./helpers.cjs')
const { create } = require('./translations/create.cjs')

/**
 * Prompt to create a new translation
 */
async function createTranslation() {
    console.clear()
    const { type } = await inquirer.prompt([{
        type: 'list',
        name: 'type',
        message: 'Which kind of translation would you like to create',
        choices: [
            {
                name: 'Pages',
                value: 'pages'
            },
            {
                name: 'Components',
                value: 'components'
            },
        ]
    }])
    const { subType } = (type === 'components') ? 
    await inquirer.prompt([{
        type: 'list',
        name: 'subType',
        message: 'Type :',
        choices: [
            {
                name: 'UI',
                value: 'ui'
            },
            {
                name: 'Layout',
                value: 'layout'
            },
            {
                name: 'Pages',
                value: 'pages'
            },
        ]
    }]) : { subType: ''}
    const { name } = await inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: "Name :",
        validate: (value) => value.match(type === 'pages' ? pageRegex : componentRegex) ? 
            true : 
            `Name must be valid and can include folder name`
    }])
    console.log('\n')
    create(name, type, subType)
    console.log('\n')
    const { relaunch } = await inquirer.prompt([{
        type: 'confirm',
        name: 'relaunch',
        message: "Would you like to create an other translation",
    }])
    if (relaunch === true) await createTranslation()
}
exports.createTranslation = createTranslation