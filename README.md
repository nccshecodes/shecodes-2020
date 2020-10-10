## SheCodes 2020

I'm focussing this year on learning about accessibility ([thanks to W3C and EdX](https://www.edx.org/course/web-accessibility-introduction)), web performance ([courtesy of smashing magazine and Harry Roberts](https://smashingconf.com/online-workshops/workshops/harry-roberts)), and eleventy ([thanks Andy Bell!](https://piccalil.li/course/learn-eleventy-from-scratch/)), setting out with basic or zero knowledge on each subject beforehand.

This project is a complete overhaul of my existing personal website built in Wordpress. There's lots of features not being used, a CMS is definitely overkill for what I need and I'm tired of chasing updates to keep the site locked down and secure. Intention is to improve security, up my accessibility game and start thinking about performance.

## Project config

- eleventy
- gulp
- sass

## Running locally

- Node is required (^12.13.0)
- Node modules are provided by yarn, run `yarn install`
- Launch server with `yarn start`

Go to http://localhost:8080

## Asset Pipeline

Pipeline automation tasks are handled by gulp.

### Styling
Preprocessed Sass is split out into compressed, merged and minified CSS creating a single `critical CSS` file and `standard CSS` files.

#### CSS reset
This project uses a [modern-css-reset](https://github.com/hankchizljaw/modern-css-reset). More information on the reset can be found [here](https://hankchizljaw.com/wrote/a-modern-css-reset/).

#### Critical CSS
Is inlined into the `<head>` and applied to every page. It includes the CSS reset. Page critical CSS is also inlined into the `<head>`.

#### Standard CSS
Is included using a `link` element.

#### Fonts
This project uses custom font subsets with a limited set of glyphs to keep file sizes small. Each font has a `demo.html` file inside the `font-documentation` folder which can be viewed in the browser. The `glyphs & languages` tab lists each available glyph with its unicode.

### Images

Static files placed in `src/images/` directory are copied over to the `dist` folder.

## Images

Static files placed in `src/images/` directory are copied over to the `dist` folder.

## Testing

## TODO

- update favicon and social-share image (png)
