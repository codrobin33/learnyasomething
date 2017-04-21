import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import counter from './reducer.jsx'
let store = createStore(counter)

import Calculator from './Calculator.jsx';

class App extends Component {
  render() {
    return (
      <Calculator />
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
