[![Netlify Status](https://api.netlify.com/api/v1/badges/1d25df11-0cd2-46a1-a5c1-ed59e202b3a6/deploy-status)](https://app.netlify.com/sites/lucid-kepler-c8b25c/deploys)

[Project link](https://she-codes.netlify.app/)

## SheCodes 2020

I'm focussing this year on learning about accessibility ([thanks to W3C and EdX](https://www.edx.org/course/web-accessibility-introduction)), web performance ([courtesy of smashing magazine and Harry Roberts](https://smashingconf.com/online-workshops/workshops/harry-roberts)), and eleventy ([thanks Andy Bell!](https://piccalil.li/course/learn-eleventy-from-scratch/)), setting out with basic or zero knowledge on each subject beforehand.

This project is a complete overhaul of my existing personal website built in Wordpress. There's lots of features not being used on my old site, a CMS is definitely overkill for what I need and I'm tired of chasing updates to keep the site locked down and secure.

My intention is to improve security, up my accessibility game and start thinking about performance, tooling and testing with a brand new shiny Eleventy site. No doubt I will break, pull apart and put this site back together many times to come.

## Project config

- eleventy
- gulp
- netlify
- sass

## Running locally

- Node is required (^12.13.0)
- Node modules are provided by yarn, run `yarn install`
- Launch server with `yarn start`

Go to http://localhost:8080

### Running production build locally
- Run `yarn run production` to start the production build.
- Run `cd dist && npx serve` to start the server

Go to http://localhost:5000

## Fonts
This project uses custom font subsets with a limited set of glyphs to keep file sizes small. Each font has a `demo.html` file inside the `font-documentation` folder which can be viewed in the browser. The `glyphs & languages` tab lists each available glyph with its unicode.

## Styling
I've decided to run with Andy Bell's [CUBE CSS](https://piccalil.li/cube-css/) to understand it more, drawn by its statement of being `orientated towards simplicity, pragmatism and consistency`.

CUBE CSS works together with [Gorko](https://github.com/hankchizljaw/gorko), a Sass tool that generates utility functions based on a `_config.scss_` file.

## Asset Pipeline

Pipeline automation tasks are handled by gulp.

### Sass
Preprocessed Sass is split out into compressed, merged and minified CSS creating a single `critical CSS` file and `standard CSS` files.

#### CSS reset
This project uses [modern-css-reset](https://github.com/hankchizljaw/modern-css-reset). More information on the reset can be found [here](https://hankchizljaw.com/wrote/a-modern-css-reset/).

#### Critical CSS
Is inlined into the `<head>` and applied to every page. It includes the CSS reset. Page critical CSS is also inlined into the `<head>`.

#### Standard CSS
Is included using a `link` element.

### Images
Images are handled by the eleventy [image plugin](https://www.11ty.dev/docs/plugins/image/). The plugin performs build-time image transformations for both vector and raster images.

#### **imageShortcode**
- Outputs multiple images in 3 widths - `640px`, `1280px` and `1920px` - which are saved directly to the `dist` directory.
- Outputs two formats - `jpeg` and `WebP`.
- Uses image [metadata](https://www.11ty.dev/docs/plugins/image/#sample-return-object) to add `width` and `height` attributes on a `picture` element for proper [aspect ratio mapping](https://developer.mozilla.org/en-US/docs/Web/Media/images/aspect_ratio_mapping).

The generated `picture` element:
- provides a jpeg fallback where `WebP` is not supported
- uses native lazyload.

| Argument | Default | Required | Description                                           |
| -------- | ------- | -------- | ----------------------------------------------------- |
| src      | -       | Y        | Relative path to original image.                      |
| alt      | -       | Y        | Alt text. Set null attr with `""`.                    |
| classes  | ""      | -        | Add CSS classes to the generated `<picture>` element. |
| sizes    | "100vw" | -        | Value for the [sizes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#resolution_switching_different_sizes) attribute. |

To use the shortcode in a nunjucks template or markdown file:
```
{% imageShortcode <src>, <alt>, <classes>, <sizes> %}
```
**NOTE**:
- The comma between arguments is required when using the Nunjucks template engine.
- An error will throw if the alt text is not given.

This example is taken from the `blog template` to generate the feature image:
```
{% imageShortcode latest.data.featureImage, latest.data.featureImageAlt, "latest__image", "(min-width: 62em) 612px, 100vw" %}

Output =>
<picture class="latest__image">
  <source type="image/webp" srcset="/images/aeeca916-640.webp 640w, /images/aeeca916-1280.webp 1280w, /images/aeeca916-1920.webp 1920w" sizes="(min-width: 62em) 612px, 100vw">
<source type="image/jpeg" srcset="/images/aeeca916-640.jpeg 640w, /images/aeeca916-1280.jpeg 1280w, /images/aeeca916-1920.jpeg 1920w" sizes="(min-width: 62em) 612px, 100vw">
      <img src="/images/aeeca916-640.jpeg" width="640" height="360" alt="my image alt text." loading="lazy" decoding="async">
  </picture>
```
## Testing

Plan to implement during first half of 2021.

## Production

The site is hosted on netlify. Production build is updated each time work is merged into the main branch.
