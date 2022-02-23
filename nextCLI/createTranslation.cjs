const inquirer = require('inquirer')
const config = require('./config.json')
const { pageRegex, componentRegex, ucFirst } = require('./helpers.cjs')
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
                name: 'Page',
                value: 'page'
            },
            {
                name: 'Component',
                value: 'component'
            },
        ]
    }])
    const { subType } = (type === 'component') ? 
        await inquirer.prompt([{
            type: 'list',
            name: 'subType',
            message: 'Type :',
            choices: config.components.types.map(type => ({ name: ucFirst(type), value: type }))
        }]) : { subType: ''}
    const { name } = await inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: `${ucFirst(type)} name :`,
        validate: (value) => value.match(type === 'page' ? pageRegex : componentRegex) ? 
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