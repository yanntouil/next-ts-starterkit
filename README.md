# Next Typescript Starter kit
Next Typescript Starter kit (NTSK) is a boiler plate use to simplify my development under Next. 
NTSK mixes the base of my configuration, the folder tree and most of my helpers, hooks, ... NTSK also includes the integration of Redux and my translation manager and my nextCLI to save time on file creation.

## Summary
1. [Getting Started](#getting-started)
2. [Config](#config)
3. [Helpers](https://github.com/yanntouil/next-ts-starterkit/tree/main/app/helpers#helpers)
4. [Hooks](https://github.com/yanntouil/next-ts-starterkit/tree/main/app/hooks#hooks)
5. [Redux](#redux)
6. [NextCLI](https://github.com/yanntouil/next-ts-starterkit/tree/main/nextCLI#nextcli)
7. [Translation](#translation)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Config
```js
{
    sitename: '...',// Use in SEO
    siteurl: 'https://...',// Use to generate image path in SEO
    meta: {// Use to generate SEO in each page
        description: '...',
        author: '...',
        keywords: ['keywords1', 'keywords2', '...'],
        viewport: 'initial-scale=1.0, width=device-width',
        twitter: '@...',
    },
    menu: [// Use in header and phone menu to generate menu
        { name: 'home', pathname: '/' },
        { name: 'contact', pathname: '/contact' },
    ],
    copyright: {// Use in footer to generate copyright
        author: '...',
        year: 2022,
        link: 'https://...',
    },
    bottomLinks: [// Use in footer to generate bottoms links
        { name: 'terms-and-services', pathname: '/terms-and-services' },
        { name: 'privacy-policy', pathname: '/privacy-policy' },
        { name: 'manage-cookies', pathname: '/manage-cookies' },
    ],
    translation: {// Use by translation module
        languages: ['fr', 'en'],// Languages available
        defaultLanguage: 'fr',// Default language
        fallbackLanguage: 'fr',// Fallback language use if translation is not find
        notFoundError: false,// Show error in console
        locale: {// Local available (use in JS localization and SEO)
            fr: 'fr-fr',
            en: 'en-us',
        },
        flags: {// Use in header to display language selector (/public)
            fr: '/images/flags/fr.png',
            en: '/images/flags/en.png',
        }

    },
}
```
## Redux

## Translation
Translation manager is base on [Laravel Localization](https://laravel.com/docs/9.x/localization). 
I left the use to recreate a javascript version and currently React version base on Hooks and Redux to facilitate the creation and use of translation files.
### How create a translation file
Easy way to create a translation file is [nextCLI](https://github.com/yanntouil/next-ts-starterkit/tree/main/nextCLI#create-translation) but if you want to do it your self:
1. Create a translation typescript file in folder `/translations`
    - Pages in `/translations/pages`
    - Components in `/translations/components/`
    *you can use components prefix like **ui**, **layout**, ... `/translations/components/ui`*
```js
import { TranslationLanguages } from "translations/types"
const translation: TranslationLanguages = {
    language1: {},
    language2: {},
    ...
}
export default translation
```
2. Export your translation into `/translations/index`
```js
export { default as pageMyAmazingPage } from 'translations/pages/my-amazing-page'
export { default as uiMySuperComponent } from 'translations/components/ui/my-super-component'
```
### How use a translation file
Import and use your translation in your page or your component
```jsx
import { useTranslation } from 'app/hooks'
...
const MySuperComponent: FC = () => {
    const { __ } = useTranslation('uiMySuperComponent')// Ref to index export
    ...
    return (
        ...
        <p>{__('my super sentence to translate')}</p>
        ...
        <p>{__('my.dotted.context.to.translate')}</p>
        ...
    )
}
```
### How do a translation
Two way to organize your translation in languages
1. Sentence to translated sentence
```js
...
"my super sentence to translate": "My super sentence translated"
...
```
2. Dotted context (*no depth limit, unleash your creativity :)*)
```js
...
'header': {
    'title': "My super title translated"// use like this header.title
},
...
```
### How use placeholder
You can replace translation placeholder in you translation easily
1. In your translation
```js
...
"welcome": "Welcome :username, how are you?"
...
```
2. In your conmponent
```js
__('welcome', {username: 'John Doe'})// "Welcome John Doe, how are you?"
```
### How pluralization works
Translation can help you translate strings differently based on pluralization rules that you define. Using a `|` character, you may distinguish singular and plural forms of a string.
```js
"how-many": "{0} There is none|[1,19] There are some|[20,*] There are many"
__('how-many', {count: 0})// "There is none"
__('how-many', {count: 2})// "There are some"
__('how-many', {count: 25})// "There are many"

"apples": "{0} There is no apple|{1} There is an apple|[1,*] there are :count apples"
__('apples', {count: 0})// "There is no apple"
__('apples', {count: 1})// "There is an apple"
__('apples', {count: 25})// "there are 25 apples"
transChoice('apples', 25    )// "there are 25 apples"
```
### Difference between magic method and basic method
You can add some dotted context shorcut on magic method and you can change language used on basic method
```jsx
'header': {
    'title': "My super title translated"
},
const { __, trans } = useTranslation('layoutFront.header')// Add context shortcut for magic method
__('title')// "My super title translated"
trans('header.title', {}, 'fr')// "Mon super titre traduit"
```
