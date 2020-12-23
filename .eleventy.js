const dateFilter = require('./src/filters/date-filter.js');
const mdIt = require('markdown-it');
const mdDeflist = require('markdown-it-deflist');
const mdAttrs = require('markdown-it-attrs');

module.exports = (config) => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy("./src/fonts/");

  // add filters
  config.addFilter('dateFilter', dateFilter);

  // Transforms
  const htmlMinTransform = require('./src/transforms/html-min-transform.js');
  const isProduction = process.env.NODE_ENV === 'production';

  // Only minify HTML if we are in production because it slows builds _right_ down
  if (isProduction) {
    config.addTransform('htmlmin', htmlMinTransform);
  }

  config.addCollection("awards", (collection) => {
    return (collection.getFilteredByGlob("./src/awards/*.md")).reverse();
  });

  config.addCollection("blog", (collection) => {
    return [...collection.getFilteredByGlob("./src/posts/*.md")].reverse();
  });

  config.addCollection("education", (collection) => {
    return (collection.getFilteredByGlob("./src/education/*.md")).reverse();
  });

  config.addCollection("jobs", (collection) => {
    return (collection.getFilteredByGlob("./src/jobs/*.md")).reverse();
  });

  config.addCollection("talks", (collection) => {
    return (collection.getFilteredByGlob("./src/talks/*.md")).reverse();
  });

  config.setUseGitIgnore(false);

  // customise and extend markdown
  // mdAttr - add ids and classes
  // mdDefList - create description lists
  const options = {
    html: true
  }

  const markdownLib = mdIt(options)
    .use(mdAttrs, {
      allowedAttributes: ['class', 'id', /^aria.*$/, ]
    })
    .use(mdDeflist);

  config.setLibrary('md', markdownLib);

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
