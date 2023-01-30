import "./about.css"


const About = () => {

    return (
        <div className="container-wrapper">
            <div className="container about">
                <div className="row text-center pt-5">
                    <h3>What We Do</h3>
                </div>

                <div className="row">

                    <div className="col-sm-12 col-md-6">
                        <div className="row text-center">
                            <h4 className="section-title">Data Gathering</h4>
                        </div>
                        <div className="row">
                            <p>
                            &emsp;We gather data from various sources such as public datasets, APIs, and web scraping. We also have the capability to integrate with various data sources to collect data in real-time. We process and clean the data to ensure it is accurate and relevant. We understand that data can be in different formats, that's why we process and clean the data to ensure it is accurate and relevant. This includes removing any duplicates, correcting any errors, and structuring the data to make it easy to use. Our data quality assurance process ensures that the data is accurate, relevant and ready for analysis.
                            </p>    
                        </div>
                    </div>
                </div>

                <div className="row justify-content-end">

                    <div className="col-sm-12 col-md-6">
                        <div className="row text-center">
                            <h4 className="section-title">Data Interpretation</h4>
                        </div>
                        <div className="row">
                            <p>
                            &emsp;We understand that data can be overwhelming, that's why we provide a clear and accurate interpretation of the data, making it easy for anyone to understand. We go through the data and extract the most important information, highlighting the key findings and insights. Our goal is to make data accessible and easy to understand for everyone, regardless of their technical background. We strive to provide valuable insights and improve decision making by providing easy to understand data interpretation.
                            </p>    
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="col-sm-12 col-md-6">
                        <div className="row text-center">
                            <h4 className="section-title">Data Presentation</h4>
                        </div>
                        <div className="row">
                            <p>
                            &emsp;We present the data in a visually appealing and interactive format. We use cutting-edge visualization technologies to create dynamic and engaging visualizations that can be integrated into websites and other digital platforms. Our visualizations are designed to be highly interactive and enable users to explore data in ways that are not possible with traditional static charts and graphs.
                            </p>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;