import React from 'react';
import '../homepage.css';
import book from './images/book.svg';
import lock from './images/lock.svg';
import Amex from './images/Amex.svg';
import DinersClub from './images/DinersClub.svg';
import JCB from './images/JCB.svg';
import Mastercard from './images/Mastercard.svg';
import Swift from './images/Swift.svg';
import SGpaynow from './images/SGpaynow.svg';
import Visa from './images/Visa.svg';
import UnionPay from './images/UnionPay.svg';

 function Section1_1() {
  return (<div className='row' style={{display: "flex", margin:"0"}}  >
    <div className="writtenwords col-lg-6 " style={{paddingLeft: "90px", paddingRight:"0px"}}>
        <p className='modern'><strong>Modern payments for global platforms</strong></p>
        <p style={{fontSize: "20px", marginTop: "30px"}}>Checkout | Escrow | Treasury</p>
        <div style={{display: "flex", marginTop: "50px"}}>
            <img src={book} alt="starredbook" />
            <div style={{marginLeft: "20px", marginTop: "15px"}}>
            <h4 style={{fontSize: "20px"}}>Licensed and Regulated</h4>
            <p style={{color: "greenyellow"}}>Learn More </p>
            </div>
        </div>
    </div>
    <div className="writtenwords1 col-lg-6" style={{background: "white", color: "rgb(21,107,138)",  borderRadius: "5px", marginTop: "60px", padding:"0", width:"40%"}}>
    <div className="beside">
    <div style={{display: "flex"}}>
        <label>BUYER COUNTRY</label>
        <select>
            <option>Nigeria</option>
            <option>Niger</option>
        </select><hr/>
        </div>
        <div style={{display: "flex"}}>
        <label>SELLER COUNTRY</label>
        <select>
            <option>Nigeria</option>
            <option>Niger</option>
        </select><hr/>
        </div>
        <div style={{display: "flex"}}>
        <label>INVOICE AMOUNT</label>
        <select className='select1'>
            <option>Nigeria</option>
            <option>Niger</option>
        </select>
        <input type="text" />
        </div>
        
    </div>
    <div style={{display:"flex", color: "rgb(21,107,138)", marginTop: "10px"}}>
        <p style={{paddingTop:"20px", paddingLeft:"20px"}}>Payment Amount</p>
        </div>
        <div className='beside1'>
        <div  style={{display: "flex"}}>
        <label>BUYER PAYS</label>
        <select className='select1' style={{ marginTop: "15px"}}>
            <option>Nigeria</option>
            <option>Niger</option>
        </select>
        <input type="text" className="input2" style={{ marginTop: "15px"}}/>
        </div>
        <p className='wordz'><strong>1 USD = 1.36 SGD Indicative Rate</strong></p>
        </div>
        <div style={{display: "flex"}}>
            <img src={lock} alt="padlock" className="image1"/>
            <p style={{fontSize: "14px", fontWeight: "bold", marginLeft: "10px"}}>With Escrow Protection ｜USD 18</p>
        </div>
        <div className='beside2'>
        <div  style={{display: "flex"}}>
        
        <label>SELLER RECEIVES</label>
        
        <select className='select1' style={{ marginTop: "15px"}}>
            <option>Nigeria</option>
            <option>Niger</option>
        </select>
        <input type="text"  style={{ marginTop: "15px"}}/>
        
        </div>
        <p className='wordz'><strong>1 USD = 74.85 INR Indicative Rate</strong></p>
        </div>
        <p className="supported">Supported Payment Methods</p>
        <div style={{display: "flex", justifyContent: "center"}}>
        <img src={Amex} alt="amex" />
        <img src={DinersClub} alt="dinersclub" />
        <img src={JCB} alt="jcb" />
        <img src={Mastercard} alt="mastercard" />
        <img src={SGpaynow} alt="SGpaynow" />
        <img src={Swift} alt="swift" />
        <img src={Visa} alt="visa" />
        <img src={UnionPay} alt="Unionpay" />
        </div>
        <button className="Started">Get Started</button>
    </div>
  </div>);
}

export default Section1_1;
