/**
 * Config Types
 */
export type ConfigMenu = { name: string, pathname: string, children?: ConfigMenu }[]
export type Config = {
    sitename: string,
    siteurl: string,
    meta: {
        description: string,
        author: string,
        keywords: string[],
        viewport: string,
        twitter: string,
    }
    menu: ConfigMenu,
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
