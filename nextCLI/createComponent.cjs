const inquirer = require('inquirer')
const { componentRegex, componentPageRegex } = require('./helpers.cjs')
const { create } = require('./components/create.cjs')


/**
 * Prompt to create a new component
 */
async function createComponent() {
    console.clear()
    const { type } = await inquirer.prompt([{
        type: 'list',
        name: 'type',
        message: 'Which kind of components would you like to create',
        choices: [
            {
                name: 'UI',
                value: 'ui'
            },
            {
                name: 'Pages',
                value: 'pages'
            },
            {
                name: 'Layout',
                value: 'layout'
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
                value: 'withStyles'
            },
        ]
    }])
    const { name } = await inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: "Name :",
        validate: (value) => value.match(type === 'pages' ? componentPageRegex : componentRegex) ? 
            true : 
            `Name must be valid and can include folder`,
    }])
    console.log('\n')
    create(name, type, options)
    console.log('\n')
    const { relaunch } = await inquirer.prompt([{
        type: 'confirm',
        name: 'relaunch',
        message: "Would you like to create an other component",
    }])
    if (relaunch === true) await createComponent()
}
exports.createComponent = createComponent





