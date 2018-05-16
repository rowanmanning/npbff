
# Non-Player BFF

Create non-player characters for your D&D world.


## Table of Contents

  * [Requirements](#requirements)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)


## Requirements

Non-Player BFF requires one of the following environments to run:

  * [Node.js] 8+


## Usage

You can use Non-Player BFF on the command line, or via JavaScript.

### Command-line

Install Non-Player BFF with [npm]:

```sh
npm install -g npbff
```

Run the following to generate a character:

```sh
npbff
```

Outputs something like:

```
Eridred is a Dwarf Grave digger with a glass eye and a bulbous nose. Eridred holds a lot of superstitious views, and values gold above all else.
```


### JavaScript/Node.js

Install Non-Player BFF with [npm]:

```sh
npm install npbff
```

Then you can load the module into your code with a `require` call:

```js
const createBff = require('npbff');
```

Create an npc by calling the `createBff` function, this gives you a string containing the NPC details:

```js
createBff(); // 'Eridred is a Dwarf Grave digger...'
```

You can get an NPC as HTML by passing in a format parameter:

```js
createBff('html'); // '<span data-property="name">Eridred</span> is a...'
```

You can get the NPC details as an object by passing in a format parameter:

```js
createBff('object'); // { name: 'Eridred', ... }
```

If you pass in a second object parameter, this is used to pre-fill certain properties, in case you know what you want:

```js
createBff('text', { name: 'Rowan' }); // { name: 'Rowan', ... }
```


## Contributing

To contribute to Non-Player BFF, clone this repo locally and commit your code on a separate branch. Please write unit tests for your code, and run the linter before opening a pull-request:

```sh
make test    # run all tests
make verify  # run all linters
```


## License

Non-Player BFF is licensed under the [MIT] license.  
Copyright &copy; 2018, Rowan Manning



[mit]: LICENSE
[node.js]: https://nodejs.org/
[npm]: https://www.npmjs.com/
