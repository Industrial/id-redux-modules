const React = require('react')
const ReactDOM = require('react-dom')
const reduxThunk = require('redux-thunk')
const redux = require('redux')

const reduxModules = require('../..')
const App = require('./App')
const application = require('./application')
const reducers = require('./reducers')

const middleware = [ reduxThunk ]
const store = redux.createStore(reducers, middleware)
const routes = reduxModules.getRoutes(application, store)

ReactDOM.render(
  <App
    store={store}
    routes={routes}
  />,
  document.querySelector('#root')
)