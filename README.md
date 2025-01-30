# Mago Playground

This repository contains a simple React web app that demonstrates Mago’s PHP linter and formatter in the browser. It allows you to play with Mago’s capabilities without having to install anything locally.

## About Mago

[Mago](https://github.com/carthage-software/mago) is a toolchain for formatting, linting, and analyzing PHP code. The goal is to provide a robust, modern approach to PHP language analysis.

## Features

- **Browser-based**: Instantly run Mago’s linter, and formatter from a web page.
- **Live Examples**: Switch between preloaded code samples or paste your own snippet for quick tests.
- **Configurable Linter**: Enable or disable specific plugins and rules at runtime.

## Getting Started

1. **Clone** the repo:

   ```bash
   git clone https://github.com/carthage-software/mago-playground.git
   cd mago-playground
   ```

2. **Install** dependencies:

   ```bash
    npm install
   ```

3. **Start** the development server:

   ```bash
   npm start
   ```

## How It Works

- _WASM Integration_: The project uses the compiled WebAssembly build of Mago for all PHP analysis.
- _React Frontend_: A simple React UI allows you to switch versions, manage linter rules, and preview the formatted code.

## Deployment

The project is hosted on GitHub Pages and is automatically deployed on every push to the `main` branch.

## License

Mago Playground is licensed under either of

- MIT License (MIT) - see [LICENSE-MIT](./LICENSE-MIT) file for details
- Apache License, Version 2.0 (Apache-2.0) - see [LICENSE-APACHE](./LICENSE-APACHE) file for details

at your option.
