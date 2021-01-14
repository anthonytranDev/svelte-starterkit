# Svelte Starterkit

## Features

- Development and Build Tool - [Snowpack](https://www.snowpack.dev/)
- Testing Tool - [Jest](https://jestjs.io/en/)
  - [@testing-library](https://testing-library.com/)
  - [svelte-jsx](https://github.com/kenoxa/svelte-jsx#readme) (is needed to test nested components)
- Styling - [Prettier](https://prettier.io/)
- Linting - [ESlint](https://eslint.org/)

## Available Scripts

### Starting Application

`npm start`

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### Building

`npm run build`

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.json` config file.

### Unit Testing

`npm test`

Note that Svelte is still pretty new to the testing scene, as of writing this I've had to place a workaround that combats the issue of testing nested components with JSX

### Styling

`npm run style`

Feel free to change the styling however you see fit.

If you are using VS Code, I'd recommend installing the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), to style your code on save

### Linting

`npm run lint`

Same as [Styling](#styling), please add your own person touch to the rule changes. Note that you may need to consider how changing the rules may affect _Prettier_. I'd recommend sticking to using extensions, just so that the rules applied don't conflict with one another.
