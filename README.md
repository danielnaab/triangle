# Triangle Classifier Example

This is a simple Mithril.js example application that, given three lengths, will
identify what kind of triangle it corresponds to.

As a little bonus, if it is a legal triangle an SVG of it is rendered.

## Notes

- This application uses [Mithril.js](https://mithril.js.org) for a simple
unidirectional render flow.
- [big-js](https://www.npmjs.com/package/big-js) is used for
arbitrary-precision decimal arithmetic.
- Mithril's [test framework](https://mithril.js.org/testing.html) is used.
- [Bourbon Bitters](http://bitters.bourbon.io/) SASS styles are used.

## Development

This was developed against node v7.7.4. If using nvm:

```bash
nvm use v7.7.4
```

Install dependencies:

```bash
npm install
```

To run a development server that watches for local changes:

```bash
npm run watch
```

To build a minified distributable:

```bash
npm run build
```

## Running test suite

```bash
npm test
```
