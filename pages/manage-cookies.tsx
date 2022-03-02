import { NextPage } from "next"
import { useTranslation } from "app/hooks"
import { NextSeo } from "next-seo"
import config from "app/config"
// Styles
import styles from "pages/manage-cookies.module.scss"

/**
 * ManageCookiesPage
 */
const ManageCookiesPage: NextPage = () => {
    const { __ } = useTranslation("pageManageCookies")
    return (
        <>
            <NextSeo
                title={__("meta.title")}
                openGraph={{
                    title: __("meta.title"),
                    description: __("meta.description"),
                    images: [
                        {
                            url: `${config.siteurl}/images/ManageCookies/opengraph.jpg`,
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
export default ManageCookiesPage
