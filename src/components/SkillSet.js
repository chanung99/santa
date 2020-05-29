import React, { Component } from 'react';   
import '../style/SkillSet.css';
class SkillSet extends Component{
    render(){
        return(
            <div className ="skillSet">

                <ul>
                    <li><a href="/" onClick={function(e){
                        e.preventDefault();
                        this.props.onChangePage("1");
                    }.bind(this)} >Front Skill</a></li>

                    <li><a href="/" onClick={function(e){
                        e.preventDefault();
                        this.props.onChangePage("2");
                    }.bind(this)}>BackEnd Skill</a></li>

                    <li><a href="/" onClick={function(e){
                        e.preventDefault();
                        this.props.onChangePage("3");
                    }.bind(this)}>etc</a></li>
                    
                </ul>
            </div>
        );
    }
}


export default SkillSet;