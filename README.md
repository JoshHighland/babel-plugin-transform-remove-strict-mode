# babel-plugin-transform-remove-strict-mode-tags

remove "use strict" directive

#u can use tags 'no use strict' to remove strict mode

## Installation

```sh
$ npm install babel-plugin-transform-remove-strict-mode-tags
```

## Usage

### Via `.babelrc` (Recommended)
**.js**
```js
// no use strict 
or
/* no use strict  */
```

**.babelrc**

```js
{
  "plugins": ["transform-remove-strict-mode-tags"]
}
```

### Via CLI

```sh
$ babel --plugins transform-remove-strict-mode-tags script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-remove-strict-mode-tags"]
});
```

#forked from https://github.com/genify/babel-plugin-transform-remove-strict-mode