const { dest, src } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass'));

// Flags whether we compress the output etc
const isProduction = process.env.NODE_ENV === 'production';

// An array of outputs that should be sent over to includes
// eg. const criticalStyles = ['critical.scss', 'home.scss', 'page.scss', 'work-item.scss'];
const siteCriticalStyles = [
	'site.scss',
	'blog.scss',
	'cv.scss',
	'home.scss',
	'post.scss',
	'tag.scss',
];

// Takes the arguments passed by `dest` and determines where the output file goes
const calculateOutput = ({ history }) => {
	// By default, we want a CSS file in our dist directory, so the
	// HTML can grab it with a <link />
	let response = './dist/css';

	// Get everything after the last slash
	const sourceFileName = /[^/]*$/.exec(history[0])[0];

	// If this is critical CSS though, we want it to go
	// to the _includes directory, so nunjucks can include it
	// directly in a <style>
	if (siteCriticalStyles.includes(sourceFileName)) {
		response = './src/_includes/css';
	}

	return response;
};

// The main Sass method grabs all root Sass files,
// processes them, then sends them to the output calculator
const sassOutput = () => {
	return src('./src/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(
			cleanCSS(
				isProduction
					? {
							level: 2,
					  }
					: {}
			)
		)
		.pipe(dest(calculateOutput, { sourceMaps: !isProduction }));
};

module.exports = sassOutput;
