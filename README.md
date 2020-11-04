# nuxt-floating-prompt-module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Medium Badge](https://badgen.net/badge/icon/medium?icon=medium&label)](https://medium.com/@sandoche)
[![Twitter: sandochee](https://img.shields.io/twitter/follow/sandochee.svg?style=social)](https://twitter.com/sandochee)

⚡️ Invite your users to support you on product hunt (or any other website) with this floating prompt Nuxt.js module

This library adds [Producthunt-floating-prompt](https://github.com/sandoche/Producthunt-floating-prompt) to Nuxt.js

## ✨ Demo

Check out the demo in these websites:
- https://undesign.learn.uno
- https://curatedstacktemplate.learn.uno/
- https://producthuntprompt.learn.uno/ (using the standard floating prompt without Nuxt.js)


## 📖 Setup

1. Add `nuxt-floating-prompt-module` dependency to your project

```bash
yarn add nuxt-floating-prompt-module # or npm install nuxt-floating-prompt-module
```

2. Add `nuxt-floating-prompt-module` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-floating-prompt-module',

    // With options
    ['nuxt-floating-prompt-module', { /* module options */ }],
  ],

    // or use options likes this
    floatingPrompt: {
      name: 'My super product',
      url: 'https://www.producthunt.com/posts/my-super-product',
      text: 'My customized text', // default: Hi, do you like ${name} ? Don't forget to show your love on Product Hunt 🚀
      buttonText: 'My customized button', // default: ${name} on Product Hunt
      width: '500px', // default: 300px
      bottom: '32px', // default: 32px - postition from the bottom
      right: 'unset', // default: 32px - position from the right
      left: '32px', // default: unset - position from the left
      colorOne: 'red', // default: #da552f - first color of the gradient
      colorTwo: 'blue', // default: #ea8e39 - second color of the gradient
      saveInCookies: false, // default: true - if true it will use localStorage to appear only once
      target: '_parent' // default: '_blank' - target of the link
    }
}
```

## ⚙️ Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## ⭐️ Show your support

Please ⭐️ this repository if this project helped you!

<a href="https://www.patreon.com/sandoche">[![patreon.png](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/sandoche)</a>

## 🍺 Buy me a beer

If you like this project, feel free to donate:

- PayPal: https://www.paypal.me/kanbanote
- Bitcoin: 19JiNZ1LkMaz57tewqJaTg2hQWH4RgW4Yp
- Ethereum: 0xded81fa4624e05339924355fe3504ba9587d5419
- Monero: 43jqzMquW2q989UKSrB2YbeffhmJhbYb2Yxu289bv7pLRh4xVgMKj5yTd52iL6x1dvCYs9ERg5biHYxMjGkpSTs6S2jMyJn
- Motive: MOTIV-25T5-SD65-V7LJ-BBWRD (Get Motive Now: https://motive.network)

## 📄 License

[MIT License](./LICENSE)

Copyright (c) Sandoche Adittane

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-floating-prompt-module/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-floating-prompt-module
[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-floating-prompt-module.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-floating-prompt-module
[license-src]: https://img.shields.io/npm/l/nuxt-floating-prompt-module.svg
[license-href]: https://npmjs.com/package/nuxt-floating-prompt-module
