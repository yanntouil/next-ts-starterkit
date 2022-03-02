const { getServerSideProps } = require('./getServerSideProps.cjs')
const { getStaticProps } = require('./getStaticProps.cjs')
const { getStaticPaths } = require('./getStaticPaths.cjs')
const { ucFirst } = require('../helpers.cjs')

/**
 * Generate page
 * @param {string} name
 * @param {{withTranslation: false|string, withServerSideProps: boolean, withStaticProps: boolean, withStaticPaths: boolean}} options
 * @returns {string}
 */
function generate(name, options) {
    const imports = {}, beforeComponent = [], component = [], jsx = [], afterComponent = []

    // Page import
    imports["next"] = ['NextPage']

    // withTranslation
    if (options.withTranslation) {
        if (imports["app/hooks"]) imports["app/hooks"].push('useTranslation')
        else imports["app/hooks"] = ['useTranslation']
        component.push(`    const { __ } = useTranslation('${options.withTranslation}')`)
    }

    // withSEO
    if (options.withSEO) {
        if (imports["next-seo"]) imports["next-seo"].push('NextSeo')
        else imports["next-seo"] = ['NextSeo']
        jsx.push(`
            <NextSeo
                title={${options.withTranslation ? `__('meta.title')` : `'Page title'`}}
                openGraph={{
                    title: ${options.withTranslation ? `__('meta.title')` : `'Page title'`},
                    description: ${options.withTranslation ? `__('meta.description')` : `'Description of home page'`},
                    images: [{ url: \`\${config.siteurl}/images/${name}/opengraph.jpg\`, width: 1200, height: 630, alt: ${options.withTranslation ? `__('meta.title')` : `'Page title'`} }]
                }}
            />\n`)
    }
    
    // withServerSideProps
    if (options.withServerSideProps) {
        imports["next"].push('GetServerSideProps')
        beforeComponent.push(`type Props = {\n    item?: any,\n    errors?: string\n}`)
        afterComponent.push(getServerSideProps())
    }

    // withStaticProps
    if (options.withStaticProps) {
        imports["next"].push('GetStaticProps')
        beforeComponent.push(`type Props = {\n    item?: any,\n    errors?: string\n}`)
        afterComponent.push(getStaticProps())
    }

    // withStaticPaths
    if (options.withStaticPaths) {
        imports["next"].push('GetStaticPaths')
        afterComponent.push(getStaticPaths())
    }

    // Generate page
    let page = Object.entries(imports).map(([from, nameds]) => `import { ${nameds.join(', ')} } from '${from}'\n`).join('')
    if (options.withSEO) page += `import config from 'app/config'\n`
    if (options.withStyle) page += `import styles from '${options.withStyle}'\n`
    page += '\n'
    page += beforeComponent.join('\n') + '\n'
    page += `\n/**\n * ${name}Page\n */\n`
    if (options.withServerSideProps || options.withStaticProps) page += `const ${name}Page: NextPage<Props> = ({}) => {\n`// Add props type
    else page += `const ${name}Page: NextPage = () => {\n`
    page += component.join('\n') + '\n'
    page += `    return (\n        <>\n${jsx.join('')}\n        </>\n    )\n}\n`
    page += `export default ${name}Page\n`
    page += afterComponent.join('\n')
    return page
}
exports.generate = generate