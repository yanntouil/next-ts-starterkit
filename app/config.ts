/**
 * Configuration
 */
type ConfigMenu = { name: string, pathname: string, children?: ConfigMenu }[]
type Config = {
    menu?: ConfigMenu,
    copyright?: {author: string, year: number, link: string},
    bottomLinks?: ConfigMenu,
    translation: {
        languages: string[],
        defaultLanguage: string,
        fallbackLanguage: string,
        notFoundError: boolean,
        locale: {
            [key: string]: string
        },
        flags: {
            [key: string]: string
        },
    }
}

const config: Config = {
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
            fr: '/images/flags/fr.svg',
            en: '/images/flags/en.svg',
        }

    },
}
export default config