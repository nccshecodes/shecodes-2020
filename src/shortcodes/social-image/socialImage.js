const path = require('path');
const image = require('@11ty/eleventy-img');
const siteData = require('../../../src/_data/site.json');

// https://www.11ty.dev/docs/plugins/image/

module.exports = async (ogImage, ogImageAlt) => {
	const fallback = siteData.socialImageFallback;

	if (ogImage) {
		const metadata = await image(ogImage, {
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
		return `
			<meta property="og:image" content="${siteData.url}${metadata.jpeg[0].url}" />
			<meta property="og:image:alt" content="${ogImageAlt}" />
		`;
	} else {
		return `
			<meta property="og:image" content="${siteData.url}${fallback}" />
			<meta property="og:image:alt" content="${siteData.description}" />
		`;
	}
};
