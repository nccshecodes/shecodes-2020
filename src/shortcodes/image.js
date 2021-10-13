const path = require('path');
const image = require('@11ty/eleventy-img');

// https://www.11ty.dev/docs/plugins/image/

module.exports = async (src, alt, classes = '', sizes = '100vw') => {
	if (alt === undefined) {
		throw new Error(`Missing \`alt\` on responsive image from: ${src}`);
	}

	try {
		const metadata = await image(src, {
			formats: ['webp', 'jpeg'],
			outputDir: './dist/images/',
			urlPath: '/images/',
			widths: [640, 1280, 1920],
			filenameFormat: function (_id, src, width, format) {
				const extension = path.extname(src);
				const name = path.basename(src, extension);

				return `${name}-${width}.${format}`;
			},
		});

		const lowsrc = metadata.jpeg[0];
		const highsrc = metadata.jpeg[metadata.jpeg.length - 1];

		// <picture> easiest way to provide WebP fallbacks https://css-tricks.com/using-webp-images/#using-webp-in-html
		return `<picture class="${classes}">
  		${Object.values(metadata)
				.map((imageFormat) => {
					return `<source type="${
						imageFormat[0].sourceType
					}" srcset="${imageFormat
						.map((entry) => entry.srcset)
						.join(', ')}" sizes="${sizes}">`;
				})
				.join('\n')}
			<img
				src="${lowsrc.url}"
				width="${highsrc.width}"
				height="${highsrc.height}"
				alt="${alt}"
				loading="lazy"
				decoding="async"
			/>
  	</picture>`;
	} catch (error) {
		console.log(error.message);
		console.log(error.stack);
		return null;
	}
};
