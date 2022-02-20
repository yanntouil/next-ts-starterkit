





/**
 * Generate a getStaticProps
 * @returns {string}
 */
function getStaticProps() {
    return `
/**
 * getStaticProps
 */
export const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context// params contains the item 'slug'
    const res = await fetch(\`\`)
    const item = await res.json()
    
    return {
        props: {// will be passed to the page component as props
            item
        }
    }
}
`
}
exports.getStaticProps = getStaticProps