import * as d3 from "d3"
import chart from "../utils/tree.js";
import { useEffect, useRef } from "react";
import NavBar from "../layouts/navbar.js";
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
                <NavBar />
        
            </div>
        </>
    )
}

export default Home 