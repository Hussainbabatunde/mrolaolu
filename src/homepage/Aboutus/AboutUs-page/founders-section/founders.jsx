import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-icons'
import {BsLinkedin } from "react-icons/bs";
import {BsArrowRightShort} from "react-icons/bs"
import '../aboutUs.css';
import image1 from '../img/cofo-1.png';
import image2 from '../img/cofo-2.png';
import image3 from '../img/cofo-3.png';
import image4 from '../img/cofo-4.png';
import image5 from '../img/cofo-6.png';
import image6 from '../img/cofo-11.png';
import image7 from '../img/cofo-13.png';
import image8 from '../img/cofo-14.png';
import image9 from '../img/cofo-20.png';
import image10 from '../img/cofo-28.png';

function founders (){
    return(
       <body>
            {/* <!-- Founders section --> */}
            <section className="founders ">
                <div className="container ">
                    <h2 className="mb-5 pt-lg md mt-5">Our Founders</h2>
                    <div></div>
                    <div className="about-us-team mx-auto mx-w-7xl row">
                        <div className="member col-md">
                            <div className="member-img  mb-3">
                                <img src={image1} alt="cofo-1" srcSet="" className="w-75"/>
                                <BsArrowRightShort className="arrowLink h1"/>
                            </div>
                            <div className="member-info text-center text-info">
                                <p className="h4" style={{color: "#156B8A"}}><strong>Rahul Shingal</strong> </p>
                                <p className="h6"><strong> CHIEF EXECUTIVE OFFICER</strong></p>
                                <p style={{color: "#156B8A"}} className="fs-7"> Linked <BsLinkedin/></p>

                            </div>
                        </div>
                        <div className="member col-md">
                            <div className="member-img mb-3"> 
                                <img src={image2} alt="cofo-2" srcset="" className="w-75"/>
                                <BsArrowRightShort className="arrowLink"/>
                            </div>
                            <div className="member-info text-center text-info">
                                <p className="h4" style={{color: "#156B8A"}}><strong> Saroj Maril</strong></p>
                                <p className="h6"><strong>CHIEF OPERATING OFFICER</strong></p>
                                <p style={{color: "#156B8A"}} className="fs-6 "> Linked <span> <BsLinkedin className="fs-7"/></span></p>
                            </div>
                        </div>
                        <div className="member col-md">
                            <div className="member-img  mb-3">
                                <img src={image3} alt="cofo-3" srcset="" className="w-75"/>
                                <BsArrowRightShort className=" arrowLink"/>
                            </div>
                            <div className="member-info text-center text-info">
                                <p className="h4" style={{color: "#156B8A"}}><strong> Arul Marihal</strong></p>
                                <p className="h6"><strong>CHIEF TECHNOLOGY OFFICER</strong></p>
                                <p style={{color: "#156B8A"}}>  Linked <BsLinkedin/></p>
                            </div>
                        </div>
                    </div>
            
                    {/* <!-- Team section --> */}

                    <h2 className="my-5 pt-lg md ">Our Awesome Team</h2>
                    <div></div>
                    <div className="about-us-team mx-auto mx-w-7xl row">
                        <div className="member col-md">
                            <div className="member-img  mb-3">
                                <img src={image4}  alt="cofo-1" srcset="" className="w-75"/>
                            </div>
                            <div className="member-info text-center text-info">
                                <p className="h4" style={{color: "#156B8A"}}><strong>Aakash Deep Bhagat</strong> </p>
                                <p className="h6"><strong>CHIEF EXECUTIVE OFFICER</strong></p>
                                <p style={{color: "#156B8A"}}> Linked <BsLinkedin/></p>

                            </div>
                        </div>
                        <div className="member col-md">
                            <div className="member-img mb-3">
                                <img src={image5} alt="cofo-2" srcset="" className="w-75"/>
                            </div>
                            <div className="member-info text-center text-info">
                                <p className="h4" style={{color: "#156B8A"}}><strong>Aditya Wibowo</strong></p>
                                <p className="h6"><strong>GROWTH MARKETING MANAGER</strong></p>
                                <p style={{color: "#156B8A"}}> Linked <BsLinkedin/></p>
                            </div>
                        </div>
                        <div className="member col-md">
                            <div className="member-img  mb-3">
                                <img src={image6}  alt="" srcset="" className="w-75"/>
                            </div>
                            <div className="member-info text-center text-info">
                                <p className="h4" style={{color: "#156B8A"}}><strong>Akshay Ananth</strong></p>
                                <p className="h6"><strong>OPERATIONS MANAGER</strong></p>
                                <p style={{color: "#156B8A"}}> Linked <BsLinkedin/></p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- TEAM 2 --> */}
                    <div className="about-us-team mx-auto mx-w-7xl row my-5">
                        <div className="member col-md">
                            <div className="member-img  mb-3">
                                <img src={image7} alt="cofo-1" srcset="" className="w-75"/>
                            </div>
                            <div className="member-info text-center text-info">
                                <p className="h4" style={{color: "#156B8A"}}><strong>Aakash Deep Bhagat</strong> </p>
                                <p className="h6"><strong>CHIEF EXECUTIVE OFFICER</strong></p>
                                <p style={{color: "#156B8A"}}> Linked <BsLinkedin/></p>

                            </div>
                        </div>
                        <div className="member col-md">
                            <div className="member-img mb-3">
                                <img src={image9}  alt="cofo-2" srcset="" className="w-75"/>
                            </div>
                            <div className="member-info text-center text-info">
                                <p className="h4" style={{color: "#156B8A"}}><strong>Aditya Wibowo</strong></p>
                                <p className="h6"><strong>GROWTH MARKETING MANAGER</strong></p>
                                <p style={{color: "#156B8A"}}> Linked <BsLinkedin/></p>
                            </div>
                        </div>
                        <div className="member col-md">
                            <div className="member-img  mb-3">
                                <img src={image9}  alt="" srcset="" className="w-75"/>
                            </div>
                            <div className="member-info text-center text-info">
                                <p className="h4" style={{color: "#156B8A"}}><strong>Akshay Ananth</strong></p>
                                <p className="h6"><strong>OPERATIONS MANAGER</strong></p>
                                <p style={{color: "#156B8A"}}> Linked <BsLinkedin/></p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Team 3 --> */}
                    <div className="about-us-team mx-auto mx-w-7xl row">
                        <div className="member col-md">
                            <div className="member-img  mb-3">
                                <img src={image5}  alt="cofo-1" srcset="" className="w-75"/>
                            </div>
                            <div className="member-info text-center text-info">
                                <p className="h4" style={{color: "#156B8A"}}><strong>Aakash Deep Bhagat</strong> </p>
                                <p className="h6"><strong>CHIEF EXECUTIVE OFFICER</strong></p>
                                <p style={{color: "#156B8A"}}> Linked <BsLinkedin/></p>

                            </div>
                        </div>
                        <div className="member col-md">
                            <div className="member-img mb-3">
                                <img src={image7}  alt="cofo-2" srcset="" className="w-75"/>
                            </div>
                            <div className="member-info text-center text-info">
                                <p className="h4" style={{color: "#156B8A"}}><strong>Aditya Wibowo</strong></p>
                                <p className="h6"><strong>GROWTH MARKETING MANAGER</strong></p>
                                <p style={{color: "#156B8A"}}> Linked <BsLinkedin/></p>
                            </div>
                        </div>
                        <div className="member col-md">
                            <div className="member-img  mb-3">
                                <img src={image8}  alt="" srcset="" className="w-75"/>
                            </div>
                            <div className="member-info text-center text-info">
                                <p className="h4" style={{color: "#156B8A"}}><strong>Akshay Ananth</strong></p>
                                <p className="h6"><strong>OPERATIONS MANAGER</strong></p>
                                <p style={{color: "#156B8A"}}> Linked <BsLinkedin/></p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Team 4 --> */}
                    <div className="about-us-team mx-auto mx-w-7xl row">
                        <div className="member col-md">
                            <div className="member-img  mb-3">
                                <img src={image4}  alt="cofo-1" srcset="" className="w-75"/>
                            </div>
                            <div className="member-info text-center text-info">
                                <p className="h4" style={{color: "#156B8A"}}><strong>Aakash Deep Bhagat</strong> </p>
                                <p className="h6"><strong>CHIEF EXECUTIVE OFFICER</strong></p>
                                <p style={{color: "#156B8A"}}> Linked <BsLinkedin/></p>

                            </div>
                        </div>
                        <div className="member col-md">
                            <div className="member-img mb-3">
                                <img src={image5} alt="cofo-2" srcset="" className="w-75"/>
                            </div>
                            <div className="member-info text-center text-info">
                                <p className="h4" style={{color: "#156B8A"}}><strong>Aditya Wibowo</strong></p>
                                <p className="h6"><strong>GROWTH MARKETING MANAGER</strong></p>
                                <p style={{color: "#156B8A"}}> Linked <BsLinkedin/></p>
                            </div>
                        </div>
                        <div className="member col-md">
                            <div className="member-img  mb-3">
                                <img src={image7} alt="" srcset="" className="w-75"/>
                            </div>
                            <div className="member-info text-center text-info">
                                <p className="h4" style={{color: "#156B8A"}}><strong>Gopi Raman</strong></p>
                                <p className="h6"><strong>SOFTWARE ENGINEER</strong></p>
                                <p style={{color: "#156B8A"}}> Linked <BsLinkedin/></p>
                            </div>
                        </div>
                    </div>
                        {/* <!-- Team 5 --> */}
                    <div className="about-us-team mx-auto mx-w-7xl row">
                        <div className="member col-md">
                            <div className="member-img  mb-3">
                                <img src={image9}  alt="cofo-1" srcset="" className="w-75"/>
                            </div>
                            <div className="member-info text-center text-info">
                                <p className="h4" style={{color: "#156B8A"}}><strong>Kunal Goyal</strong> </p>
                                <p className="h6"><strong>HEAD OF OPERATIONS</strong></p>
                                <p style={{color: "#156B8A"}}> Linked <BsLinkedin/></p>

                            </div>
                        </div>
                        <div className="member col-md">
                            <div className="member-img mb-3">
                                <img src={image10}  alt="cofo-2" srcset="" className="w-75"/>
                            </div>
                            <div className="member-info text-center text-info">
                                <p className="h4" style={{color: "#156B8A"}}><strong>Aditya Wibowo</strong></p>
                                <p className="h6"><strong>GROWTH MARKETING MANAGER</strong></p>
                                <p style={{color: "#156B8A"}}> Linked <BsLinkedin/></p>
                            </div>
                        </div>
                        <div className="member col-md">
                            <div className="member-img  mb-3">
                                <img src={image5}  alt="" srcset="" className="w-75"/>
                            </div>
                            <div className="member-info text-center text-info">
                                <p className="h4" style={{color: "#156B8A"}}><strong>Kanupriya Sharda</strong></p>
                                <p className="h6"><strong>HEAD OF GROWTH</strong></p>
                                <p style={{color: "#156B8A"}}> Linked <BsLinkedin/></p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Escrow link  --> */}
                    <div className="my-5 text-center escrow-link p-lg-4 ">
                        <div className=" p-4">
                            <h2 className="text-light fs-sm-5">Protect your cross-border trades with Tazapay's escrow today</h2>
                            <a className="btn btn-lg mt-4 escrow-btn" href="#escrow" type="button" role="button"><strong>Protect my transactions</strong> </a>
                        </div>
                    </div>
                </div>
            </section>
       </body>
    );
}
export default founders;