# use-mediaquery

React custom hook for `matchMedia`, allowing you to respond to media queries.

## Installation

```
npm install use-mediaquery
yarn add use-mediaquery
```

## Usage

```js
import React from "react";
import useMediaQuery from "use-mediaquery";

const Component = () => {
  const matches = useMediaQuery("(min-width: 40em)");

  <p>
    Matches? <strong>{matches.toString()}</strong>
  </p>;
};
```

## Example

https://codesandbox.io/s/o4n5mxqwvq

## License

MIT
