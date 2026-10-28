# Example Web using ESM

> **Status: archived.** Finished on purpose: it is a small reference, not a project.

Link this when someone asks you how to do a page with vanilla JavaScript using
ESM (ECMAScript modules), with no bundler, no framework and no build step.

It is a Random Number Generator: each click shows the average of 50 random numbers from 0 to 99,
so the result clusters around 50.

## What it shows

| File | Does |
|---|---|
| [index.html](./index.html) | loads the app with `<script type="module" src="./app.js">` |
| [app.js](./app.js) | imports from `./utils.js` and wires the button |
| [utils.js](./utils.js) | `export`s three small functions: `randomInt`, `average`, `coolNumber` |
| [main.css](./main.css) | styles |

Things worth knowing:

- Import paths must be **relative and include the extension** (`./utils.js`), as there is no bundler to resolve them.
- Module scripts are deferred automatically, so `<script type="module">` can sit in the `<head>` and still see the page.
- **It will not work if you double-click `index.html`.** Browsers block modules on `file://`, so serve the folder over HTTP.

## Deploy

### GH Pages 🐱

https://ulti.js.org/example-html-css-esm

### Cloudflare Workers 👷‍♀️

https://esm.pages.dev

## Development

Serve the folder with anything that speaks HTTP. If you have [Node.js](https://nodejs.org) installed 👇

```sh
npx live-server .
```

or with Python:

```sh
python3 -m http.server 8000
```

## Licence

Released under the MIT licence, see [license](./license).
