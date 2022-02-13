import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-icons';
import "../aboutUs.css";
import image from '../img/about-head.png';
function aboutHeadinfo() {
    return(
        <body>
            {/* About-head-info */}
            <section className="section-2 ">
                <div className="container">    
                    <div className="about-head-info">
                        <img src={image} alt="headerImg" className="image-fluid top-img d-md-50"/>
                        <p className="text-dark lead"><strong>We are Tazapay, a Singapore-based B2B startup enabling 
                        trust in cross-border trade for small and medium-sized businesses (SMBs). 
                        It combines the latest financial tech and services to make international trade safe and simple.</strong></p>
                        <p className="text-dark lead "><strong>We believe the world will look very different after this pandemic, 
                        as it did after the second world war and the financial crisis of 2008. 
                        We foresee a gigantic acceleration towards digitalization in the B2B space. 
                        B2B digitization has lagged behind its B2C peers due to an inability to vet partners, 
                        hold money in escrow, manage terms and conduct KYC and AML.
                        Our platform aims to unlock these extremely complex and valuable B2B flows.</strong></p>
                        <p className="text-dark lead"><strong> Tazapay is a member of the Singapore FinTech Association. 
                        Our founders bring over 50 years of experience from prominent, 
                        high-growth fintech and service companies around the world. 
                        Our team is a bunch of geeks enthusiastic about solving a real and complex problem.</strong></p>
                        <h2 className=" p-5 text-center justify-content-between" style={{color: "#156B8A"}}>Learn how our product helps customers secure thier trades and
                            thier businesses
                        </h2>
                        <div className="text-center " style={{backgroundColor: "#e3ebee;"}}>
                            <a href="jj" className="fs-5 " >Learn about Tazapay Escrow</a>
                        </div>

                    </div>
                </div>
            </section>

        </body>        
    );
}

export default aboutHeadinfo;