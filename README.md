# redux-id-modules
Groups your [Redux](https://github.com/rackt/redux) reducers and routes into
modules so you can easily compose them.

[![Build Status](https://travis-ci.org/Industrial/redux-id-modules.svg?branch=master)](https://travis-ci.org/Industrial/redux-id-modules)

## Installation
```
npm install --save redux-id-modules
```

## Usage
```js
const Module = require('redux-id-modules').Module

const myModule = new Module({
  name: "MyModule",
  store: myStore,
})
```

## API

### constructor(options)

### getActions()

### addAction(name)

### removeAction(name)

### setActions(actions)

### getActionCreators()

### addActionCreator(name, actionCreator)

### removeActionCreator(name)

### setActionCreators(actionCreators)

### getComponents()

### setComponents(components)

### getRoutes()
Returns a React Element that is a composition of the routes of the module and of all it's submodules

### setRoutes(routes)

### getReducers(module)
Returns a reducer function for the module and all it's submodules or null

### addReducer(name, reducer)

### removeReducer(name)

### setReducers(reducers)

### getSubmodules()

### addSubmodule(options)

### removeSubmodule(submodule)

### setSubmodules(submodules)