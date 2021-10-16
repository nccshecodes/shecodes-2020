const path = require('path');
const image = require('@11ty/eleventy-img');

// https://www.11ty.dev/docs/plugins/image/

module.exports = async (featureImage, fallback) => {
	if (featureImage) {
		const metadata = await image(featureImage, {
			formats: ['jpeg'],
			outputDir: './dist/images/',
			urlPath: '/images/',
			widths: [1280],
			filenameFormat: function (_id, src, width, format) {
				const extension = path.extname(src);
				const name = path.basename(src, extension);

				return `${name}-${width}.${format}`;
			},
		});
		return metadata.jpeg[0].url;
	} else {
		return fallback;
	}
};
