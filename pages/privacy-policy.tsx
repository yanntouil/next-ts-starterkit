import { NextPage } from "next";
import { useTranslation } from "app/hooks";
import { NextSeo } from "next-seo";
import config from "app/config";
import styles from "pages/privacy-policy.module.scss";

/**
 * PrivacyPolicyPage
 */
const PrivacyPolicyPage: NextPage = () => {
    const { __ } = useTranslation("pagePrivacyPolicy");
    return (
        <>
            <NextSeo
                title={__("meta.title")}
                openGraph={{
                    title: __("meta.title"),
                    description: __("meta.description"),
                    images: [
                        {
                            url: `${config.siteurl}/images/PrivacyPolicy/opengraph.jpg`,
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
export default PrivacyPolicyPage;
