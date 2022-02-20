const { prompt } = require('inquirer')
const { createPage } = require('./createPage.cjs')
const { createComponent } = require('./createComponent.cjs')
const { createHelper } = require('./createHelper.cjs')
const { createTranslation } = require('./createTranslation.cjs')
const { createStyle } = require('./createStyle.cjs')


// const fs = require('fs')
// const config = require('../app/config.json')

// console.log(config)
/**
 * ToDo: 
 * * CreatePage : add withSEO
 * * CreateHook
 * * CreateReducer
 * ? Done: 
 * * CreatePage
 * * CreateComposant
 * * CreateHelper
 * * CreateTranslation
 * * CreateStyle
 * ? Idea:
 * * Add capability to generate a static api to moked data
 */

/**
 * Dispatch actions
 */
async function askToDoSomething() {
    console.clear()
    const { action } = await prompt([
        {
            type: 'list',
            message: 'What would you like to do',
            name: 'action',
            choices: [
                {
                    name: 'New page',
                    value: 'createPage'
                },
                {
                    name: 'New component',
                    value: 'createComponent'
                },
                {
                    name: 'New helper',
                    value: 'createHelper'
                },
                {
                    name: 'New translation',
                    value: 'createTranslation'
                },
                {
                    name: 'New Style',
                    value: 'createStyle'
                },
                {
                    name: 'Exit',
                    value: 'exit'
                },
            ],
        },
    ])
    switch (action) {
        case 'createPage':
            await createPage()
            break
        case 'createComponent':
            await createComponent()
            break
        case 'createHelper':
            await createHelper()
            break
        case 'createTranslation':
            await createTranslation()
            break
        case 'createStyle':
            await createStyle()
            break
        case 'exit':
            return
    }
    await askToDoSomething()
}

askToDoSomething()