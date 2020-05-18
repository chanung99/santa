import React, { Component } from 'react';
import '../App.css';
import Arrow from '../img/arrow.png';

class Intro extends Component {
    render() {

        return (
            <div class="introDuce">
                <div class="context">
                    <p>{this.props.context}</p>
                    <div class="home">
                    <a href="/" onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangeHome();

                    }.bind(this)}><img src={Arrow} /></a>
                </div>
                </div>
                
            </div>
        );
    }
}

export default Intro;