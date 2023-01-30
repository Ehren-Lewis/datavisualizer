import "./footer.css"


const Footer = () => {

    return (
        <div className="container-fluid footer-color pt-5">
        {/* <div className="space-lg"></div> */}
        <hr />
            <div className="row">
                <div className="col-6 d-flex">
                    <p>DataFyer</p>
                </div>
                {/* <div className="col-6 d-flex justify-content-end">
                <p>2342 Berry Dr, San Francisco, California</p>
                </div> */}
            </div>
   
            <div className="row text-center d-flex justify-content-around">
                <div className="col-sm-6 col-md-3 mt-3">
                <ul>
                    <li className="list-title">ABOUT</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>FAQ</li>
                </ul>
                </div>
                <div className="col-sm-6 col-md-3 mt-3">
                <ul>
                    <li className="list-title">SERVICES</li>
                    <li>Request our Data</li>
                    <li>Dependencies</li>
                    <li>Contribute to DataFyer</li>
                </ul>
                    
                </div>

                {/* <div className="col-sm-6 col-md-3 mt-3">
                <ul>
                    <li className="list-title">FOLLOW</li>
                    <li>@PrecisionMachinery on Instagram</li>
                    <li>@PrecisionMachinery on Twitter</li>
                    <li>@PrecisionMachinery on Linkedin</li>
                    <li>@PrecisionMachinery on Facebook</li>

                </ul>
                    
                </div> */}
            </div>
            <div className="mt-4"></div>
            <div className="row">
                <div className="col-sm-12 col-md-3 copyright d-flex justify-content-md-end">
                    <p><span>&copy;</span>DataFyer All Rights Reserved</p>
                </div>
                <div className='col-sm-12 col-md-3 copyright'>
                    <button>Privacy</button>
                    <button>Terms</button>
                </div>
            </div>
        </div>
    )
}

export default Footer;