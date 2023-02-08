import React from "react";
import {  FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";
import { IconContext } from "react-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Home.css'


function Footer() {
    return (
        <React.Fragment>
        <IconContext.Provider value={{ color: 'rgb(88, 131, 117)', size: '2em' }}>
        <footer className="footer" >
        <div className='footerIcons'>
                                <a style={{marginRight:"30px"}} href= 'mailto:AlexSteinkamp22@gmail.com'>
                                    <FaEnvelope/>

                                </a>
                            
                                <a style={{marginRight:"30px"}}  href= 'https://instagram.com/sandman.photos'>
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