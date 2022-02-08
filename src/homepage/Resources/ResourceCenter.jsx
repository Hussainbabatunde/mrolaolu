import React from 'react';
import Form from './form/Form';
import Articles from './Articles/Articles';
import './ResourceCenter.css';
import Footer from '../Market/Section6'

function ResourceCenter(){
    const date = new Date();
    const year = date.getFullYear();
    return (<div>
                <section className = 'topSection'>         
                    {/* Topbar */}
                    <h1>Resource Center</h1>
                </section>
            <section>
                <div className='firstDiv'>
                    <h3>Your Resources on International Trade and Payment</h3>
                    <p>Read Tazapay's blog and subscribe to our newsletter for useful content
                    on international trade and payment</p>
                </div>
                <div className = 'containerFluid row'>
                <div className='left1 col-lg-6'>
                        <a href='#'>
                        <img className = 'leftImg' src='https://tazapay.ghost.io/content/images/2022/01/Online-B2B-Payment-Trends.jpg' alt='alld'></img>
                        <div className='leftText'>
                        <p className='textColor'> B2B Payment</p>
                        <h2 className='headingColor'>Online B2B Payment Trends in Singapore 2022</h2>
                        <p className='textColor'>Singapore's a digitally literate nation eith an 88.9% imternet penetration 
                        and a 97,9% financial inclusion rate amongst the 5,87 million people that...</p>                
                        </div>
                        </a>
                        <span className='year'>Jan 28, {year}</span>
                        <span className='minutes'>10 min of read</span>
                </div>
                    {/* <div ></div> */}
                    <div className='col-lg-6'>
                        <Form />
                    </div>
                </div>
                <div className='sectionArticle'>
                    <Articles />
                </div>
                </section>
        
        <Footer />
    </div>
        
    )

}
export default ResourceCenter;