import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './rootReducer'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

const __DEV__ = process.env.NODE_ENV === 'development'
export const history = createBrowserHistory()

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
      !__DEV__
        ? {
            stateSanitizer: (state: any) => {
              const sanitizedState = { ...state }
              Object.keys(sanitizedState).map((key) => {
                if (sanitizedState[key] && sanitizedState[key].entities) {
                  sanitizedState[key] = {
                    ...sanitizedState[key],
                    entities: '<<ENTITIES>>',
                  }
                }
              })
              return sanitizedState
            },
          }
        : {}
    )
  : compose

export default function configureStore() {
  const middlewares: ReadonlyArray<any> = [routerMiddleware(history)]
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  )
}
