import React, { Component } from 'react';
import '../App.css';
class Nav extends Component{
    render(){
        return(
           <div class="nav">
               <div class="nav-left nav-trans">
                    <h3>About</h3>
               </div>
               <div class="nav-right nav-trans-right">
                   <h3>chanung5722004@gmail.com</h3>
               </div>
           </div>
        );
    }
}

export default Nav;