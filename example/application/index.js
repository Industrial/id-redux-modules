module.exports = {
  name: 'Application',

  modules: [ require('./modules/blog') ],

  reducers: require('./reducers'),
  routes: require('./routes'),
}