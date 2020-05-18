import React, { Component } from 'react';
import '../App.css';
import Banner from './chanungBanner.png';
import jQuery from "jquery";
import $ from "jquery";
import Sagin from './sajin.jpg';
import Block from '../img/block.jpg';
import Arrow from '../img/arrow.png';
class Wrapper extends Component {

    render() {


        return (
            
            <div class="wrapper">

                

                <div class="About">
                    <div class="my_info">
                        
                        <img src={Sagin} />
                        <ul>
                            <li>{this.props.name}</li>
                            <li>{this.props.job}</li>
                            <li>{this.props.birth}</li>
                            <li>{this.props.address}</li>
                            <li>{this.props.phone}</li>
                            <li>{this.props.mail}</li>

                        </ul>
                        
                        <div class="skill">
                            <a href="/" onClick={function(e){
                                e.preventDefault();
                                this.props.onChangeAbout();
                            }.bind(this)}><img src={Arrow}/></a>
                        </div>
                        
                    </div>

                </div>
            </div>
        );
    }
}



export default Wrapper;