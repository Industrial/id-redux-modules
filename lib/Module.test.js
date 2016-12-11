const assert = require('power-assert')
const _ = require('lodash')

const Module = require('./Module')

const mockStore = {}
const noop = () => {}

describe('Module', () => {
  describe('#constructor', () => {
    describe('Required properties', () => {
      describe('When constructed without a `name` property', () => {
        it('Should throw an error', () => {
          assert.throws(() => {
            const options = {
              store: mockStore
            }

            const instance = new Module(options)
          })
        })
      })

      describe('When constructed without a `store` property', () => {
        it('Should throw an error', () => {
          assert.throws(() => {
            const options = {
              name: 'TestModule'
            }

            const instance = new Module(options)
          })
        })
      })

      describe('When constructed with a `name` property and a `store` property', () => {
        it('Should have set those properties on the instance', () => {
          const options = {
            name: 'TestModule',
            store: mockStore,
          }

          const instance = new Module(options)

          assert('TestModule' === instance.name)
          assert(mockStore === instance.store)
        })
      })
    })

    describe('Optional properties', () => {
      describe('When constructed with an `actions` property', () => {
        it('Should have set those properties on the instance', () => {
          const options = {
            name: 'TestModule',
            store: mockStore,
            actions: {
              MY_ACTION: 'MY_ACTION'
            },
          }

          const instance = new Module(options)

          const actual = instance.getActions()

          assert.ok(_.isObject(actual))
          assert.equal(actual.MY_ACTION, 'MY_ACTION')
        })
      })

      describe('When constructed with an `actionCreators` property', () => {
        it('Should have set those properties on the instance', () => {
          const options = {
            name: 'TestModule',
            store: mockStore,
            actions: {
              MY_ACTION: 'MY_ACTION'
            },
            actionCreators: {
              MY_ACTION: () => {}
            },
          }

          const instance = new Module(options)

          const actual = instance.getActionCreators()

          assert.ok(_.isObject(actual))
          assert.equal(actual.MY_ACTION, options.actionCreators.MY_ACTION)
        })
      })

      describe('When constructed with a `components` property', () => {
        it('Should have set those properties on the instance', () => {
          const options = {
            name: 'TestModule',
            store: mockStore,
            components: {
              MyComponent: () => {}
            },
          }

          const instance = new Module(options)

          const actual = instance.getComponents()

          assert.ok(_.isObject(actual))
          assert.equal(actual.MyComponent, options.components.MyComponent)
        })
      })

      describe('When constructed with a `routes` property', () => {
        it('Should have set those properties on the instance', () => {
          const options = {
            name: 'TestModule',
            store: mockStore,
            routes: ({ routes, store }) => routes,
          }

          const instance = new Module(options)

          const actual = instance.getRoutes()

          assert.ok(_.isObject(actual))

          // TODO: Figure out how to test actual by value.
        })
      })

      describe('When constructed with a `reducers` property', () => {
        it('Should have set those properties on the instance', () => {
          const options = {
            name: 'TestModule',
            store: mockStore,
            reducers: {
              myReducer: () => {},
            },
          }

          const instance = new Module(options)

          const actual = instance.getReducers()

          assert.ok(_.isObject(actual))
          assert.equal(actual.myReducer, options.reducers.myReducer)
        })
      })

      describe('When constructed with a `submodules` property', () => {
        it('Should have set those properties on the instance', () => {
          const options = {
            name: 'TestModule',
            store: mockStore,
            submodules: [
              {
                name: 'ChildModule1',
              },
              {
                name: 'ChildModule2',
              },
              {
                name: 'ChildModule3',
              },
            ],
          }

          const instance = new Module(options)

          const actual = instance.getSubmodules()

          assert.ok(_.isArray(actual))
          assert.equal(actual.length, 3)
          assert.equal(actual[0].name, 'ChildModule1')
          assert.equal(actual[1].name, 'ChildModule2')
          assert.equal(actual[2].name, 'ChildModule3')
        })
      })
    })
  })

  describe('#getActions', () => {
    describe('When constructed with an `actions` property', () => {
      it('Should return the `actions` property', () => {
        const options = {
          name: 'TestModule',
          store: mockStore,
          actions: {
            MY_ACTION: 'MY_ACTION'
          }
        }

        const instance = new Module(options)

        const actual = instance.getActions()

        assert.ok(_.isObject(actual))
        assert.equal(actual.MY_ACTION, 'MY_ACTION')
      })
    })
  })

  describe('#addAction', () => {
    describe('When called with an `actions` argument', () => {
      it('Should set the passed properties on the instance', () => {
        const options = {
          name: 'TestModule',
          store: mockStore,
        }

        const instance = new Module(options)

        instance.addAction('MY_ACTION')

        const actual = instance.getActions()

        assert.ok(_.isObject(actual))
        assert.equal(actual.MY_ACTION, 'MY_ACTION')
      })
    })
  })

  describe('#removeAction', () => {
    describe('When called with a `name` argument', () => {
      it('Should remove the properties from the instance', () => {
        const options = {
          name: 'TestModule',
          store: mockStore,
        }

        const instance = new Module(options)

        instance.addAction('MY_ACTION')
        instance.removeAction('MY_ACTION')

        const actual = instance.getActions()

        assert.ok(_.isObject(actual))
        assert.ok(_.isEmpty(actual))
      })
    })
  })

  describe('#setActions', () => {
    describe('When called with an `actions` argument', () => {
      it('Should set the passed properties on the instance', () => {
        const options = {
          name: 'TestModule',
          store: mockStore,
        }

        const instance = new Module(options)

        instance.setActions({
          MY_ACTION: 'MY_ACTION'
        })

        const actual = instance.getActions()

        assert.ok(_.isObject(actual))
        assert.equal(actual.MY_ACTION, 'MY_ACTION')
      })
    })
  })

  describe('#getActionCreators', () => {
    describe('When constructed with an `actionCreators` property', () => {
      describe('When there is an entry in the `actionCreators` property that does not exist in the `actions` property', () => {
        it('Should throw an error', () => {
          assert.throws(() => {
            const options = {
              name: 'TestModule',
              store: mockStore,
              actions: {
              },
              actionCreators: {
                MY_ACTION: () => {}
              }
            }

            const instance = new Module(options)
          })
        })
      })

      describe('When there is an entry in the `actionCreators` property that exists in the `actions` property', () => {
        it('Should return the `actionCreators` property', () => {
          const options = {
            name: 'TestModule',
            store: mockStore,
            actions: {
              MY_ACTION: 'MY_ACTION'
            },
            actionCreators: {
              MY_ACTION: () => {}
            }
          }

          const instance = new Module(options)

          const actual = instance.getActionCreators()

          assert.ok(_.isObject(actual))
          assert.equal(options.actionCreators.MY_ACTION, actual.MY_ACTION)
        })
      })
    })
  })

  describe('#addActionCreator', () => {
    describe('When called with a `name` and an `actionCreator` argument', () => {
      it('Should set the passed properties on the instance', () => {
        const options = {
          name: 'TestModule',
          store: mockStore,
          actions: {
            MY_ACTION: 'MY_ACTION'
          },
        }

        const instance = new Module(options)

        instance.addActionCreator('MY_ACTION', () => {})

        const actual = instance.getActionCreators()

        assert.ok(_.isObject(actual))
        assert.ok(_.isFunction(actual.MY_ACTION))
      })
    })
  })

  describe('#removeActionCreator', () => {
    describe('When called with a `name` argument', () => {
      it('Should remove the properties from the instance', () => {
        const options = {
          name: 'TestModule',
          store: mockStore,
          actions: {
            MY_ACTION: 'MY_ACTION'
          },
        }

        const instance = new Module(options)

        instance.addActionCreator('MY_ACTION', () => {})
        instance.removeActionCreator('MY_ACTION')

        const actual = instance.getActionCreators()

        assert.ok(_.isObject(actual))
        assert.ok(_.isEmpty(actual))
      })
    })
  })

  describe('#setActionCreators', () => {
    describe('When called with an `actionCreators` argument', () => {
      it('Should set the passed properties on the instance', () => {
        const options = {
          name: 'TestModule',
          store: mockStore,
          actions: {
            MY_ACTION: 'MY_ACTION'
          }
        }

        const fn = () => {}

        const instance = new Module(options)

        instance.setActionCreators({
          MY_ACTION: fn
        })

        assert(fn === instance.getActionCreators().MY_ACTION)
      })
    })
  })

  describe('#getComponents', () => {
    describe('When constructed with an `actions` property', () => {
      it('Should return the `actions` property', () => {
        const options = {
          name: 'TestModule',
          store: mockStore,
          components: {
            myComponent: (props) => 'JSX'
          }
        }

        const instance = new Module(options)

        const actual = instance.getComponents()

        assert.ok(_.isObject(actual))
        assert.ok(actual.myComponent, options.components.myComponent)
      })
    })
  })

  describe('#setComponents', () => {
    describe('When called with a `components` argument', () => {
      it('Should set the passed properties on the instance', () => {
        const options = {
          name: 'TestModule',
          store: mockStore,
        }

        const components = {
          myComponent: (props) => 'JSX'
        }

        const instance = new Module(options)

        instance.setComponents(components)

        const actual = instance.getComponents()

        assert.ok(_.isObject(actual))
        assert.equal(components.myComponent, actual.myComponent)
      })
    })
  })

  describe('#getRoutes', () => {
    describe('When constructed with a `routes` property', () => {
      it('Should return the `routes` property', () => {
        const options = {
          name: 'TestModule',
          store: mockStore,
          routes: ({ routes, store }) => routes,
        }

        const instance = new Module(options)

        const actual = instance.getRoutes()

        assert.ok(_.isObject(actual))
      })
    })
  })

  describe('#setRoutes', () => {
    describe('When called with a `routes` argument', () => {
      it('Should set the passed properties on the instance', () => {
        const options = {
          name: 'TestModule',
          store: mockStore,
        }

        const instance = new Module(options)

        instance.setRoutes(({ routes, store }) => routes)

        const actual = instance.getRoutes()

        assert.ok(_.isObject(actual))
      })
    })
  })

  describe('#getReducers', () => {
    describe('When constructed with a `reducers` property', () => {
      it('Should return the `reducers` property', () => {
        const options = {
          name: 'TestModule',
          store: mockStore,
          reducers: {
            myReducer: () => {}
          }
        }

        const instance = new Module(options)

        const actual = instance.getReducers()

        assert.ok(_.isObject(actual))
        assert.equal(options.reducers.myReducer, actual.myReducer)
      })
    })
  })

  describe('#addReducer', () => {
    describe('When called with a `name` and a `reducer` argument', () => {
      it('Should set the passed properties on the instance', () => {
        const options = {
          name: 'TestModule',
          store: mockStore,
        }

        const instance = new Module(options)

        const expected = () => {}

        instance.addReducer('myReducer', expected)

        const actual = instance.getReducers()

        assert.ok(_.isObject(actual))
        assert.equal(expected, actual.myReducer)
      })
    })
  })

  describe('#removeReducer', () => {
    describe('When called with a `name` argument', () => {
      it('Should remove the properties from the instance', () => {
        const options = {
          name: 'TestModule',
          store: mockStore,
        }

        const instance = new Module(options)

        const expected = () => {}

        instance.addReducer('myReducer', expected)
        instance.removeReducer('myReducer')

        const actual = instance.getReducers()

        assert.ok(_.isObject(actual))
        assert.ok(_.isEmpty(actual))
      })
    })
  })

  describe('#setReducers', () => {
    describe('When called with a `reducers` argument', () => {
      it('Should set the passed properties on the instance', () => {
        const options = {
          name: 'TestModule',
          store: mockStore,
        }

        const instance = new Module(options)

        const expected = {
          myReducer: () => {}
        }

        instance.setReducers(expected)

        const actual = instance.getReducers()

        assert.ok(_.isObject(actual))
        assert.equal(expected.myReducer, actual.myReducer)
      })
    })
  })

  describe('#getSubmodules', () => {
    describe('When constructed with a `submodules` property', () => {
      it('Should return the `submodules` property', () => {
        const options = {
          name: 'TestModule',
          store: mockStore,
          submodules: [
            {
              name: 'SubModule1'
            },
          ],
        }

        const instance = new Module(options)

        const actual = instance.getSubmodules()

        assert.ok(_.isArray(actual))
        assert.equal(1, actual.length)
        assert.equal('SubModule1', actual[0].name)
      })
    })
  })

  describe('#addSubmodule', () => {
    describe('When called with an `options` argument', () => {
      it('Should set the passed properties on the instance', () => {
        const options = {
          name: 'TestModule',
          store: mockStore,
        }

        const instance = new Module(options)

        instance.addSubmodule({
          name: 'SubModule1'
        })

        const actual = instance.getSubmodules()

        assert.ok(_.isArray(actual))
        assert.equal(1, actual.length)
        assert.equal('SubModule1', actual[0].name)
      })
    })
  })

  describe('#removeSubmodule', () => {
    describe('When called with a `name` argument', () => {
      it('Should remove the properties from the instance', () => {
        const options = {
          name: 'TestModule',
          store: mockStore,
        }

        const instance = new Module(options)

        instance.addSubmodule({
          name: 'SubModule1'
        })
        instance.removeSubmodule('Submodule1')

        const actual = instance.getSubmodules()

        assert.ok(_.isArray(actual))
        assert.ok(_.isEmpty(actual))
      })
    })
  })

  describe('#setSubmodules', () => {
    describe('When called with a `submodules` argument', () => {
      it('Should set the passed properties on the instance', () => {
        const options = {
          name: 'TestModule',
          store: mockStore,
        }

        const instance = new Module(options)

        instance.setSubmodules([
          {
            name: 'SubModule1'
          }
        ])

        const actual = instance.getSubmodules()

        assert.ok(_.isArray(actual))
        assert.equal(1, actual.length)
        assert.equal('SubModule1', actual[0].name)
      })
    })
  })
})