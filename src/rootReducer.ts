import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

const reducer = combineReducers({
  router: connectRouter(history),
})

export default reducer
