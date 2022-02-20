const inquirer = require('inquirer')
const { helperRegex } = require('./helpers.cjs')
const { create } = require('./helpers/create.cjs')

/**
 * Prompt to create a new helper
 */
async function createHelper() {
    console.clear()
    const { type } = await inquirer.prompt([{
        type: 'list',
        name: 'type',
        message: 'Which kind of helper would you like to create',
        choices: [
            {
                name: 'Function',
                value: 'function'
            },
            {
                name: 'Arrow: () => {}',
                value: 'arrow'
            },
            {
                name: 'Short arrow: () => true',
                value: 'shortarrow'
            },
            {
                name: 'Constant',
                value: 'constant'
            },
        ]
    }])
    const { name } = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Name :",
            validate: (value) => value.match(helperRegex) ? true : `Name must be valid (camelCase|PascalCase|UPPER_SNAKE_CASE)`,
        },
    ])
    console.log('\n')
    create(name, type)
    console.log('\n')
    const { relaunch } = await inquirer.prompt([{
        type: 'confirm',
        name: 'relaunch',
        message: "Would you like to create an other helper",
    }])
    if (relaunch === true) await createHelper()
}
exports.createHelper = createHelper