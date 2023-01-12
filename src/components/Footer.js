import React from "react";
import {  FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";
import { IconContext } from "react-icons";
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
    return (
        <React.Fragment>
        <IconContext.Provider value={{ color: 'black', size: '2em' }}>
        <footer className="footer" >
            <div style={{display: 'block',textAlign: 'center',lineHeight: '100px',marginTop: '291px',}}>
                <a style={{marginRight:"30px"}} href= 'mailto:l.cvengros@icloud.com'>
                     <FaFacebook/>
                </a>
            
                <a style={{marginRight:"30px"}}  href= 'https://github.com/Laurencvengros'>
                     <FaInstagram/> 
                </a>
            
                <a href= 'https://www.linkedin.com/in/lauren-cvengros-a00957249/'>
                <FaEnvelope/> 
                </a>
            </div>
    
       
    </footer>
    </IconContext.Provider>
        </React.Fragment>
      );
    }

export default Footer;