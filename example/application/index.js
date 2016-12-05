// Plain and simple.

const reducers = require('./reducers')
const routes = require('./routes')

const blogModule = require('./modules/blog')

module.exports = {
  name: 'Application',

  modules: [ blogModule ],

  reducers,
  routes,
}