import type { NextPage } from 'next'
import { useTranslation } from 'app/hooks'

const Home: NextPage = () => {
    const { __ } = useTranslation('pageHome')

    return (
        <>
            <h1>{__('title')}</h1>
        </>
    )
}

export default Home