import React, { Component } from 'react';
import '../style/SkillSet.css';
class SkillSet extends Component {

    skill(){
        var data = this.props.selected_skill;
        
        if(data==1){
            
        }else if(data==2){

        }else if(data==3){

        }
    }

    render() {
        this.skill();
        var data = this.props.selected_skill;
        let classNamest = 'skillTab';
        let classNamend = 'skillTab';
        let classNamerd = 'skillTab';
        if (data == 1) {
            classNamest += ' front';    
        }else if(data==2){
            classNamend += ' back'; 
        }else if(data==3){
            classNamerd += ' ect'; 
        }
          
            return<div className="skillSet">
                
                <ul>
                    <li><a id="1" className={classNamest} href="/" onClick={function (e) {
                        e.preventDefault();
                        console.log(this);
                        this.props.onChangePage("1");
                    }.bind(this)} >Front Skill</a></li>

                    <li><a id="2" className={classNamend} href="/" onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangePage("2");
                    }.bind(this)}>BackEnd Skill</a></li>

                    <li><a id="3" className={classNamerd} href="/" onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangePage("3");
                    }.bind(this)}>etc</a></li>

                </ul>
            </div>
        
    }
}


export default SkillSet;