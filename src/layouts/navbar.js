import "./navbar.css"
import { LinkContainer } from "react-router-bootstrap"
import { Link } from "react-router-dom"

const NavBar = () => {

    return (
        // <div className="container-fluid nav-wrapper">
        <div className="nav navbar navbar-expand-md nav-style">
        <LinkContainer to="/">
        <a className="nav-anchor" href="#">DataFyre</a>
        </LinkContainer>

            {/* <div className="nav-wrapper"> */}
            {/* <a className="text-light">DataFyre</a> */}

            {/* <div className="nav-wrapper"> */}
            <div className="nav-wrapper">
            <LinkContainer  to="/graphs">
            <a className="nav-anchor">Our Charts</a>
            </LinkContainer>
                <a className="nav-anchor" href="#">Request Data</a>
                <a className="nav-anchor" href="#">About Us</a>
            </div>
            {/* </div> */}
        </div>

    // </div>
    )
}

export default NavBar