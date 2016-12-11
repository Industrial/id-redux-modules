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
Represents a composable collection of redux parts.

**Kind**: global class

* [Module](#Module)
    * [new Module(options)](#new_Module_new)
    * [.getActions()](#Module+getActions) ⇒ <code>Object</code>
    * [.addAction(name)](#Module+addAction) ⇒ <code>undefined</code>
    * [.removeAction(name)](#Module+removeAction) ⇒ <code>undefined</code>
    * [.setActions(actions)](#Module+setActions) ⇒ <code>undefined</code>
    * [.getActionCreators()](#Module+getActionCreators) ⇒ <code>Object</code>
    * [.addActionCreator(name, actionCreator)](#Module+addActionCreator) ⇒ <code>undefined</code>
    * [.removeActionCreator(name)](#Module+removeActionCreator) ⇒ <code>Undefined</code>
    * [.setActionCreators(actionCreators)](#Module+setActionCreators) ⇒ <code>Undefined</code>
    * [.getComponents()](#Module+getComponents) ⇒ <code>Object</code>
    * [.setComponents(components)](#Module+setComponents) ⇒ <code>Undefined</code>
    * [.getRoutes()](#Module+getRoutes) ⇒ <code>Object</code>
    * [.setRoutes(routes)](#Module+setRoutes) ⇒ <code>Undefined</code>
    * [.getReducers()](#Module+getReducers) ⇒ <code>Object</code>
    * [.addReducer(name, reducer)](#Module+addReducer) ⇒ <code>Undefined</code>
    * [.removeReducer(name)](#Module+removeReducer) ⇒ <code>Undefined</code>
    * [.setReducers(reducers)](#Module+setReducers) ⇒ <code>Undefined</code>
    * [.getSubmodules()](#Module+getSubmodules) ⇒ <code>Array</code>
    * [.addSubmodule(options)](#Module+addSubmodule) ⇒ <code>Undefined</code>
    * [.removeSubmodule(submodule)](#Module+removeSubmodule) ⇒ <code>Undefined</code>
    * [.setSubmodules(submodules)](#Module+setSubmodules) ⇒ <code>Undefined</code>

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

<a name="Module+getActions"></a>

### module.getActions() ⇒ <code>Object</code>
Returns the actions of the module.

**Kind**: instance method of <code>[Module](#Module)</code>
**Returns**: <code>Object</code> - actions
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

<a name="Module+setActions"></a>

### module.setActions(actions) ⇒ <code>undefined</code>
Replaces the actions.

**Kind**: instance method of <code>[Module](#Module)</code>

| Param | Type | Description |
| --- | --- | --- |
| actions | <code>Object</code> | The new actions. |

<a name="Module+getActionCreators"></a>

### module.getActionCreators() ⇒ <code>Object</code>
Returns the actionCreators of the module.

**Kind**: instance method of <code>[Module](#Module)</code>
**Returns**: <code>Object</code> - actionCreators
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

<a name="Module+setActionCreators"></a>

### module.setActionCreators(actionCreators) ⇒ <code>Undefined</code>
Replaces the actionCreators.

**Kind**: instance method of <code>[Module](#Module)</code>

| Param | Type | Description |
| --- | --- | --- |
| actionCreators | <code>Object</code> | The new actionCreators. |

<a name="Module+getComponents"></a>

### module.getComponents() ⇒ <code>Object</code>
Returns the components of the module.

**Kind**: instance method of <code>[Module](#Module)</code>
**Returns**: <code>Object</code> - components
<a name="Module+setComponents"></a>

### module.setComponents(components) ⇒ <code>Undefined</code>
Replaces the components.

**Kind**: instance method of <code>[Module](#Module)</code>

| Param | Type | Description |
| --- | --- | --- |
| components | <code>Object</code> | The new components. |

<a name="Module+getRoutes"></a>

### module.getRoutes() ⇒ <code>Object</code>
Calls the modules' routes function and composes it with the routes of the
submodules, creating one route tree.

**Kind**: instance method of <code>[Module](#Module)</code>
**Returns**: <code>Object</code> - Routes
<a name="Module+setRoutes"></a>

### module.setRoutes(routes) ⇒ <code>Undefined</code>
Replaces the routes.

**Kind**: instance method of <code>[Module](#Module)</code>

| Param | Type | Description |
| --- | --- | --- |
| routes | <code>function</code> | The routes function. Returns a React Element. |

<a name="Module+getReducers"></a>

### module.getReducers() ⇒ <code>Object</code>
Returns the reducers of the module combined with the reducers of the
submodules.

**Kind**: instance method of <code>[Module](#Module)</code>
**Returns**: <code>Object</code> - actions
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

<a name="Module+setReducers"></a>

### module.setReducers(reducers) ⇒ <code>Undefined</code>
Replaces the reducers.

**Kind**: instance method of <code>[Module](#Module)</code>

| Param | Type | Description |
| --- | --- | --- |
| reducers | <code>Object</code> | The new reducers. |

<a name="Module+getSubmodules"></a>

### module.getSubmodules() ⇒ <code>Array</code>
Returns the submodules of the module.

**Kind**: instance method of <code>[Module](#Module)</code>
**Returns**: <code>Array</code> - submodules
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

<a name="Module+setSubmodules"></a>

### module.setSubmodules(submodules) ⇒ <code>Undefined</code>
Replaces the submodules.

**Kind**: instance method of <code>[Module](#Module)</code>

| Param | Type | Description |
| --- | --- | --- |
| submodules | <code>Array</code> | The new submodules. |
