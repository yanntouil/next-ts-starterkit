import { NextPage } from "next";
import { useTranslation } from "app/hooks";
import { NextSeo } from "next-seo";
import config from "app/config";
import styles from "pages/terms-and-services.module.scss";

/**
 * TermsAndServicesPage
 */
const TermsAndServicesPage: NextPage = () => {
    const { __ } = useTranslation("pageTermsAndServices");
    return (
        <>
            <NextSeo
                title={__("meta.title")}
                openGraph={{
                    title: __("meta.title"),
                    description: __("meta.description"),
                    images: [
                        {
                            url: `${config.siteurl}/images/TermsAndServices/opengraph.jpg`,
                            width: 1200,
                            height: 630,
                            alt: __("meta.title"),
                        },
                    ],
                }}
            />

            <h1 className="page-heading">{__("page-title")}</h1>
        </>
    );
};
export default TermsAndServicesPage;
