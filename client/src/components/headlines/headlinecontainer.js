
import  RadialTreeImage from "../../assets/images/radialtreebooks.png";
import "./headlines.css"
import React from 'react';

const Headliners = () => {



    return (
        <div className="container">
            <div className="row align-items-center" style={{height: "700px"}}>
                <div className="col--sm-12 col-md-6 text-center">
                    <h1>Unleashing The Power Of Data Through Visualization</h1>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                        <img src={RadialTreeImage} className="img-fluid" height="400px" width="400px" />
                        </div>
                    </div>
                    <div className="row text-center mt-5">
                        <button className="main-graph-button shadow">View Our Most Popular Graph Here</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Headliners