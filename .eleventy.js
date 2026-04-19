module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("CLAUDE.md");

  eleventyConfig.addFilter("where", (arr, key, val) =>
    (arr || []).filter(i => i.data[key] === val)
  );

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
    },
  };
};
