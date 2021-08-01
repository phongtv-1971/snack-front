import * as React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Provider as StoreProvider } from 'react-redux'
import configureStore, { history } from './store'

const store = configureStore()

const App = () => (
  <StoreProvider store={store}>
    <ConnectedRouter history={history}>
      <h1>Hello</h1>
    </ConnectedRouter>
  </StoreProvider>
)

export default App
