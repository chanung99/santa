import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Loading from './components/Loading';
import Nav from './components/Nav';
import Wrapper from './components/Wrapper';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper></Wrapper>
        <Nav></Nav>
                
      </div>
    );
  }
}

export default App;