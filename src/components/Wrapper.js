import React, { Component } from 'react';
import '../style/Wrapper.css';

class Wrapper extends Component{
    
    render(){
        return(
            <div className="Wrapper">
                <div className="canvas"></div>
                <div className="text_remote">
                    <div className="intro">
                    안녕하세요, 웹 개발자를 꿈꾸는 <span>왕찬웅</span>입니다.
                    </div>
                    <div className="remote">
                        <span>View my Work</span>
                    </div>
                </div>
                <div className="nav">
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>SKILL</li>
                        <li>PROJECT</li>
                        <li>CONTACT</li>
                        
                    </ul>
                </div>
            </div>
        );
    }
}


export default Wrapper;