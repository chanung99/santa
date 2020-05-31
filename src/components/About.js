import React, { Component } from 'react';
import SkillSet from '../components/SkillSet'; 
import '../style/About.css';

class About extends Component{
    render(){
        var lists = [];
        var data = this.props.data;
        var num = this.props.selected_skill;
        var i = 0;


        while(i < data.length){
            if(num == data[i].id){
                
                lists.push(<li><div className={`${data[i].skill} skillbox`}></div></li>)

            }

            i = i + 1;
        }

        
        return(
            <div className="About">
                <div className="About_header">
                    <span>About</span>
                </div>
                <div className="header_bar">
                    
                </div>
                <SkillSet onChangePage={function(value){
                    this.props.onChangePage(value);
                }.bind(this)} selected_skill={num}></SkillSet>

                <div className="skillWrap">
                    <ul className="skillUl">
                        {lists}
                    </ul>
                </div>


                {/* <div className="About_text">
                    <span>어린 시절부터 버튼을 누르면 반응하는 것에 재미를 느꼈고, 컴퓨터에 관심을 갖고 개발자를 꿈꾸었습니다.</span>
                </div> */}
                {/* <div className="profile_skill">
                    <div className="profile">
                        <div className="profile_img"></div>
                        <div>제 사진넣을곳</div>
                    </div>
                    <div className="skill">
                        <ul>
                            <li><div className="HTML skillBox"></div></li>
                            <li><div className="CSS skillBox"></div></li>
                            <li><div className="JS skillBox"></div></li>
                            <li><div className="JQ skillBox"></div></li>
                            <li><div className="JAVA skillBox"></div></li>
                            <li><div className="ORACLE skillBox"></div></li>
                            <li><div className="SPRING skillBox"></div></li>
                            <li><div className="REACT skillBox"></div></li>
                        </ul>
                    </div>  
                </div> */}
            </div>
        );
    }   
}

export default About;