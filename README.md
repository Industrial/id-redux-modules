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
      name: 'MyModule',
      modules: [],
      reducers: {},
      routes: () => {},
    }

### getReducers(module)
Returns a reducer function for the module and all it's submodules or null

### getRoutes(module, store)
Returns a React Element that is a composition of the routes of the module and of all it's submodules