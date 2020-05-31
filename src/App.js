import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.css';
import Wrapper from './components/Wrapper';
import About from './components/About'; 
import SkillSet from './components/SkillSet'; 
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        skill: 'front',
        selected_skill : 1 ,
        skillContens : [
          {id:1 , skill : "HTML" , name : "HTML" },
          {id:1 , skill : "CSS" , name : "CSS" },
          {id:1 , skill : "JS" , name : "JS" },
          {id:1 , skill : "JQ" , name : "JQ" },
          {id:1 , skill : "REACT" , name : "REACT" },
          {id:2 , skill : "JAVA" , name : "JAVA" },
          {id:2 , skill : "ORACLE" , name : "ORACLE" },
          {id:3 , skill : "SPRING" , name : "SPRING" },
          {id:3 , skill : "WINDOW" , name : "WINDOW"}
        
        ]
      
    } 
  }


  render() {
    return (
      
      <div className="App">
        
        <Wrapper></Wrapper>
        
        <About data={this.state.skillContens} selected_skill={this.state.selected_skill} onChangePage={function(value){
          this.setState({
            selected_skill : value
          });
        }.bind(this)}></About>
        
                
      </div>
    );
  }
}

export default App;