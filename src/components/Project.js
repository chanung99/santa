import React, { Component } from 'react';
import '../style/Project.css';

class Project extends Component{
    render(){
        return(
            <div className="Project">
                <div className="Project_header">
                    <span>Project</span>
                </div>
                <div className="header_bar">

                </div>
                <div className="gall-nav">
                    
                </div>
                <div className="gallery">
                    {/* <ul>
                        <li>ALL</li>
                        <li>HOGALL</li>
                        <li>PICKMATCH</li>
                        <li>여행정보</li>
                    </ul> */}
                    <div className="projectTab">ALL</div>
                    <div className="projectTab">HOGALL</div>
                    <div className="projectTab">PICKMATCH</div>
                    <div className="projectTab">여행정보</div>
                </div>
            </div>
        );
    }
}

export default Project;