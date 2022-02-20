const config = require('../config.json')



/**
 * Generate styles content
 */
function generate(name, type) {
    const imports = []
    if (['page', 'component'].includes(type)) {
        const imports = [config.styles.variables, config.styles.folders.functions, config.styles.folders.mixins]
        return `/**\n * Module style ${name}\n */\n${imports.map(i => `@import '/${i}';`).join('\n')}\n\n.${name.split('/').pop().toLowerCase()} {\n    //\n}`
    } else if (type === 'mixin') {
        return `/**\n * Mixin ${name}\n */\n\n@mixin ${name} {\n    //\n}`
    } else if (type === 'function') {
        return `/**\n * Function ${name}\n */\n\n@function ${name}($param) {\n    //\n    @return $param\n}`
    }
}
exports.generate = generate