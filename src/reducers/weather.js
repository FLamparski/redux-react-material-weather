/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
const initialState = {
  city: 'London',
  weather: null,
  isLoading: false,
  error: null
}

import * as ActionTypes from '../actions/const'

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */

  switch(action.type) {
    case ActionTypes.SET_CITY_NAME: {
      return {
        ...state,
        city: action.parameter
      }
    }
    case ActionTypes.SET_CITY_PENDING: {
      return {
        ...state,
        isLoading: true,
        weather: null
      }
    }
    case ActionTypes.SET_CITY_FULFILLED: {
      return {
        ...state,
        isLoading: false,
        weather: action.payload.query.results.channel.item.condition
      }
    }
    case ActionTypes.SET_CITY_REJECTED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    }
    default: {
      /* Return original state if no actions were consumed. */
      return state
    }
  }
}
