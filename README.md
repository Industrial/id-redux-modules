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

<a name="Module"></a>

## Module
**Kind**: global class

* [Module](#Module)
    * [new Module(options)](#new_Module_new)
    * [.getActions()](#Module+getActions) ⇒ <code>Object</code>
    * [.getActionCreators()](#Module+getActionCreators) ⇒ <code>Object</code>
    * [.getComponents()](#Module+getComponents) ⇒ <code>Object</code>
    * [.getRoutes()](#Module+getRoutes) ⇒ <code>Object</code>
    * [.getReducers()](#Module+getReducers) ⇒ <code>Object</code>
    * [.getSubmodules()](#Module+getSubmodules) ⇒ <code>Array</code>

<a name="new_Module_new"></a>

### new Module(options)
Represents a composable collection of redux parts.


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.name | <code>String</code> | The name of the module. |
| options.store | <code>Object</code> | The Redux store instance. |
| options.actions | <code>Object</code> | The Redux actions the module can dispatch. |
| options.actionCreators | <code>Object</code> | The action creators for the actions. |
| options.components | <code>Object</code> | The components the module uses. |
| options.routes | <code>function</code> | The final route component returned from the module. |
| options.reducers | <code>Object</code> | The reducers of the module. They process the module's actions. |
| options.submodules | <code>Object</code> | An array of submodules. |

<a name="Module+getActions"></a>

### module.getActions() ⇒ <code>Object</code>
Returns the actions of the module.

**Kind**: instance method of <code>[Module](#Module)</code>
**Returns**: <code>Object</code> - actions
<a name="Module+getActionCreators"></a>

### module.getActionCreators() ⇒ <code>Object</code>
Returns the actionCreators of the module.

**Kind**: instance method of <code>[Module](#Module)</code>
**Returns**: <code>Object</code> - actionCreators
<a name="Module+getComponents"></a>

### module.getComponents() ⇒ <code>Object</code>
Returns the components of the module.

**Kind**: instance method of <code>[Module](#Module)</code>
**Returns**: <code>Object</code> - components
<a name="Module+getRoutes"></a>

### module.getRoutes() ⇒ <code>Object</code>
Calls the modules' routes function and composes it with the routes of the
submodules, creating one route tree.

**Kind**: instance method of <code>[Module](#Module)</code>
**Returns**: <code>Object</code> - Routes
<a name="Module+getReducers"></a>

### module.getReducers() ⇒ <code>Object</code>
Returns the reducers of the module combined with the reducers of the
submodules.

**Kind**: instance method of <code>[Module](#Module)</code>
**Returns**: <code>Object</code> - actions
<a name="Module+getSubmodules"></a>

### module.getSubmodules() ⇒ <code>Array</code>
Returns the submodules of the module.

**Kind**: instance method of <code>[Module](#Module)</code>
**Returns**: <code>Array</code> - submodules
