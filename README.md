# id-redux-modules
Groups your [Redux](https://github.com/rackt/redux) reducers and routes into
modules so you can easily compose them.

[![Build Status](https://travis-ci.org/Industrial/id-redux-modules.svg?branch=master)](https://travis-ci.org/Industrial/id-redux-modules)

## Installation
```
npm install --save id-redux-modules
```

## Usage
```js
const Module = require('id-redux-modules').Module

const myModule = new Module({
  name: "MyModule",
  store: myStore,
})
```

<a name="Module"></a>

## Module
Represents a composable collection of redux parts.

**Kind**: global class

* [Module](#Module)
    * [new Module(options)](#new_Module_new)
    * [.name](#Module+name) ⇒ <code>String</code>
    * [.name](#Module+name) ⇒ <code>Undefined</code>
    * [.store](#Module+store) ⇒ <code>String</code>
    * [.store](#Module+store) ⇒ <code>Undefined</code>
    * [.actions](#Module+actions) ⇒ <code>Object</code>
    * [.actions](#Module+actions) ⇒ <code>undefined</code>
    * [.actionCreators](#Module+actionCreators) ⇒ <code>Object</code>
    * [.actionCreators](#Module+actionCreators) ⇒ <code>Undefined</code>
    * [.components](#Module+components) ⇒ <code>Object</code>
    * [.components](#Module+components) ⇒ <code>Undefined</code>
    * [.routes](#Module+routes) ⇒ <code>Object</code>
    * [.routes](#Module+routes) ⇒ <code>Undefined</code>
    * [.reducers](#Module+reducers) ⇒ <code>Object</code>
    * [.reducers](#Module+reducers) ⇒ <code>Undefined</code>
    * [.submodules](#Module+submodules) ⇒ <code>Array</code>
    * [.submodules](#Module+submodules) ⇒ <code>Undefined</code>
    * [.addAction(name)](#Module+addAction) ⇒ <code>undefined</code>
    * [.removeAction(name)](#Module+removeAction) ⇒ <code>undefined</code>
    * [.addActionCreator(name, actionCreator)](#Module+addActionCreator) ⇒ <code>undefined</code>
    * [.removeActionCreator(name)](#Module+removeActionCreator) ⇒ <code>Undefined</code>
    * [.addReducer(name, reducer)](#Module+addReducer) ⇒ <code>Undefined</code>
    * [.removeReducer(name)](#Module+removeReducer) ⇒ <code>Undefined</code>
    * [.addSubmodule(options)](#Module+addSubmodule) ⇒ <code>Undefined</code>
    * [.removeSubmodule(submodule)](#Module+removeSubmodule) ⇒ <code>Undefined</code>

<a name="new_Module_new"></a>

### new Module(options)
Represents a composable collection of redux parts.


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object. |
| options.name | <code>String</code> | The name of the module. |
| options.store | <code>Object</code> | The Redux store instance. |
| options.actions | <code>Object</code> | The Redux actions the module can dispatch. |
| options.actionCreators | <code>Object</code> | The action creators for the actions. |
| options.components | <code>Object</code> | The components the module uses. |
| options.routes | <code>function</code> | The final route component returned from the module. |
| options.reducers | <code>Object</code> | The reducers of the module. They process the module's actions. |
| options.submodules | <code>Object</code> | An array of submodules. |

<a name="Module+name"></a>

### module.name ⇒ <code>String</code>
Returns the name of the module.

**Kind**: instance property of <code>[Module](#Module)</code>
**Returns**: <code>String</code> - name - The name of the module
<a name="Module+name"></a>

### module.name ⇒ <code>Undefined</code>
Sets the name of the module.

**Kind**: instance property of <code>[Module](#Module)</code>

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The name of the module. |

<a name="Module+store"></a>

### module.store ⇒ <code>String</code>
Returns the store of the module.

**Kind**: instance property of <code>[Module](#Module)</code>
**Returns**: <code>String</code> - store - The store of the module
<a name="Module+store"></a>

### module.store ⇒ <code>Undefined</code>
Sets the store of the module and all it's submodules.

**Kind**: instance property of <code>[Module](#Module)</code>

| Param | Type | Description |
| --- | --- | --- |
| store | <code>Object</code> | The store. |

<a name="Module+actions"></a>

### module.actions ⇒ <code>Object</code>
Returns the actions of the module.

**Kind**: instance property of <code>[Module](#Module)</code>
**Returns**: <code>Object</code> - actions
<a name="Module+actions"></a>

### module.actions ⇒ <code>undefined</code>
Replaces the actions.

**Kind**: instance property of <code>[Module](#Module)</code>

| Param | Type | Description |
| --- | --- | --- |
| actions | <code>Object</code> | The new actions. |

<a name="Module+actionCreators"></a>

### module.actionCreators ⇒ <code>Object</code>
Returns the actionCreators of the module.

**Kind**: instance property of <code>[Module](#Module)</code>
**Returns**: <code>Object</code> - actionCreators
<a name="Module+actionCreators"></a>

### module.actionCreators ⇒ <code>Undefined</code>
Replaces the actionCreators.

**Kind**: instance property of <code>[Module](#Module)</code>

| Param | Type | Description |
| --- | --- | --- |
| actionCreators | <code>Object</code> | The new actionCreators. |

<a name="Module+components"></a>

### module.components ⇒ <code>Object</code>
Returns the components of the module.

**Kind**: instance property of <code>[Module](#Module)</code>
**Returns**: <code>Object</code> - components
<a name="Module+components"></a>

### module.components ⇒ <code>Undefined</code>
Replaces the components.

**Kind**: instance property of <code>[Module](#Module)</code>

| Param | Type | Description |
| --- | --- | --- |
| components | <code>Object</code> | The new components. |

<a name="Module+routes"></a>

### module.routes ⇒ <code>Object</code>
Calls the modules' routes function and composes it with the routes of the
submodules, creating one route tree.

**Kind**: instance property of <code>[Module](#Module)</code>
**Returns**: <code>Object</code> - Routes
<a name="Module+routes"></a>

### module.routes ⇒ <code>Undefined</code>
Replaces the routes.

**Kind**: instance property of <code>[Module](#Module)</code>

| Param | Type | Description |
| --- | --- | --- |
| routes | <code>function</code> | The routes function. Returns a React Element. |

<a name="Module+reducers"></a>

### module.reducers ⇒ <code>Object</code>
Returns the reducers of the module combined with the reducers of the
submodules.

**Kind**: instance property of <code>[Module](#Module)</code>
**Returns**: <code>Object</code> - actions
<a name="Module+reducers"></a>

### module.reducers ⇒ <code>Undefined</code>
Replaces the reducers.

**Kind**: instance property of <code>[Module](#Module)</code>

| Param | Type | Description |
| --- | --- | --- |
| reducers | <code>Object</code> | The new reducers. |

<a name="Module+submodules"></a>

### module.submodules ⇒ <code>Array</code>
Returns the submodules of the module.

**Kind**: instance property of <code>[Module](#Module)</code>
**Returns**: <code>Array</code> - submodules
<a name="Module+submodules"></a>

### module.submodules ⇒ <code>Undefined</code>
Replaces the submodules.

**Kind**: instance property of <code>[Module](#Module)</code>

| Param | Type | Description |
| --- | --- | --- |
| submodules | <code>Array</code> | The new submodules. |

<a name="Module+addAction"></a>

### module.addAction(name) ⇒ <code>undefined</code>
Adds an action to the module.

**Kind**: instance method of <code>[Module](#Module)</code>

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The name of the action. |

<a name="Module+removeAction"></a>

### module.removeAction(name) ⇒ <code>undefined</code>
Removes an action from the module.

**Kind**: instance method of <code>[Module](#Module)</code>

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The name of the action. |

<a name="Module+addActionCreator"></a>

### module.addActionCreator(name, actionCreator) ⇒ <code>undefined</code>
Adds an actionCreator to the module.

**Kind**: instance method of <code>[Module](#Module)</code>

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The name of the actionCreator. |
| actionCreator | <code>function</code> | The actionCreator function. |

<a name="Module+removeActionCreator"></a>

### module.removeActionCreator(name) ⇒ <code>Undefined</code>
Removes an actionCreator from the module.

**Kind**: instance method of <code>[Module](#Module)</code>

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The name of the actionCreator. |

<a name="Module+addReducer"></a>

### module.addReducer(name, reducer) ⇒ <code>Undefined</code>
Adds a reducer to the module.

**Kind**: instance method of <code>[Module](#Module)</code>

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The name of the reducer. |
| reducer | <code>function</code> | The reducer function. |

<a name="Module+removeReducer"></a>

### module.removeReducer(name) ⇒ <code>Undefined</code>
Removes a reducer from the module.

**Kind**: instance method of <code>[Module](#Module)</code>

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The name of the reducer. |

<a name="Module+addSubmodule"></a>

### module.addSubmodule(options) ⇒ <code>Undefined</code>
Adds a submodule to the module.

**Kind**: instance method of <code>[Module](#Module)</code>

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options for the submodule. |

<a name="Module+removeSubmodule"></a>

### module.removeSubmodule(submodule) ⇒ <code>Undefined</code>
Removes a submodule from the module.

**Kind**: instance method of <code>[Module](#Module)</code>

| Param | Type | Description |
| --- | --- | --- |
| submodule | <code>Object</code> | The options for the submodule. |
