# NextCLI
NextCLI is a custom node cli developed to simplify the creation of new files.

## Summary
1. [Launch CLI](#launch-cli)
2. [Create page](#create-page)
3. [Create component](#create-component)
4. [Create helper](#create-helper)
5. [Create translation](#create-translation)
6. [Create Style](#create-style)
7. [Naming convention](#naming-convention)
8. [Config](#config)

## Launch CLI
```
$ node nextCLI
What would you like to do (Use arrow keys)
> New page
  New component
  New helper
  New translation
  New Style
  Exit
```
## Create page
You have the possibility to create a new static or dynamic page simply by selecting the option `New page`

### Select type of page
```
Which kind of page would you like to create
> Static page
  Dynamic page
```
### Select options
```
Options : (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)
>( ) With translation
 ( ) With module styles
 ( ) With SEO
```
#### With translation:
Creates a translation file corresponding to your page, add it to the index file named `pageNameOfPage`, `NameOfPage` being the name in pascal case that you have chosen. The hook `useTranslation` will also be imported and the function `__` created into page component.

#### With module styles:
Creates a module styles file corresponding to your page, it will named `name-of-page.module.scss` and it will contain Sass abstract import (variables, mixins and functions). `styles` will also be imported into your page component.

#### With SEO:
With SEO is in my task list come back later to know more about this option.

### Select options
```
data Fetching (Use arrow keys)
> none
  getServerSideProps
  getStaticProps
```

#### getServerSideProps:
Add getServerSideProps into your page component with basic code to fetch data and return props.

#### getStaticProps:
Add `getStaticProps` into your page component with basic code to fetch data and return props. If your page is dynamic, it will also add `getStaticPaths` with basic code to fetch data and return paths

### Page name
```
Page name : _
```
Page name must be in kebab case in case of static page `my-super-page`, or in case of dynamic page the param between brackets `[slug]`. You can also incude the path like `posts/[category]/[id]` (dynamic), `contact/send-mail` (static).   
I was very rigid on the naming rules to avoid errors :
- Dynamic page and dynamic folder: **camel case between brackets**
- Static page and static folder : **lower kebab case**

### After that
```
Page name : my-super-page

Page my-super-page has been created in ./pages/my-super-page.tsx
Translation pageMySuperPage has been created in ./translations/pages/my-super-page.ts and added in index
Page module styles my-super-page has been created in ./pages/my-super-page.module.scss

Would you like to create an other page (Y/n)
```
A validation message will inform you for each files created, in case one of the files has already been created, a red message will inform you and if it is the page component the creation will be directly stopped.

## Create component
You have the possibility to create a new component simply by selecting the option New component
### Select type of componnent
```
Which kind of components would you like to create (Use arrow keys)
> UI
  Pages
  Layout
```

### Select options
```
Options : (Press <space> to select, <a> to to&ggle all, <i> to invert selection, and <enter> to proceed)
>( ) With translation
 ( ) With module styles
```
- With translation : Creates a translation file corresponding to your component and add `__` from `UseTranslation` hook with component dotted index.
- With module styles : Creates a styled module and import into your component in `styles`.

### Componnent name
```
Componnent name : _
```
You must specified the name before file creation while respecting the naming convention : 
Component name in pascal case prefixed by type, you can add a path to prefix your component and organize it into folder.
- Form/Input (type ui) => `uiFormInput`
- Header (type layout) => `layoutHeader`

Type `page` will be a little bit different if you want to create a page component for your contact page, use page name as a path :
- contact/Form : Form component for contact page
- dashbord/posts/[postId]/update/Form : Form component for update page in dashbord/... path

*With type page : Page and path/page must respect page convention and component, component convention*

### After that
```
Name : MySuperComponent

Component MySuperComponent has been created in ./components/ui/MySuperComponent.tsx and added in index
Translation uiMySuperComponent has been created in ./translations/components/ui/MySuperComponent.ts and added in index

Would you like to create an other component (Y/n)
```
After that your component will be created and added into the type index as a named export.

## Create helper
You have the possibility to quickly create indexed helper with option `New Helper`
### Select type of helper
```
 Which kind of helper would you like to create (Use arrow keys)
> Function
  Arrow: () => {}
  Short arrow: () => true
  Constant
```
You can select one of the four kind of helper :
- Function : Classic function
- Arrow : Classic arrow function
- Short arrow : Arrow function with direct return
- Constant : Classic constant déclaration

### Helper name
```
Helper name : _
```
You must specified the name before file creation while respecting the naming convention :
- Function : camelCase or PascalCase
- Constant : camelCase or upper snake case (no constraint for PascalCase)

After that your helper will be created and indexed in the helper root folder to be quickly accessible into your pages and components.

## Create translation
You have the possibility to quickly create indexed translations with option `New translation`.
### Select type of translation
```
Which kind of translation would you like to create (Use arrow keys)
> Page
  Component
```
If you select `Component` you will also select the component type after that.

### Component or page name
```
Page name : _
```
You must specified the name before file creation while respecting the naming convention :
- Dynamic page and/or dynamic path: **camel case between brackets**
- Static page and/or static path : **lower kebab case**
- Component : **pascal case** (path also)

After that your translation will be created corresponding to your page or your component and will be indexed.
The translation dotted index will respect the following convention :
- Static page : page name in pascal case prefixed by `page` (include path)
  - my-amazing-page => `pageMyAmazingPage`
  - more/contact => `pageMoreContact`
- Dynamic page : The same convention as for static, brackets will be removed
  - posts/[category]/[post] => `pagePostsCategoryPost`
- Component : component name in pascal case prefixed by type (include path)
  - Form/Input (type ui) => `uiFormInput`
  - Header (type layout) => `layoutHeader`

## Create style
You have the possibility to create styled module for you page or your component and some mixins / functions in SASS very fast and indexed in your framework. Just select the option `New styles`.

### Select type of style
```
Which kind of style would you like to create (Use arrow keys)
> Page module styles
  Component module styles
  Mixin
  Function
```
### Page and Component module styles
```
Page name : _
```
You must specified the name before file creation while respecting the naming convention :
- Dynamic page and/or dynamic path: **camel case between brackets**
- Static page and/or static path : **lower kebab case**
- Component : **pascal case** (path also)
After that your styled module will be created corresponding to your page or your component, it will named `name.module.scss` and will contain Sass abstract import (variables, mixins and functions). All you have to do is import module in your page or your component to use it `import styles from '...'`. *If i have enough time, i will automate the import but it is far from being a priority*

### Mixins or functions
```
Mixin name : _
```
You must specified the name before file creation while respecting the naming convention :
- Function and mixins : **lower kebab case or lower snake case** (path also)
You can add also folder path like `my-path/my-mixin` if you want to organize files in tree structure. After that your mixin or your function will be created and added into the SASS index to be accessible every where.

## Naming convention
It is very important to respect naming convention, it's easy but regex won't let you past name without.

### Page
  - Static page must be in lower kebab case
  - Dynamic page (param) must in camel case and between two brackets
  - Each pages can include a path (static and/or dynamic)
```
my-super-page
posts/[category]
posts/[category]/update
posts/[category]/[postId]
...
```

- Component 
  - Component must be in pascal case
  - Component can be prefixed by a parent component using the path
  - Page components must used page as a path
```
// Type layout
Header
Frontend/Header
// Type ui
Modal
Modal/Backdrop
// Type page
posts/add/Form
posts/[category]/update/For
posts/[category]/[postId]/update/Form
...
```

- Translation
  - Translation are related to a page or a component
  - Translation respect page or component naming convention
  - Translation dotted index will be prefixed by `page` or `component type`
```
// Page to indexed dotted
my-amazing-page => pageMyAmazingPage
posts/[category]/update => pagePostsCategoryUpdate
// Component ui, layout to indexed dotted
Modal => uiModal
Modal/Backdrop => uiModalBackdrop
// Component page to indexed dotted
posts/add/Form => pagesPostsAddForm
posts/[category]/update/Form => pagesPostsCategoryUpdateForm
...
```

- Helpers
  - Function must be in camelCase or PascalCase
  - Constant must be in camelCase or upper snake case (no constraint for PascalCase)

- Styles
  - Styled Module must respect the related page or component naming convention
  - Mixins and functions must be in lower kebab case or lower snake case

If you respect the basic JS and CSS convention everything must be easy, but if you want to do some exotic code :) don't worry just open nextCLI/helper.cjs and change or clear regex.

## Config
The basic configuration represents my own organization, but if you want to change the folder tree, it's up to you to edit the config file.

### Components
```
{
    "components": {
        "folder": "components",// Components folder
        "types": [
            "ui", "layout", "pages"// Components types (pages is a key word use to specify : components related to a page)
        ]
    },
    "pages": {
        "folder": "pages"// Page folder
    },
    "helpers": {
        "folder": "app/helpers"// Helpers folder 
    },
    "styles": {
        "folders": {
            "mixins": "styles/mixins",// Mixins SASS folder
            "functions": "styles/functions"// Functions SASS folder
        },
        "variables": "styles/variables"// Variable SASS file imported in each styled module
    },
    "translations": {
        "folders": {
            "base": "translations",// Root translation folder
            "components": "components",// Component translation folder
            "pages": "pages"// Pages translation folder
        },
        "languages": ["fr", "en"]// Languages use to generate translations
    }
}

```
