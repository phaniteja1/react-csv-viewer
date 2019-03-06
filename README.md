# react-hooks-giphy

[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]
![last commit][last-commit-image]
![Repo size][repo-size-image]
![Github Top Language][language-image]

Super easy Giphy API support for ReactJS

![Alt Text](https://media.giphy.com/media/3o7qDXzmWyT3BgcyGc/giphy.gif)

## Dependencies

Needs `axios` as a dependency

###

```bash
npm install --save axios
```

### yarn

```bash
yarn add axios
```

## Install

> **Note:** Make sure that you have installed the correct version of `react(>= v16.8.0)` and `react-dom(>= v16.8.0)`.

### npm

```bash
npm install --save react-hooks-giphy
```

### yarn

```bash
yarn add react-hooks-giphy
```

## Demo

[Live Show](https://codesandbox.io/s/v8k2yw0pz0)

## Usage

### import Giphy

```js
import Giphy from "react-hooks-giphy";
```

### Get random gif

```js
<Giphy />
```

### Get gif with a `tag`

```js
<Giphy tag="happy" />
```

### Pass in `triggers` to refresh with a new gif

```js
<Giphy triggers={[triggers]} />
```

## Configuring Options

### Show gif title

```js
const config = {
  title: true
};
<Giphy {...config} />;
```

## Example

```js
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Giphy from "react-hooks-giphy";

function App() {
  const [flag, triggerFlag] = useState(false);
  return (
    <div className="App">
      <h1>React Hooks Giphy</h1>
      <p> Random Gif </p>
      <Giphy />
      <p> Happy Gif </p>
      <Giphy tag="happy" />
      <p> Happy Gif with a trigger to refresh Gif</p>
      <Giphy tag="happy" triggers={[flag]} />
      <button onClick={() => triggerFlag(!flag)}>Get another gif</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

## Contribution

### Make a PR

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/phaniteja1/react-hooks-giphy)

## Development

> Node >= v8 LTS

- Clone the project to local disk
- `npm install`
- `npm start`

## License

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

[npm-image]: https://img.shields.io/npm/v/react-hooks-giphy.svg?style=flat-square
[npm-url]: https://npmjs.com/package/react-hooks-giphy
[download-image]: https://img.shields.io/npm/dm/react-hooks-giphy.svg?style=flat-square
[download-url]: https://npmjs.com/package/react-hooks-giphy
[language-image]: https://img.shields.io/github/languages/top/phaniteja1/react-hooks-giphy.svg?style=flat
[repo-size-image]: https://img.shields.io/github/repo-size/phaniteja1/react-hooks-giphy.svg?style=flat
[last-commit-image]: https://img.shields.io/github/last-commit/phaniteja1/react-hooks-giphy.svg?style=flat
