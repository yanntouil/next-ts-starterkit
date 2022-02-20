





/**
 * Generate a getStaticPaths
 * @returns {string}
 */
function getStaticPaths() {
    return `
/**
 * getStaticPaths
 */
export const getStaticPaths: GetStaticPaths = async () => {
    // Call an external API endpoint to get posts
    const res = await fetch(\`\`)
    const items: {slug: string}[] = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = items.map((item) => ({
        params: { slug: item.slug },
    }))

    // We'll pre-render only these paths at build time
    // { fallback: false } means other routes should 404
    return {
        paths,
        fallback: false // true or 'blocking'
    }
}
`
}
exports.getStaticPaths = getStaticPaths