import React from "react";
import { Link } from "react-router-dom";
import WebFont from 'webfontloader';
import {  FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";
import { IconContext } from "react-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import homePhoto from '../assets/Self_Portrait.jpg';
import '../Styles/Home.css'

WebFont.load({
    google: {
      families: ['Sofia Sans Condensed']
    }
  });


function Home() {
    return (
      <React.Fragment>
        <IconContext.Provider value={{ color: 'rgb(88, 131, 117)', size: '2em' }}>
            <Container fluid className="no-gutters">
                    <Row className="no-gutters">
                        <Col xs={12} sm={12} md={12} lg={6} className="no-gutters">
                            
                             <img className='img-fluid homeImg ' src={homePhoto} alt='self portrait' />
                            
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} >
                            <div className='heading' style={{fontFamily: 'Sofia Sans Condensed'}}>SANDMAN PHOTOGRAPHY</div>
                            <div className="margin">
                                <Link className="links" to="/professional" style={{fontFamily: 'Sofia Sans Condensed'}}>PROFESSIONAL |</Link>
                                <Link className="links" to="/personal" style={{fontFamily: 'Sofia Sans Condensed'}}>PERSONAL |</Link>
                                <Link className="links" to="/about" style={{fontFamily: 'Sofia Sans Condensed'}}>ABOUT |</Link>
                                <Link className="links" to="/contact" style={{fontFamily: 'Sofia Sans Condensed'}}>CONTACT</Link>
                            </div>
                            <div className='homeIcons'>
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

                        </Col>
                    </Row>
                </Container>
        </IconContext.Provider>
      </React.Fragment>
    );
  }
  
  export default Home;