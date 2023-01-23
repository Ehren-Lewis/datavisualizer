import "./navbar.css"


const NavBar = () => {

    return (
        // <div className="container-fluid nav-wrapper">
        <div className="nav navbar navbar-expand-md nav-style">

        <a className="nav-anchor" href="#">DataFyre</a>

            {/* <div className="nav-wrapper"> */}
            {/* <a className="text-light">DataFyre</a> */}

            {/* <div className="nav-wrapper"> */}
            <div className="nav-wrapper">
                <a className="nav-anchor" href="#">Our Charts</a>
                <a className="nav-anchor" href="#">Request Data</a>
                <a className="nav-anchor" href="#">About Us</a>
            </div>
            {/* </div> */}
        </div>

    // </div>
    )
}

export default NavBar