import type { NextPage } from "next"
import { NextSeo } from "next-seo"
import { useTranslation } from "app/hooks"
import config from "app/config"
// Styles
import styles from "pages/index.module.scss"

/**
 * HomePage
 */
const HomePage: NextPage = () => {
    const { __ } = useTranslation("pageHome")
    return (
        <>
            <NextSeo
                title={__("meta.title")}
                openGraph={{
                    title: __("meta.title"),
                    description: __("meta.description"),
                    images: [
                        {
                            url: `${config.siteurl}/images/home/opengraph.jpg`,
                            width: 1200,
                            height: 630,
                            alt: __("meta.title"),
                        },
                    ],
                }}
            />
            <h1 className="page-heading">{__("page-title")}</h1>
        </>
    )
}

export default HomePage
