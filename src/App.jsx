import React, { Component } from 'react';
import './App.css';
import { Header, Content, Footer } from './Layout/index'

class App extends Component {
  render() {
    return (
      <div id="wrap">
        <Header />
        <Content />
        <Footer />
      </div>     
    );
  }
}

export default App;
