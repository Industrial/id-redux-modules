const React = require('react')
const _ = require('lodash')
const redux = require('redux')

/**
 * Represents a composable collection of redux parts.
 */
class Module {
  /**
   * Represents a composable collection of redux parts.
   * @constructor
   * @param {Object}   options                - The options object.
   * @param {String}   options.name           - The name of the module.
   * @param {Object}   options.store          - The Redux store instance.
   * @param {Object}   options.actions        - The Redux actions the module can dispatch.
   * @param {Object}   options.actionCreators - The action creators for the actions.
   * @param {Object}   options.components     - The components the module uses.
   * @param {Function} options.routes         - The final route component returned from the module.
   * @param {Object}   options.reducers       - The reducers of the module. They process the module's actions.
   * @param {Object}   options.submodules     - An array of submodules.
   */
  constructor({ name, actions, actionCreators, components, routes, reducers, submodules }) {
    // Required properties
    if (!name) {
      throw new Error('required property `name` was not passed')
    }

    this.name = name

    // Optional properties
    this.store = null
    this.actions = actions || {}
    this.actionCreators = actionCreators || {}
    this.components = components || {}
    this.routes = routes || (() => {})
    this.reducers = reducers || {}
    this.submodules = submodules || []
  }

  /**
   * Returns the name of the module.
   * @returns {String} name - The name of the module
   */
  get name() {
    return this._name
  }

  /**
   * Sets the name of the module.
   * @param {String} name - The name of the module.
   * @returns {Undefined}
   */
  set name(name) {
    this._name = name
  }

  /**
   * Returns the store of the module.
   * @returns {String} store - The store of the module
   */
  get store() {
    return this._store
  }

  /**
   * Sets the store of the module and all it's submodules.
   * @param {Object} store - The store.
   * @returns {Undefined}
   */
  set store(store) {
    this._store = store

    _.each(this.submodules, (v) => {
      v.store = store
    })
  }

  /**
   * Returns the actions of the module.
   * @returns {Object} actions
   */
  get actions() {
    return this._actions
  }

  /**
   * Adds an action to the module.
   * @param {String} name - The name of the action.
   * @returns {undefined}
   */
  addAction(name) {
    this._actions[name] = name
  }

  /**
   * Removes an action from the module.
   * @param {String} name - The name of the action.
   * @returns {undefined}
   */
  removeAction(name) {
    delete this._actions[name]
  }

  /**
   * Replaces the actions.
   * @param {Object} actions - The new actions.
   * @returns {undefined}
   */
  set actions(actions) {
    this._actions = {}

    _.each(actions, (v, k) => {
      this.addAction(k, v)
    })
  }

  /**
   * Returns the actionCreators of the module.
   * @returns {Object} actionCreators
   */
  get actionCreators() {
    return this._actionCreators
  }

  /**
   * Adds an actionCreator to the module.
   * @param {String} name - The name of the actionCreator.
   * @param {Function} actionCreator - The actionCreator function.
   * @returns {undefined}
   */
  addActionCreator(name, actionCreator) {
    if (!this._actions[name]) {
      throw new Error('Cannot add an action creator for an action that does not exist.')
    }

    this._actionCreators[name] = actionCreator
  }

  /**
   * Removes an actionCreator from the module.
   * @param {String} name - The name of the actionCreator.
   * @returns {Undefined}
   */
  removeActionCreator(name) {
    delete this._actionCreators[name]
  }

  /**
   * Replaces the actionCreators.
   * @param {Object} actionCreators - The new actionCreators.
   * @returns {Undefined}
   */
  set actionCreators(actionCreators) {
    this._actionCreators = {}

    _.each(actionCreators, (v, k) => {
      this.addActionCreator(k, v)
    })
  }

  /**
   * Returns the components of the module.
   * @returns {Object} components
   */
  get components() {
    return this._components
  }

  /**
   * Replaces the components.
   * @param {Object} components - The new components.
   * @returns {Undefined}
   */
  set components(components) {
    this._components = components
  }

  /**
   * Calls the modules' routes function and composes it with the routes of the
   * submodules, creating one route tree.
   * @returns {Object} Routes
   */
  get routes() {
    if (!this.store) {
      throw new Error('A store is required to call `getRoutes`.')
    }

    return this._routes({
      store: this.store,
      routes: _.map(this.submodules, (submodule, i) => React.createElement('div', { key: i }, submodule.routes)),
    })
  }

  /**
   * Replaces the routes.
   * @param {Function} routes - The routes function. Returns a React Element.
   * @returns {Undefined}
   */
  set routes(routes) {
    this._routes = routes
  }

  /**
   * Returns the reducers of the module combined with the reducers of the
   * submodules.
   * @returns {Object} actions
   */
  get reducers() {
    const reducers = Object.assign({}, this._reducers)

    _.each(this.submodules, (submodule) => {
      const submoduleReducers = submodule.reducers

      if (submoduleReducers) {
        reducers[submodule.name] = submodule.reducers
      }
    })

    if (!_.isEmpty(reducers)) {
      return redux.combineReducers(reducers)
    }

    return null
  }

  /**
   * Adds a reducer to the module.
   * @param {String} name - The name of the reducer.
   * @param {Function} reducer - The reducer function.
   * @returns {Undefined}
   */
  addReducer(name, reducer) {
    this._reducers[name] = reducer
  }

  /**
   * Removes a reducer from the module.
   * @param {String} name - The name of the reducer.
   * @returns {Undefined}
   */
  removeReducer(name) {
    delete this._reducers[name]
  }

  /**
   * Replaces the reducers.
   * @param {Object} reducers - The new reducers.
   * @returns {Undefined}
   */
  set reducers(reducers) {
    this._reducers = {}

    _.each(reducers, (v, k) => {
      this.addReducer(k, v)
    })
  }

  /**
   * Returns the submodules of the module.
   * @returns {Array} submodules
   */
  get submodules() {
    return this._submodules
  }

  /**
   * Adds a submodule to the module.
   * @param {Object} options - The options for the submodule.
   * @returns {Undefined}
   */
  addSubmodule(options) {
    const module = new Module(options)

    this._submodules.push(module)
  }

  /**
   * Removes a submodule from the module.
   * @param {Object} submodule - The options for the submodule.
   * @returns {Undefined}
   */
  removeSubmodule(submodule) {
    this._submodules = _.filter(this._submodules, v => submodule.name === v.name)
  }

  /**
   * Replaces the submodules.
   * @param {Array} submodules - The new submodules.
   * @returns {Undefined}
   */
  set submodules(submodules) {
    this._submodules = []

    _.each(submodules, (submodule) => {
      this.addSubmodule(submodule)
    })
  }
}

module.exports = Module
