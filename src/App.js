import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.css';
import  Wrapper from './components/Wrapper';
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
                
      </div>
    );
  }
}

export default App;