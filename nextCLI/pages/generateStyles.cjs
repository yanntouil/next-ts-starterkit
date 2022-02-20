





/**
 * Generate styles content
 */
function generateStyles(name) {
    return `/**
 * Module style ${name}
 */
@import '/styles/framework/abstracts/variables';
@import '/styles/framework/abstracts/functions';
@import '/styles/framework/abstracts/mixins';

.${name.split('/').pop()} {
    //
}`
}
exports.generateStyles = generateStyles