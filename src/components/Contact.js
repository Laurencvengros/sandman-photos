import React, { useState, useRef } from 'react';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { EmailValidator } from '../utils/helper';
import emailjs from '@emailjs/browser';
import WebFont from 'webfontloader';
import { IconContext } from "react-icons";
import {  FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";
import contactPhoto from '../assets/SandmanPhotos_Street.jpg';
import '../Styles/Contact.css'

WebFont.load({
    google: {
      families: ['Sofia Sans Condensed']
    }
  });

function Contact(){

    const [formState, setFormState] = useState({email: '', name: '', message: ''});
    const [contactMessage, setContactMessage]= useState('');

    function handleForm(e) {
        if (e.target.name === 'email'){
            const validEmail = EmailValidator(e.target.value);
            if(!validEmail){
                setContactMessage('Please Enter A Valid Email');
            }else{
                setContactMessage('');
            }
        }else{
            if(!e.target.value.length){
                const name = e.target.name;
                setContactMessage(`${name.charAt(0).toUpperCase()+ name.slice(1)} cannot be blank`)
            }
        }

        if(!contactMessage){
            setFormState({ ...formState, [e.target.name]: e.target.value})
        }
    }
    const form = useRef();

    function emailSender(e){
        e.preventDefault();

        emailjs.sendForm('service_yta3jrp', 'template_w8rd179', form.current, '05H9DAvQJMMh11o3g' )
        .then((response) =>{
            setContactMessage('Sent!');
        }, (error) => {
            setContactMessage('Error sending message, please contact me directly at L.Cvengros@icloud.com');
        })
    }


    return(
        <React.Fragment>
            <Navigation/>
            <div>
                <h1 style={{marginTop: '50px', textAlign: 'center',fontFamily: 'Sofia Sans Condensed', fontSize: '60px'}}> Contact Me</h1>
                <hr style={{height:'3px',color: 'rgb(88, 131, 117)',backgroundColor: 'rgb(88, 131, 117)',width: '60%',marginLeft: 'auto',marginRight: 'auto',}}/>
            </div>
            <Container>
                <Row >
                    <Col sm={12} md={6}>
                        <img className='img-fluid  ' style={{marginTop: '40px', width: '35rem', height: '45rem'}} src={contactPhoto} alt='self portrait' />
                    </Col>
                    <Col sm={12} md={6} style={{marginTop: '80px'}}>
                       
                                <Form onSubmit={emailSender} ref={form}> 
                                    <Form.Group controlId="name">
                                        <Form.Label style={{fontFamily:'Sofia Sans Condensed',  marginTop:'45px', fontSize:'20px'}}>Name</Form.Label>
                                            <Form.Control 
                                                type="text"
                                                placeholder="Your Name"
                                                required name="name" 
                                                onBlur={handleForm}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label style={{fontFamily:'Sofia Sans Condensed', marginTop:'45px',fontSize:'20px'}}>Email address</Form.Label>
                                        <Form.Control
                                            required name="email"
                                        type="email" 
                                        placeholder="Enter email"
                                        onBlur={handleForm}
                                        />
                                        <Form.Text className="text-muted"></Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="message">
                                        <Form.Label style={{fontFamily:'Sofia Sans Condensed',marginTop:'45px', fontSize:'20px', }}>Message</Form.Label>
                                        <Form.Control
                                            required name="message"
                                            type="text"
                                            placeholder="Type Your Message"
                                            as="textarea"
                                            rows={3}
                                            onBlur={handleForm} 
                                        ></Form.Control>
                                    </Form.Group>
                                    

                                    {contactMessage && <p >{contactMessage}</p>}

                                    
                                </Form>
                            
                        <Button className='button' variant="light" type="submit">Submit</Button>
                    </Col>

                   
                </Row>
                <Footer/>
            </Container>
            
      </React.Fragment>
        
    )

    

};

export default Contact;