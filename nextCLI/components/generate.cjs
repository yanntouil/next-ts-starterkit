


/**
 * Generate component content
 * @param {string} name
 * @param {{withTranslation: false|string]}} options
 * @returns {string}
 */
function generate(name, options) {

    return `import type {FC} from 'react'
${options.withTranslation ? 
    `import { useTranslation } from 'app/hooks'\n` : 
    ''
}${options.withStyle ? 
    `import styles from '${options.withStyle}'\n` : 
    ''
}
type Props = {
    //
}

/**
 * ${name}
 */
const ${name}: FC<Props> = ({}) => {
    ${options.withTranslation ? 
        `const { __ } = useTranslation('${options.withTranslation}')\n    ` : 
        ''
    }//
    return (
        <></>
    )
}

export default ${name}`
}
exports.generate = generate