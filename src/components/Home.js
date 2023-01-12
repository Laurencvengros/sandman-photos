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


function Home() {
    return (
      <React.Fragment>
        <IconContext.Provider value={{ color: 'black', size: '2em' }}>
            <Container fluid>
                    <Row >
                        <Col xs={12} sm={12} md={6} >
                            <img className='img-fluid '  src={homePhoto} alt='self portrait' />
                        </Col>
                        <Col xs={12} sm={12} md={6} className='heading'>Sandman Photos
                            <div className="margin">
                                <Link className="links" to="/professional">Professional</Link>
                                <Link className="links" to="/personal">Personal</Link>
                                <Link className="links" to="/about">About</Link>
                                <Link className="links" to="/contact">Contact</Link>
                            </div>
                            <div className='homeIcons'>
                                <a style={{marginRight:"30px"}} href= 'mailto:l.cvengros@icloud.com'>
                                    <FaEnvelope/>

                                </a>
                            
                                <a style={{marginRight:"30px"}}  href= 'https://github.com/Laurencvengros'>
                                    <FaInstagram/> 
                                </a>
                            
                                <a href= 'https://www.linkedin.com/in/lauren-cvengros-a00957249/'>
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