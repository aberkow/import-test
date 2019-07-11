# Dynamic Import Test
A little project to explore dynamic imports. Uses the [reqres.in](https://reqres.in) API to mock responses.

## Usage
To test how environment impacts file size, use either `npm run dev` (also watches files)or `npm run build` to get different file sizes. Then serve from your favorite local server.

## Browser support
This project hasn't been tested with too many browsers yet. But it uses corejs/babel to polyfill as needed according to the browserslistrc file. So it should work with all modern browsers and down to IE11.