import React from "react";
import {  FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";
import { IconContext } from "react-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Home.css'
import '../Styles/Footer.css'


function Footer() {
    return (
        <React.Fragment>
        <IconContext.Provider value={{ color: 'rgb(88, 131, 117)', size: '2em' }}>
        <footer className="footer" >
        <div className='footerIcons'>
            <a href= 'mailto:alex@sandmanphotography.com'>
                <FaEnvelope/>
            </a>
            <a href= 'https://instagram.com/sandman.photos'>
                <FaInstagram/> 
            </a>
            <a href= 'https://www.facebook.com/profile.php?id=100089348201674'>
               <FaFacebook/> 
            </a>
        </div>
    
       
    </footer>
    </IconContext.Provider>
        </React.Fragment>
      );
    }

export default Footer;