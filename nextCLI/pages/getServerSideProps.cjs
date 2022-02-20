





/**
 * Generate a getServerSideProps
 * @returns {string}
 */
function getServerSideProps() {
    return `
/**
 * getServerSideProps
 */
export const getServerSideProps: GetServerSideProps = async (context) => {
    const { params } = context// params contains the item 'slug'    
    const res = await fetch(\`\`)
    const item: Object[]|undefined = await res.json()
    if (!item) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }
    return {
        props: {// will be passed to the page component as props
            item
        }
    }
}
`
}
exports.getServerSideProps = getServerSideProps