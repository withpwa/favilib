# Favilib

[favicons]: https://github.com/itgalaxy/favicons
[Create Examples]: ./test/createExamples.mjs
[Github]: https://github.com/withpwa/favilib/issues
[Releases]: https://github.com/ACP-CODE/astro-favicons/releases
[astro-favicons]: https://www.npmjs.com/package/astro-favicons
[W3C]: https://www.w3.org/TR/appmanifest/#x_localized-members
[Manifest]: ./src/types/manifest/index.ts
[LICENSE]: ./LICENSE

[![CI](https://github.com/withpwa/favilib/actions/workflows/ci.yml/badge.svg)](https://github.com/withpwa/favilib/actions/workflows/ci.yml)
![NPM Version](https://img.shields.io/npm/v/favilib)

An enhanced Node.js module that generates favicons and all necessary assets for Progressive Web Apps (PWAs). Install through NPM with:

```
npm i favilib
```

Looking for help? Start with our [Create Examples] guide.

## Acknowledgements

Thanks to the [favicons] open-source project for laying the foundation of this package.

## Changes and New Features

- **Redesigned API:** Built for [astro-favicons], it can also be used separately under node.js module
- **Advanced [W3C] Manifest Support:** Compatible with extended fields as defined in [Manifest].
- **New PWA Capabilities:**
  - Support for `themes`, `screenshots`, and `share_target`.
  - Enhanced handling of `file_handlers`, `protocol_handlers`, and localized fields (`*_localized`).

## License

This project is licensed under the MIT License - see the [LICENSE] file for details.
