# NextCLI
NextCLI est un custom node cli developpé pour simplifier la création de nouveau fichier.

## Launch CLI
```
$ node nextCLI
```
## Create page
Vous avez la posibilité de créer une nouvelle page statique ou dynamique simplement en séléctionnant l'option `New page`

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



