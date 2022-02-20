const inquirer = require('inquirer')
const { ucFirst, pageRegex, componentRegex, styleRegex } = require('./helpers.cjs')
const { create } = require('./styles/create.cjs')

/**
 * Prompt to create a new style
 */
async function createStyle() {
    console.clear()
    const { type } = await inquirer.prompt([{
        type: 'list',
        name: 'type',
        message: 'Which kind of style would you like to create',
        choices: [
            {
                name: 'Page module styles',
                value: 'page'
            },
            {
                name: 'Component module styles',
                value: 'component'
            },
            {
                name: 'Mixin',
                value: 'mixin'
            },
            {
                name: 'Function',
                value: 'function'
            },
        ]
    }])
    const { subType } = (type === 'component') ? 
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
        message: `${ucFirst(type)} name :`,
        validate: (value) => {
            switch (type) {
                case 'page': {
                    return value.match(pageRegex) ? true : `Page name must be valid and can include folder`
                } case 'component': {
                    return value.match(componentRegex) ? true : `Component name must be valid and can include folder`
                } case 'mixin': {
                    return value.match(styleRegex) ? true : `Mixin name must be valid and can include folder`
                } case 'function': {
                    return value.match(styleRegex) ? true : `Function name must be valid and can include folder`
                }
            }
        },
    }])
    console.log('\n')
    create(name, type, subType)
    console.log('\n')
    const { relaunch } = await inquirer.prompt([{
        type: 'confirm',
        name: 'relaunch',
        message: "Would you like to create an other style",
    }])
    if (relaunch === true) await createStyle()
}
exports.createStyle = createStyle

