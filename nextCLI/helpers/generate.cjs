/**
 * Generate a helper of kind function
 * @param {string} name 
 * @returns {string}
 */
const generateFunction = (name) => 
`/**
 * ${name}
 * @param {any} param
 * @returns {void}
 */
function ${name}(param: any): void {
    //
}
 
export default ${name}`
 
/**
 * Generate a helper of kind arrow
 * @param {string} name 
 * @returns {string}
 */
const generateArrow = (name) => 
`/**
 * ${name}
 * @param {any} param
 * @returns {void}
 */
const ${name} = (param: any): void => {
    //
}
 
export default ${name}`
 
/**
 * Generate a helper of kind shortarrow
 * @param {string} name 
 * @returns {string}
 */
const generateShortarrow = (name) => 
`/**
 * ${name}
 * @param {any} param
 * @returns {boolean}
 */
const ${name} = (param: any): boolean => true

export default ${name}`
 
/**
 * Generate a helper of kind constant
 * @param {string} name 
 * @returns {string}
 */
const generateConstant = (name) => 
`/** @const {any} ${name} */
const ${name} = ''

export default ${name}`
 
exports.generate = {
    function: generateFunction,
    arrow: generateArrow,
    shortarrow: generateShortarrow,
    constant: generateConstant,
}