import { Config } from "./config.types"

/**
 * Config
 */
const config: Config = {
    sitename: 'Ourway',
    siteurl: 'https://portfolio.ourway.io',
    meta: {
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, perferendis.',
        author: 'Author Name',
        keywords: ['keywords1', 'keywords2', 'keywords3', 'keywords4', 'keywords5', 'keywords6'],
        viewport: 'initial-scale=1.0, width=device-width',
        twitter: '@TouilYann',
    },
    menu: [
        { name: 'home', pathname: '/' },
        { name: 'contact', pathname: '/contact' },
    ],
    copyright: {
        author: 'Ourway',
        year: 2022,
        link: 'https://portfolio.ourway.io/',
    },
    bottomLinks: [
        { name: 'terms-and-services', pathname: '/terms-and-services' },
        { name: 'privacy-policy', pathname: '/privacy-policy' },
        { name: 'manage-cookies', pathname: '/manage-cookies' },
    ],
    translation: {
        languages: ['fr', 'en'],// Languages available
        defaultLanguage: 'fr',// Default language
        fallbackLanguage: 'fr',// Fallback language use if translation is not found
        notFoundError: false,// Show error in console
        locale: {
            fr: 'fr-fr',
            en: 'en-us',
        },
        flags: {
            fr: '/images/flags/fr.png',
            en: '/images/flags/en.png',
        }

    },
}
export default config