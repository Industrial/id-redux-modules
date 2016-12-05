# redux-id-modules
Groups your [Redux](https://github.com/rackt/redux) reducers and routes into
modules so you can easily compose them.

[![Build Status](https://travis-ci.org/Industrial/redux-id-modules.svg?branch=master)](https://travis-ci.org/Industrial/redux-id-modules)

## Installation
```
npm install --save redux-id-modules
```

## Usage
See the [Example](https://github.com/Industrial/redux-id-modules/blob/master/example).

## API

### Module definition
Define a module as an object with these properties:

    module.exports = {
      // Name of the module
      name: 'MyModule',

      // Reducers object that this module exports.
      reducers: require('./reducers'),

      // Routes function that this module exports.
      routes: require('./routes'),

      // List of submodules
      modules: [ require('./modules/MyOtherModule') ],
    }

### getReducers(module)
Returns a reducer function for the module and all it's submodules or null

### getRoutes(module, store)
Returns a React Element that is a composition of the routes of the module and of all it's submodules