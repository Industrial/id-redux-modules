const React = require('react')
const { createStore } = require('redux')
const { HashRouter } = require('react-router')
const { Provider } = require('react-redux')
const { render } = require('react-dom')

const { getReducers, getRoutes } = require('../..')

// This is the main module, but just a module like the others.
const application = require('./application')

// The middleware stack. You should probably add things like redux-thunk.
const middleware = [ ]

// Use getReducers to fetch all module reducers as one tree.
const reducers = getReducers(application)

// Create the redux store with the reducers and the middleware.
const store = createStore(reducers, middleware)

// Use getRoutes to fetch all module routes as one tree.
const routes = getRoutes(application, store)

// The root DOM element to render the routes under.
const rootElement = document.querySelector('#root')

// Connect the router with the store and render the routes.
render(
  <Provider store={store} key="Application">
    <HashRouter>
      <div>
        {routes}
      </div>
    </HashRouter>
  </Provider>,
  rootElement
)