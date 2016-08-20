import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'

import { createStore, applyMiddleware } from 'redux'
const reducers = require('../reducers');

module.exports = function(initialState) {
  const store = createStore(reducers, initialState, applyMiddleware(promiseMiddleware(), logger()))

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
