import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './rootReducer'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'

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
  const sagaMiddleware = createSagaMiddleware()
  const middlewares: ReadonlyArray<any> = [
    sagaMiddleware,
    routerMiddleware(history),
  ]

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  sagaMiddleware.run(rootSaga)

  return store
}
