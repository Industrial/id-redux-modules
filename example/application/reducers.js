const immutable = require('seamless-immutable')

const initializeDefaultState = immutable({
})

module.exports = {
  initialize: (state = initializeDefaultState, action) => {
    switch (action.type) {
      case 'something':
        return state
          .merge({
            things: true
          })

      default:
        return state
    }
  },
}