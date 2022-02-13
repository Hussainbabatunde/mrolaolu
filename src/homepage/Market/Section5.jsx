import React from 'react';
import {MdOutlineVerifiedUser} from 'react-icons/md';
import "./section2.css";
import sequi from './images/sequ.png';
import rtp from "./images/rtp.svg";
import jan from "./images/jan.svg";
import saison from "./images/saison.png";

export default function Section5() {
  return (<div>
    <div className='binded'>
    <div className='veried'>
        <p><MdOutlineVerifiedUser/></p>
        </div>
        <h2 className='veried1'>Trusted platform for B2B transactions</h2>
        <p className='veried2'>Your money is securely handled by an institution licensed and regulated by the Monetary Authority of Singapore (MAS), Rapyd. As per MAS requirements, all customer funds are safeguarded and held with an authorised bank in Singapore.</p>
        <p className='veried2'>Tazapay is licensed in Canada (through its wholly owned subsidiary Tazapay Canada Corp).FINTRAC Money Services Business (MSB) license number M21439799.</p>
        <p style={{textAlign:"center"}}>Backed by leading investors</p>
        <div style={{display: "flex",flexWrap:"wrap", justifyContent:"space-between", paddingBottom:"40px"}}>
        <img src={sequi} className="sec5logo1" style={{width:"145px", height:"30px", marginLeft:"30px"}}/>
        <img src={rtp} className="sec5logo" style={{width:"203px", height:"auto"}}/>
        <img src={jan} className="sec5logo" style={{width:"206px", height:"auto"}}/>        
        <img src={saison} className="sec5logo2" style={{width:"76px", height:"30px", marginRight:"30px"}}/>
        </div>
    </div>
  </div>);
}
