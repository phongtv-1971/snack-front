import * as React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Provider as StoreProvider } from 'react-redux'
import Routes from './routes'
import configureStore, { history } from './store'

const store = configureStore()

const App = () => (
  <StoreProvider store={store}>
    <ConnectedRouter history={history}>
      <React.Suspense fallback={<div>loading...</div>}>
        <Routes />
      </React.Suspense>
    </ConnectedRouter>
  </StoreProvider>
)

export default App
