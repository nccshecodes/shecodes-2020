const path = require('path');
const image = require('@11ty/eleventy-img');

// https://www.11ty.dev/docs/plugins/image/

module.exports = async (src, alt, classes = "", sizes = "100vw") => {
  if(alt === undefined) {
    throw new Error(`Missing \`alt\` on responsive image from: ${src}`);
  }

  let metadata = await image(src, {
    formats: ['webp', 'jpeg'],
    outputDir: "./src/images/responsive",
    urlPath: "/images/responsive/",
    widths: [640, 1280, 1920],
  });

  let lowsrc = metadata.jpeg[0];

  // <picture> easiest way to provide WebP fallbacks https://css-tricks.com/using-webp-images/#using-webp-in-html
  return `<picture class="${classes}">
  ${Object.values(metadata).map(imageFormat => {
    return `<source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`;
  }).join("\n")}
      <img
        src="${lowsrc.url}"
        width="${lowsrc.width}"
        height="${lowsrc.height}"
        alt="${alt}"
        loading="lazy"
        decoding="async"/>
  </picture>`;
}

