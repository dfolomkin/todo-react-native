import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './src/app/reducers'
import Main from './src/app/main'

const store = createStore(reducer)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}
