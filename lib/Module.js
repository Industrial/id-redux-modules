const React = require('react')
const _ = require('lodash')

class Module {
  /**
   * Represents a composable collection of redux parts.
   * @constructor
   * @param {Object}   options
   * @param {String}   options.name           - The name of the module.
   * @param {Object}   options.store          - The Redux store instance.
   * @param {Object}   options.actions        - The Redux actions the module can dispatch.
   * @param {Object}   options.actionCreators - The action creators for the actions.
   * @param {Object}   options.components     - The components the module uses.
   * @param {Function} options.routes         - The final route component returned from the module.
   * @param {Object}   options.reducers       - The reducers of the module. They process the module's actions.
   * @param {Object}   options.submodules     - An array of submodules.
   */
  constructor({ name, store, actions, actionCreators, components, routes, reducers, submodules }) {
    // Required properties
    if (!name) {
      throw new Error('required property `name` was not passed')
    }

    this.name = name

    if (!store) {
      throw new Error('required property `store` was not passed')
    }

    this.store = store

    // Optional properties
    this._actions = {}
    this._actionCreators = {}
    this._components = {}
    this._routes = () => {}
    this._reducers = {}
    this._submodules = []

    if (actions) {
      this.setActions(actions)
    }

    if (actionCreators) {
      this.setActionCreators(actionCreators)
    }

    if (components) {
      this.setComponents(components)
    }

    if (routes) {
      this.setRoutes(routes)
    }

    if (reducers) {
      this.setReducers(reducers)
    }

    if (submodules) {
      this.setSubmodules(submodules)
    }
  }

  /**
   * Returns the actions of the module.
   * @returns {Object} actions
   */
  getActions() {
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
   * Replaces any existing actions with the supplied ones..
   * @param {Object} actions - The new actions.
   * @returns {undefined}
   */
  setActions(actions) {
    this._actions = {}

    _.each(actions, (v, k) => {
      this.addAction(k, v)
    })
  }

  /**
   * Returns the actionCreators of the module.
   * @returns {Object} actionCreators
   */
  getActionCreators() {
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

  removeActionCreator(name) {
    delete this._actionCreators[name]
  }

  setActionCreators(actionCreators) {
    this._actionCreators = {}

    _.each(actionCreators, (v, k) => {
      this.addActionCreator(k, v)
    })
  }

  /**
   * Returns the components of the module.
   * @returns {Object} components
   */
  getComponents() {
    return this._components
  }

  setComponents(components) {
    this._components = components
  }

  /**
   * Calls the modules' routes function and composes it with the routes of the
   * submodules, creating one route tree.
   * @returns {Object} Routes
   */
  getRoutes() {
    return this._routes({
      store: this.store,
      routes: _.map(this.submodules, (submodule, i) => React.createElement('div', { key: i }, submodule.getRoutes())),
    })
  }

  setRoutes(routes) {
    this._routes = routes
  }

  /**
   * Returns the reducers of the module combined with the reducers of the
   * submodules.
   * @returns {Object} actions
   */
  getReducers() {
    return _.reduce(this.submodules, (submodule, memo) => {
      memo[submodule.name] = submodule.getReducers()
      return memo
    }, this._reducers)
  }

  addReducer(name, reducer) {
    this._reducers[name] = reducer
  }

  removeReducer(name) {
    delete this._reducers[name]
  }

  setReducers(reducers) {
    this._reducers = {}

    _.each(reducers, (v, k) => {
      this.addReducer(k, v)
    })
  }

  /**
   * Returns the submodules of the module.
   * @returns {Array} submodules
   */
  getSubmodules() {
    return this._submodules
  }

  addSubmodule(options) {
    // Set the store for the submodule, so you only have to pass it to the
    // root.
    options.store = this.store

    const module = new Module(options)

    this._submodules.push(module)
  }

  removeSubmodule(submodule) {
    this._submodules = _.filter(this._submodules, v => submodule.name === v.name)
  }

  setSubmodules(submodules) {
    this._submodules = []

    _.each(submodules, (submodule) => {
      this.addSubmodule(submodule)
    })
  }
}

module.exports = Module
