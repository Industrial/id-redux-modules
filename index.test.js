const _ = require('lodash')
const assert = require('power-assert')
const React = require('react')

const modules = require('./index')

describe('redux-id-modules', () => {
  describe('getReducers', () => {
    describe('when passed a module object', () => {
      describe('when a submodule has no reducers', () => {
        it('should not have added an entry in the module reducers for that submodule', () => {
          const module = {
            name: 'Main',

            modules: [
              {
                name: 'One',
                reducers: {
                  First: (() => 1)
                }
              },
              {
                name: 'Two'
              }
            ],

            reducers: {}
          }

          const reducers = modules.getReducers(module)

          assert(typeof reducers === 'function')

          const result = reducers()

          assert(result.One)
          assert(result.One.First)
          assert(result.One.First === 1)
        })
      })

      describe('when a submodule has reducers', () => {
        it('should have added the submodule reducers in the module reducers under the submodule name', () => {
          const module = {
            name: 'Main',

            modules: [
              {
                name: 'One',
                reducers: {
                  First: (() => 1)
                }
              },
              {
                name: 'Two',
                reducers: {
                  Second: (() => 1)
                }
              }
            ],

            reducers: {}
          }

          const reducers = modules.getReducers(module)

          assert(typeof reducers === 'function')

          const result = reducers()

          assert(result.One)
          assert(result.One.First)
          assert(result.One.First === 1)

          assert(result.Two)
          assert(result.Two.Second)
          assert(result.Two.Second === 1)
        })
      })
    })

    describe('when the module has reducers', () => {
      it('should return a Function', () => {
        const module = {
          name: 'Main',

          modules: [],

          reducers: {
            a: () => 1,
            b: () => 2
          }
        }

        const reducers = modules.getReducers(module)

        assert(typeof reducers === 'function')

        const result = reducers()

        assert(result.a)
        assert(result.a === 1)

        assert(result.b)
        assert(result.b === 2)
      })
    })

    describe('when the module does not have reducers', () => {
      it('should return a Null', () => {
        const module = {
          name: 'Main',

          modules: [],

          reducers: {}
        }

        const reducers = modules.getReducers(module)

        assert(null === reducers)
      })
    })
  })

  describe('getRoutes', () => {
  const storeMock = {}

    describe('when passed a module object and a store object', () => {
      it('should return the result of the routes function of the module', () => {
        const mainModule = {
          name: 'Main',

          modules: [],

          reducers: {},

          routes: ({ routes, store }) => {
            return 'arbitraryThing'
          }
        }

        const routes = modules.getRoutes(mainModule, storeMock)

        assert('arbitraryThing' === routes)
      })

      describe('when module has submodules', () => {
        it('should have gotten every submodules routes and returned them wrapped in a div element with a key property', () => {
          const blogModule = {
            name: 'Blog',

            modules: [],

            reducers: {},

            routes: ({ routes, store }) => {
              return 'blogThing'
            }
          }

          const mainModule = {
            name: 'Main',

            modules: [ blogModule ],

            reducers: {},

            routes: ({ routes, store }) => {
              return React.createElement('div', { test: true }, routes)
            }
          }

          const routes = modules.getRoutes(mainModule, storeMock)

          assert.ok(_.isObject(routes))
          assert(routes.type === 'div')
          assert(routes.key === null)

          assert.ok(_.isObject(routes.props))
          assert(routes.props.test === true)

          assert.ok(_.isArray(routes.props.children))
          assert.ok(_.isObject(routes.props.children[0]))
          assert(routes.props.children[0].type === 'div')
          assert(routes.props.children[0].key === '0')
          assert.ok(_.isObject(routes.props.children[0].props))
          assert(routes.props.children[0].props.children === 'blogThing')
        })
      })
    })
  })
})
