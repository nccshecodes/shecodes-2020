module.exports = (config) => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy("./src/fonts/");

  // Transforms
  const htmlMinTransform = require('./src/transforms/html-min-transform.js');
  const isProduction = process.env.NODE_ENV === 'production';

  // Only minify HTML if we are in production because it slows builds _right_ down
  if (isProduction) {
    config.addTransform('htmlmin', htmlMinTransform);
  }

  config.addCollection("blog", (collection) => {
    return [...collection.getFilteredByGlob("./src/blog/*.md")].reverse();
  });

   config.addCollection("jobs", (collection) => {
    return (collection.getFilteredByGlob("./src/jobs/*.md")).reverse();
  });

  config.setUseGitIgnore(false);

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
