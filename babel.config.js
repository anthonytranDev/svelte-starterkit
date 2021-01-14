module.exports = {
  plugins: [
    // enable you nest components using jsx - during tests
    [
      "@babel/plugin-transform-react-jsx",
      { runtime: "automatic", importSource: "svelte-jsx" },
    ],
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
  ],
}
