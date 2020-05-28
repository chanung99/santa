import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.css';
import Wrapper from './components/Wrapper';
import About from './components/About'; 
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        
      
    } 
  }

  render() {
    return (

      <div className="App">
        
        <Wrapper></Wrapper>
        <About></About>
                
      </div>
    );
  }
}

export default App;