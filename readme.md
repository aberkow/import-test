# Dynamic Import Test
A little project to explore dynamic imports. Uses the [reqres.in](https://reqres.in) API to mock responses.

## Usage
To test how environment impacts file size, use either `npm run dev` (also watches files)or `npm run build` to get different file sizes. Then serve from your favorite local server.

### File names
I've been thinking about how this might work in a docker container. The cleanwebpack plugin doesn't seem to work so I decided to come up with a different idea. 

in a development situation with webpack watch running, it doesn't seem to matter too much if the filenames are hashed or not wrt loading assets quickly. in the context of docker volumes it does though (bc they persist the data). so in this case, during development filenames are kept simple. to assist with cache busting, in production, the content hash is added to the filename.

## Browser support
This project hasn't been tested with too many browsers yet. But it uses corejs/babel to polyfill as needed according to the browserslistrc file. So it should work with all modern browsers and down to IE11.