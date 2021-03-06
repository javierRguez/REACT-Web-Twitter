import React from 'react'
import { init } from '@rematch/core'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import * as models from './models'
import App from './App'

const store = init({ models })

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
