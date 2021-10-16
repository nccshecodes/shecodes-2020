const dateFilter = require('./src/filters/date-filter.js');
const isoDateFilter = require('./src/filters/isodate-filter.js');
const image = require('./src/shortcodes/image/image.js');
const socialImage = require('./src/shortcodes/social-image/socialImage.js');
const mdIt = require('markdown-it');
const mdDeflist = require('markdown-it-deflist');
const mdAttrs = require('markdown-it-attrs');

module.exports = (config) => {
	// Set directories to pass through to the dist folder
	config.addPassthroughCopy('./src/fonts/');
	config.addPassthroughCopy('./src/images/static/');

	// add filters
	config.addFilter('dateFilter', dateFilter);
	config.addFilter('isoDateFilter', isoDateFilter);

	// Shortcodes
	config.addNunjucksAsyncShortcode('image', image);
	config.addNunjucksAsyncShortcode('getSocialImage', socialImage);

	// Transforms
	const htmlMinTransform = require('./src/transforms/html-min-transform.js');
	const isProduction = process.env.NODE_ENV === 'production';

	// Only minify HTML if we are in production because it slows builds _right_ down
	if (isProduction) {
		config.addTransform('htmlmin', htmlMinTransform);
	}

	config.addCollection('cv_awards', (collection) => {
		return collection.getFilteredByGlob('./src/awards/*.md');
	});

	config.addCollection('blog', (collection) => {
		return [...collection.getFilteredByGlob('./src/posts/**/*.md')];
	});

	config.addCollection('cv_education', (collection) => {
		return collection.getFilteredByGlob('./src/education/*.md');
	});

	config.addCollection('cv_jobs', (collection) => {
		return collection.getFilteredByGlob('./src/jobs/*.md');
	});

	config.addCollection('cv_talks', (collection) => {
		return collection.getFilteredByGlob('./src/talks/*.md');
	});

	config.addCollection('tagList', (collection) => {
		const tagsSet = new Set();
		collection.getAll().forEach((item) => {
			if (!item.data.tags) return;
			item.data.tags
				.filter((tag) => !['all'].includes(tag))
				.forEach((tag) => tagsSet.add(tag));
		});
		return Array.from(tagsSet).sort();
	});

	config.addCollection('sitemap', (collection) => {
		return collection.getAll().filter((item) => item.url !== false);
	});

	config.setUseGitIgnore(false);

	// customise and extend markdown
	// mdAttr - add ids and classes
	// mdDefList - create description lists
	const options = {
		html: true,
	};

	const markdownLib = mdIt(options)
		.use(mdAttrs, {
			allowedAttributes: ['class', 'id', /^aria.*$/],
		})
		.use(mdDeflist);

	config.setLibrary('md', markdownLib);

	return {
		markdownTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		dir: {
			input: 'src',
			output: 'dist',
		},
	};
};
