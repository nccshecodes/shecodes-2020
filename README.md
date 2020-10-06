## SheCodes 2020

I'm focussing this year on learning about accessibility (thanks to W3C and EdX), web performance ([courtesy of smashing magazine and Harry Roberts](https://smashingconf.com/online-workshops/workshops/harry-roberts)), and eleventy ([thanks Andy Bell!](https://piccalil.li/course/learn-eleventy-from-scratch/)), setting out with basic or zero knowledge on each subject beforehand.

This project is a complete overhaul of my existing personal website built in wordpress. There's lots of features not being used, a CMS is definitely overkill for what I need and I'm tired of chasing updates to keep the site locked down and secure. I have woken up one morning to find my content gone and a message from the hackers left in its place. So this is a perfect candidate to improve security, turn theory into practice and keep learning.

## Project config

- eleventy

## Running locally

- Node is required (^12.13.0)
- Node modules are provided by yarn, run `yarn install`
- Launch server with `yarn start`

Go to http://localhost:8080

## Images

Static files placed in `src/images/` directory are copied over to the `dist` folder.

## Testing

## Styling

## To update

- site.json - site name and url
- partials/header.html - add logo svg
- \_data/navigation_primary.json - add main navigation links
- partials/meta-info.html and social-share image (png)
