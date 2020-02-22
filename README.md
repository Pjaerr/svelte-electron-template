# Svelte + Electron App Template

A simple template for an Electron desktop app that uses Svelte as its renderer.

## Getting Started

1. Clone this repository

2. Run `npm install`

3. Run `npm start`


### Notes
Running `npm start` will build the Svelte app and then tell Electron to start the application using `main.js` as its entry point.

Running `npm run package` will use the **electron-packager** npm package to build the electron app for your current platform. You can read more about it and how to configure it [here](https://github.com/electron/electron-packager).