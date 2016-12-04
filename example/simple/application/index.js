const { getRoutes, getReducers } = require('..')

const BlogModule = require('./modules/Blog')

const reducers = require('./reducers')
const routes = require('./routes')

module.exports = {
    name: 'Application',

    modules: [ BlogModule ],

    reducers,
    routes
}