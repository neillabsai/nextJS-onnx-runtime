This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install packages:

```bash

yarn

```

First, run the development server:

```bash

yarn dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Config

[Config](next.config.js)

A quick rundown of this config file and story behind it.

The power of CRA is in its `react-scripts`. There are solutions that allow extending the `webpack.config.js` file to roll custom solutions but as of Sept 2022, There is only fledging support for `react scripts v5`. To maintain the usefulness that `react-scripts` working with `nextJS` was the ideal solution as it allows extending its functionally by default.

### Moving on to the `config`

We are pushing two new properties to the config. First being `NodePolyfillPlugin` which is a requirement only for `webpack 5`.

More interesting is the `CopyPlugin` Here we move necessary `WASM` files from the `onnxruntime-web` into the `.next` folder. The `.next` folder is controlled by `nextJS` and requires no manual control from the user.

#### To update this config with you model:

```
{
from:  "./model",
to:  "static/chunks/pages",
},
```

in the `config` file and update the `from` to the path of your `ONNX` model.

After this you can start the server with instructions from the top and in the web console you should be the initialization of the ONNX model logged to the console.
