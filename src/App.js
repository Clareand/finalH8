import React, { Component } from 'react';
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from './redux/store'

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Home/>
        </Provider>
      </div>
    );
  }
}

export default App;