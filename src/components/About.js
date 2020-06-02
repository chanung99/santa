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


                
            </div>
        );
    }   
}

export default About;