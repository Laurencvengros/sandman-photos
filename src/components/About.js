import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import WebFont from 'webfontloader';
import '../Styles/Home.css'
import '../Styles/About.css'
import equiptmentImg from '../assets/Equipment_Image.jpg'

WebFont.load({
    google: {
      families: ['Sofia Sans Condensed']
    }
  });

function About(){
    return(
        <React.Fragment >
            <Navigation/>
            <div className="about-container">
                <Container style={{fontFamily: 'Sofia Sans Condensed'}}>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                                <strong className="about-header" > Alex Steinkamp</strong>
                                    <div className='text-block'>
                                        <p style={{fontFamily: 'Sofia Sans Condensed'}} >
                                            Alex is a lifestyle, landscape, and street photographer based in 
                                            Grand Rapids, Michigan. Inspired his youth by Ansel Adams, he uses 
                                            photography to capture the beauty from every day sights to spectacular 
                                            landscapes and everything in between. Bringing unique perspectives and 
                                            vision through all of his work.
                                        </p>
                                        <p>
                                            The name Sandman comes from a group of college buddies that listened to 
                                            Metallica together. Each one in the group named themselves after a song.
                                            Over the years, Enter Sandman turned from a college nickname into a 
                                            permanent alias.
                                        </p>
                                    </div>
                                    <strong className="list-header"> My Gear:</strong>
                                    <ul className="list">
                                        <li>Sony a7iii</li>
                                        <li>Sony 24mm f/1.4</li>
                                        <li>Sony 28-70mm f/3.5-5.6</li>
                                        <li>Sigma 85mm f/1.4</li>
                                        <li>Sigma 100-400mm f/5-6.3</li>
                                        <li>DJI Mavic 2 Pro</li>
                                        <li>Polar Pro CPL/VND</li>
                                        <li>Lexas SD Cards</li>    
                                    </ul>
                        </Col>
                        

                    </Row>
                    <img className='img-fluid equiptment-img' src={equiptmentImg} alt='equiptment'/>
                </Container>
                </div>
                        
                     
            <Footer/>
        </React.Fragment>
        
    )
    
};

export default About;