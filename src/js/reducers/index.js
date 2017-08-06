import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import locations from 'locationReducer'
import reports from 'reportReducer'

export default combineReducers({
  locations,
  reports,
  routing : routerReducer,
})
