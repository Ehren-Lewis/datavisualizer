import * as d3 from "d3"


import chart from "../utils/tree.js";
import { useEffect, useRef } from "react";
import Headliners from "../components/headlines/headlinecontainer.js";
import About from "../components/about/about.js";
const Home = () => {

    const svg=useRef(null)
    useEffect(() => {
        if (svg.current) {
            svg.current.appendChild(chart)
        }

    }, [])


    // <div className="container-fluid" style={{display:"block", margin:"auto"}}>
    //     <div ref={svg}></div>
    // </div>
    // Code for the graph
    return (
        <>
            <div>
                <Headliners />
                <About />
            </div>
        </>


    )
}

export default Home 