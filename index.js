const React = require('react')

const _ = require('lodash')
const combineReducers = require('redux').combineReducers

// Returns true when the module has one or more submodules.
function hasSubmodules(module) {
  return module.modules && _.isArray(module.modules) && !_.isEmpty(module.modules)
}

// Adds all submodule's reducers to the module's reducers by submodule name.
function setSubmodulesReducers(module) {
  _.each(module.modules, (submodule) => {
    const submoduleReducers = getReducers(submodule)

    // Only set reducers that return something.
    if (submoduleReducers) {
      module.reducers[submodule.name] = submoduleReducers
    }
  })
}

// Returns a reducer function for the module and all it's submodules or null
function getReducers(module) {
  if (hasSubmodules(module)) {
    setSubmodulesReducers(module)
  }

  if (module.reducers) {
    if (!_.isEmpty(module.reducers)) {
      return combineReducers(module.reducers)
    }
  }

  return null
}

// Returns a React Element that is a composition of the routes of the module and of all it's submodules
function getRoutes(module, store) {
  let submoduleRoutes = null

  if (module && module.modules && module.modules.length) {
    submoduleRoutes = module.modules.map((submodule, i) => React.createElement('div', { key: i }, getRoutes(submodule, store)))
  }

  return module.routes({
    routes: submoduleRoutes,
    store,
  })
}

module.exports = {
  getReducers: getReducers,
  getRoutes: getRoutes,
}
