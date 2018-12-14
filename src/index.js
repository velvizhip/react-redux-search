import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './components/header';
import Main from './components/main';
import './style.css';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import rootReducer from './reducers/reducer';
const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(rootReducer)

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

render( <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
