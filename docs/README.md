# React, Flow, Snowpack, @benchristel/taste

This template repo lets you quickly get a
[jamstack](https://jamstack.org/) frontend up and running
using a set of technologies chosen for simplicity and fast
feedback.

How fast is fast? [UX research says 400 milliseconds is about as long as you can wait without feeling like you're waiting](https://github.com/benchristel/benchristel.github.io/wiki/DohertyThreshold). Flow (the typechecker) and Taste (the test framework) can check your code for mistakes in under 400ms.

These instructions assume you have `yarn` and `node` installed.

## Setup

1. Click the [**"Use this template"**](https://github.com/benchristel/react-flow-snowpack-taste/generate) button on GitHub to create a new project based on this template repo.
1. Clone the repo.
1. Change the package name, author, and license in `package.json`, and the `<title>` and favicon in `index.html`.

## Dev Commands

| command | effect |
| ------- | ------- |
| **yarn&nbsp;dev** | serves the app on port 8080 and opens it in your default browser |
| **yarn&nbsp;build** | builds the app into the `docs` dir (the strange choice of directory name ensures you can deploy on GitHub Pages) |
| **yarn&nbsp;flow** | typechecks your code |

## Running Tests

Tests run automatically in the browser on each page load,
and the page reloads whenever you change a source file.

See [@benchristel/taste](https://npmjs.com/package/@benchristel/taste) for more info about the test framework.

## Support

If you run into problems, or you find simple ways to improve
the development experience, please let me know by opening
an issue on this repo.

## Known Issues

The dev server crashes sometimes (when you rename a JS file? TODO: figure out exactly what the trigger is).
