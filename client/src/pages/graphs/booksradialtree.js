import * as d3 from "d3";
import chart from "../../utils/tree.js";
import { useRef, useEffect} from "react";
    // <div className="container-fluid" style={{display:"block", margin:"auto"}}>
    //     <div ref={svg}></div>
    // </div>
    // Code for the graph



const RadialTree = () => {

    const svg=useRef(null)
    useEffect(() => {
        if (svg.current) {
            svg.current.appendChild(chart)
        }

    }, [])

    return (
    <div className="container-fluid" style={{display:"block", margin:"auto"}}>
        <div ref={svg}></div>
    </div>
    )   
}

export default RadialTree