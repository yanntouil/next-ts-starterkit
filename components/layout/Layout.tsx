import { FC } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import config from 'app/config'
// Styles
import styles from './Layout.module.scss'
// Components
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Menu from './Menu'


/**
 * Layout
 */
const Layout: FC = ({ children }) => {
    const router = useRouter()
    return (
        <>
        
            <Head>
                <meta name="viewport" content={config.meta.viewport} />
                <meta name="keywords" content={config.meta.keywords.join(' ')} />
                <meta name="description" content={config.meta.description} />
                <meta name="author" content={config.meta.author} />
                <link rel="icon" type="image/png" href="/favicon.png" />
                {/* <link href="" rel="stylesheet" /> */}
            </Head>
        
            <DefaultSeo 
                defaultTitle={config.sitename}
                titleTemplate={`${config.sitename} | %s`}
                openGraph={{
                    url: config.siteurl + router.asPath,
                    type: 'website',
                    title: config.sitename,
                    description: config.meta.description,
                    images: [{ url: `${config.siteurl}/opengraph.jpg`, width: 1200, height: 630, alt: config.sitename }],
                    locale: config.translation.locale[config.translation.defaultLanguage].replace('-', '_'),
                    site_name: config.sitename,
                }}
                twitter={{
                    site: config.meta.twitter,
                    cardType: 'summary_large_image',
                }}
            />

            <div className={styles['layout']}>
                <Header />
                <Menu />
                <Main>
                    {children}
                </Main>
                <Footer />
            </div>

        </>
    )
}

export default Layout
