import type { AppProps } from 'next/app'
import store from 'app/reducers/store'
import { Provider } from 'react-redux'
import 'styles/globals.scss'
import Layout from 'components/layout/Layout'

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} key={router.route} />
            </Layout>
        </Provider>
    )
}

export default MyApp
