import * as d3 from "d3"
import chart from "../utils/tree.js";
import { useEffect, useRef } from "react";
const Home = () => {

    const svg=useRef(null)
    useEffect(() => {
        if (svg.current) {
            svg.current.appendChild(chart)
        }

    }, [])

    return (
        <>
            <div>
                <div className="container-fluid" style={{display:"block", margin:"auto"}}>
                <div ref={svg}></div>
                </div>
            </div>
        </>
    )
}

export default Home 