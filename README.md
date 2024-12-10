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

An enhanced Node.js module for generating favicons and assets required for Progressive Web Apps (PWAs). It supports the latest standards from `w3.org`, `Edge`, `Yandex`, and `Windows Tile` (Manifest), providing a unified interface for both CommonJS and ES modules.

## Features

- **Overhauled API:** Built for [astro-favicons], but can also be used independently as a Node.js module.
- **Advanced Manifest Support:** Full compatibility with the latest [W3C] Manifest standard, including extended fields as outlined in the [Manifest].
- **Enhanced PWA Capabilities:**
  - Support for `themes`, `screenshots`, and `share_target`.
  - Advanced handling of `file_handlers`, `protocol_handlers`, and localized fields (`*_localized`).

## Installation

Install via npm:

```
npm i favilib
```

## Usage

Looking for help getting started? Check out the [Create Examples] guide for step-by-step instructions.

## Acknowledgements

This project is based on the [favicons] open-source library, originally licensed under the MIT License. Significant modifications have been made, including:

- Bug fixes
- API redesign
- New features (e.g., manifest expansion, screenshots support and themes)

Thanks to the original maintainers for their work!

## License

This project is licensed under the MIT License - see the [LICENSE] file for details.
