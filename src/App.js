import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Loading from './components/Loading';
import Nav from './components/Nav';
import Wrapper from './components/Wrapper';
import Skill from './components/Skill'
import TopHome from './components/TopHome'
import Intro from './components/Intro';
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        about : 'frofile',
        frofile : {
        img : 'sagin.jpg',
        name : '왕 찬 웅',
        job : 'Front-end developer',
        birth : '1999.04.23',
        address : '경기도 고양시 일산서구',
        phone : '010-3250-0423',
        mail : 'chanung5722004@gmail.com'

        },
        context : '어린 시절부터 버튼을 누르면 반응하는것에 관심을 가졌고.. 추후 작성'
      
    }
  }

  getAbout(){
    var _article = null;

    if(this.state.about === 'frofile'){
      _article = <Wrapper onChangeAbout={function(){
        this.setState({
          about : 'skill'
        })
      }.bind(this)} about={this.state.about} name={this.state.frofile.name} job={this.state.frofile.job} birth={this.state.frofile.birth} address={this.state.frofile.address} phone={this.state.frofile.phone} mail={this.state.frofile.mail}></Wrapper>
    }else if(this.state.about === 'skill'){
      _article = <Skill onChangeIntro={function(){
        this.setState({
          about : 'intro'
        });
      }.bind(this)}></Skill>
    }else if(this.state.about === 'intro'){
      _article = <Intro onChangeHome={function(){
        this.setState({
          about : 'frofile'
        });
      }.bind(this)} context={this.state.context}></Intro>
    }
    return _article;
  }

  render() {
    return (

      <div className="App">
        <TopHome></TopHome>
        <Nav></Nav>
        {this.getAbout()}
        
                
      </div>
    );
  }
}

export default App;