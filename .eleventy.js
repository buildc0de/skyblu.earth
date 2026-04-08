module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("CLAUDE.md");

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
    },
  };
};
