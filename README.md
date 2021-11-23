[![Netlify Status](https://api.netlify.com/api/v1/badges/1d25df11-0cd2-46a1-a5c1-ed59e202b3a6/deploy-status)](https://app.netlify.com/sites/lucid-kepler-c8b25c/deploys)

Project link: [shecodes.dev](https://www.shecodes.dev)

## SheCodes

This project is a complete overhaul of my personal website, previously built in Wordpress. There were lots of features not being used, a CMS is definitely overkill for what I need and I was tired of chasing updates to keep the site locked down and secure.

2020 was spent on learning about accessibility ([thanks to W3C and EdX](https://www.edx.org/course/web-accessibility-introduction)), web performance ([courtesy of smashing magazine and Harry Roberts](https://smashingconf.com/online-workshops/workshops/harry-roberts)), and eleventy ([thanks Andy Bell!](https://piccalil.li/course/learn-eleventy-from-scratch/)), setting out with basic or zero knowledge on each subject beforehand.

I've taken those learnings and put them into a brand new shiny Eleventy site to improve security, up my accessibility game and start thinking about performance, tooling and testing.

No doubt I will break, pull apart and put this site back together many times to come.

## Project config

- [Eleventy](https://www.11ty.dev/)
- [Gulp](https://gulpjs.com/)
- [Netlify](https://www.netlify.com/)
- [Sass](https://sass-lang.com/)

## Installation

This project requires Node (^12.13.0).

To install the project dependencies:

```
yarn install
```

### Running locally

To launch the server:

```
yarn start
```

Go to http://localhost:8080

### Running production build locally

To launch the server using the production build:

```
yarn run production
cd dist && npx serve
```

Go to http://localhost:5000

## Usage

### Blogposts

Content creation guidelines coming soon.

### Fonts

This project uses custom font subsets with a limited set of glyphs to keep file sizes small. Each font has a `demo.html` file inside the [font-documentation](/font-documentation) folder which can be viewed in the browser. The `glyphs & languages` tab lists each available glyph with its unicode.

### Images

Images are handled by the eleventy [image plugin](https://www.11ty.dev/docs/plugins/image/). The plugin performs build-time image transformations for both vector and raster images.

#### Shortcodes

- [image](./src/shortcodes/image/README.md)
- [getSocialImage](./src/shortcodes/social-image/README.md)

### Styling

I've decided to run with Andy Bell's [CUBE CSS](https://piccalil.li/cube-css/) to understand it more, drawn by its statement of being `orientated towards simplicity, pragmatism and consistency`.

CUBE CSS works together with [Gorko](https://github.com/hankchizljaw/gorko), a Sass tool that generates utility functions based on a `_config.scss_` file.

#### CSS reset

This project uses [modern-css-reset](https://github.com/hankchizljaw/modern-css-reset). More information on the reset can be found [here](https://hankchizljaw.com/wrote/a-modern-css-reset/).

### Asset Pipeline

Pipeline automation tasks are handled by gulp.

#### Sass

Preprocessed Sass is split out into compressed, merged and minified CSS creating a single `critical CSS` file and `standard CSS` files.

#### Critical CSS

site.scss

---

The `site.scss` file is inlined into the `<head>` and applied to every page. It includes the CSS reset, design tokens and global styles.

Page critical CSS

---

Any CSS that is required for above-the-fold elements should be considered 'page critical'. These critical styles are broken up into individual CSS files that relate to a corresponding page. This keeps the amount of critical CSS inlined into the head minimal which is better for performance. To add critical CSS to a page:

- add a `<mypage>.scss` file to the `scss` repo
- include this file in the array of `siteCriticalStyles` located in:
  - gulp-tasks > sass.js
- set the `pageCriticalStyles` variable on the corresponding page layout:
  - `{% set pageCriticalStyles = ['css/mypage.css'] %}`

{% set pageStylesheets = ['/css/tester.css'] %}

#### Non-critical CSS

Any non-critical CSS files are included using a `link` element. To add non-critical CSS to a page:

- add a `<mypage-non-critical>.scss` file to the `scss` repo
- set the `pageCriticalStyles` variable on the corresponding page layout:
  - `{% set pageCriticalStyles = ['/css/mypage-non-critical.css'] %}`

**NOTE** The path to the file begins with a `/` so that the url is relative to the root of the project.

## Testing

### Linting and code formatting

Formatting is managed by [Prettier](https://prettier.io/).

Code-quality is managed by [ESLint](https://eslint.org/) and [Stylelint](https://stylelint.io/).

### Accessibility

Github action workflow `pa11y.yml` is triggered on each new PR. It runs CI accessibility tests against urls taken from an auto generated `sitemap.xml` managed by [pa11y](https://github.com/pa11y/pa11y-ci).

#### Note

Automated accessibility testing does not catch all errors. Manual testing is required also.

### Typechecking

Typescript to be implemented.

### Unit Tests

Testing framework to be implemented.

### Visual

To be implemented

## Production

The site is hosted on netlify. Production build is updated each time a pull request is merged into the main branch.
