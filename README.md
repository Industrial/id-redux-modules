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

## Module
**Kind**: global class

* [Module](#Module)
    * [new Module(options)](#new_Module_new)
    * [.getActions()](#Module+getActions) ⇒ <code>Object</code>

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