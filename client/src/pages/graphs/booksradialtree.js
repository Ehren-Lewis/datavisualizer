import * as d3 from "d3";
// import chart from "../../utils/tree.js";
import {RadialTreeWrapper} from "../../utils/tree";
import React, { useRef, useEffect} from "react";
import axios from "axios";
    // <div className="container-fluid" style={{display:"block", margin:"auto"}}>
    //     <div ref={svg}></div>
    // </div>
    // Code for the graph



const RadialTree = () => {

    let chart;
    var width = window.innerWidth;
    var height = window.innerHeight ;

    const getBookData = () => {
        axios.get("http://localhost:3001/data_information").then( res => {
            return res.data
        }).catch( err => console.log(err))
    }

    useEffect( () => {
        const bookData = getBookData();

        chart = RadialTreeWrapper.Tree(bookData, {
            label: d => d.value,
            title: (d, n) => `${n.ancestors().reverse().map(d => d.data.value).join(".")}`,
            // link: (d, n) => `https://github.com/prefuse/Flare/${n.children ? "tree" : "blob"}/master/flare/src/${n.ancestors().reverse().map(d => d.data.name).join("/")}${n.children ? "" : ".as"}`,
            width: width,
            height: height,
            margin: 50
        })


    }, []);


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