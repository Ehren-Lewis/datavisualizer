import graphinformation from "../../data/graphdata.json"
import radialTreeImg from "../../assets/images/radialtreebooks.png"
import {LinkContainer} from "react-router-bootstrap"
import './graphhome.css'
import React from "react"
const GraphHome = () => {

    return (


        <div className="container my-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    
                    Object.values(graphinformation).map(ele => {
                        return (

                            <div className="col" key={ele.title}>
                            
                                <div className="card h-100 text-center">
                                    <img src={radialTreeImg} className="card-img-top" alt={ele.imgdescription} />
                                    <div className="card-title">
                                        <p>{ele.title}</p>
                                    </div>
                                    <p className='card-text'>{ele.info}</p>
                                    <LinkContainer to={ele.url}>
                                        <a className="stretched-link travel-link py-2" href="#">View Graph</a>
                                    </LinkContainer>
                                </div>
                                

                            </div>
                        )
                    })
                 
                }
            </div>
        </div>

    )
}

export default GraphHome;