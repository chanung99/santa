import React, { Component } from 'react';
import '../App.css';
import jQuery from "jquery";
import $ from "jquery";
import Html from "../img/html.png";
import Css from "../img/css.png";
import Js from "../img/js.png";
import Jquery from "../img/jquery.png";
import Reactree from "../img/react.png";
import Java from "../img/java.png";
import Oracle from "../img/oracle-icon.png";
import Spring from "../img/spring.jpg";
import Window from "../img/window.png";
import Arrow from '../img/arrow.png';

class Skill extends Component {
    render() {

        return (
            <div class="Gray">
                <div class="About">
                    <div class="my_skill">
                        {/* <ul>
                            <li><div class="skill_image icon" id="html"></div><p>HTML</p></li>
                            <li><div class="skill_image icon" id="css"></div><p>CSS</p></li>
                            <li><div class="skill_image icon" id="javascript"></div><p>JavaScript</p></li>
                            <li><div class="skill_image icon" id="jquery"></div><p>jQuery</p></li>
                            <li><div class="skill_image icon" id="react"></div><p>React</p></li>
                            <li><div class="skill_image icon" id="java"></div><p>JAVA</p></li>
                            <li><div class="skill_image icon" id="oracle"></div><p>Oracle</p></li>
                            <li><div class="skill_image icon" id="spring"></div><p>Spring</p></li>
                            <li><div class="skill_image icon" id="window"></div><p>Window</p></li>


                        </ul> */}

                        <div class="snipWrap">
                            <figure class="snip1200">
                                <img src={Html} alt="sq-sample27" />
                                <figcaption>
                                    <p>Basic</p>
                                    <div class="heading">
                                        <h2>HTML<span> </span></h2>
                                    </div>
                                </figcaption>
                                <a href="#"></a>
                            </figure>

                            <figure class="snip1200">
                                <img src={Css} alt="sq-sample27" />
                                <figcaption>
                                    <p>Basic</p>
                                    <div class="heading">
                                        <h2>CSS<span> </span></h2>
                                    </div>
                                </figcaption>
                                <a href="#"></a>
                            </figure>

                            <figure class="snip1200">
                                <img src={Js} alt="sq-sample27" />
                                <figcaption>
                                    <p>Basic</p>
                                    <div class="heading">
                                        <h2>JavaScript<span> </span></h2>
                                    </div>
                                </figcaption>
                                <a href="#"></a>
                            </figure>

                            <figure class="snip1200">
                                <img src={Jquery} alt="sq-sample27" />
                                <figcaption>
                                    <p>Basic</p>
                                    <div class="heading">
                                        <h2>Jquery<span> </span></h2>
                                    </div>
                                </figcaption>
                                <a href="#"></a>
                            </figure>

                            <figure class="snip1200">
                                <img src={Reactree} alt="sq-sample27" />
                                <figcaption>
                                    <p>Basic</p>
                                    <div class="heading">
                                        <h2>React<span> </span></h2>
                                    </div>
                                </figcaption>
                                <a href="#"></a>
                            </figure>

                            <figure class="snip1200">
                                <img src={Java} alt="sq-sample27" />
                                <figcaption>
                                    <p>Basic</p>
                                    <div class="heading">
                                        <h2>Java<span> </span></h2>
                                    </div>
                                </figcaption>
                                <a href="#"></a>
                            </figure>

                            <figure class="snip1200">
                                <img src={Oracle} alt="sq-sample27" />
                                <figcaption>
                                    <p>Basic</p>
                                    <div class="heading">
                                        <h2>Oracle<span> </span></h2>
                                    </div>
                                </figcaption>
                                <a href="#"></a>
                            </figure>

                            <figure class="snip1200">
                                <img src={Spring} alt="sq-sample27" />
                                <figcaption>
                                    <p>Basic</p>
                                    <div class="heading">
                                        <h2>Spring<span> </span></h2>
                                    </div>
                                </figcaption>
                                <a href="#"></a>
                            </figure>


                            <figure class="snip1200">
                                <img src={Window} alt="sq-sample27" />
                                <figcaption>
                                    <p>Basic</p>
                                    <div class="heading">
                                        <h2>Window<span></span></h2>
                                    </div>
                                </figcaption>
                                <a href="#"></a>
                            </figure>

                            <div class="intro">
                                <a href="/" onClick={function (e) {
                                    e.preventDefault();
                                    this.props.onChangeIntro();
                                }.bind(this)}><img src={Arrow} /></a>
                            </div>

                        </div>





                    </div>
                </div>
            </div>
        )
    }
}

export default Skill;