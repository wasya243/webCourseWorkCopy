import React, { Component } from 'react';
import './App.css';

import Header from './containers/Header';
import Footer from './components/Footer';
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Main/>
          <Footer/>
      </div>
    );
  }
}

export default App;
