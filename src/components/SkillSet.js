import React, { Component } from 'react';
import '../style/SkillSet.css';
class SkillSet extends Component {
    render() {
        var data = this.props.selected_skill;
        var tab = document.getElementsByClassName("skillTab");
        var set = document.getElementsByClassName("skillSet");
        var front = document.getElementsByClassName("front");
        window.onload = function () {
            var front = document.getElementById("1");
            var back = document.getElementById("2");
            var ect = document.getElementById("3");
            console.log(front);


            if (data == '1') {
                front.style.border = "1px solid #0c4da2";
                console.log("프론트");
            }
            if (data == '2'){
                back.style.border = "1px solid #0c4da2";
                console.log("백");
            }
            if (data == '3'){
                ect.style.border = "1px solid #0c4da2";
            }
        }



        return (
            <div className="skillSet">
                {data}
                <ul>
                    <li><a id="1" className="skillTab front" href="/" onClick={function (e) {
                        e.preventDefault();
                        console.log(this);
                        this.props.onChangePage("1");
                    }.bind(this)} >Front Skill</a></li>

                    <li><a id="2" className="skillTab" href="/" onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangePage("2");
                    }.bind(this)}>BackEnd Skill</a></li>

                    <li><a id="3" className="skillTab" href="/" onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangePage("3");
                    }.bind(this)}>etc</a></li>

                </ul>
            </div>
        );
    }
}


export default SkillSet;