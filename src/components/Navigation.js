import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/Navbar.css'
import WebFont from 'webfontloader';

WebFont.load({
   google: {
     families: ['Sofia Sans', 'Sofia Sans Condensed']
   }
 });

function Navigation(){

return (



    <Navbar collapseOnSelect expand="lg" className='background'>
       <Container className="header" >
       <NavLink className='logo' to="/sandman-photos" >*LOGO*</NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="ms-auto tab" >
               
                 <NavLink className='tabs' to="/professional" style={{fontFamily: 'Sofia Sans '}}>PROFESSIONAL</NavLink>
                 <NavLink className='tabs' to="/personal" style={{fontFamily: 'Sofia Sans'}} >PERSONAL</NavLink>
                 <NavLink className='tabs' to="/about" style={{fontFamily: 'Sofia Sans '}} >ABOUT</NavLink>
                 <NavLink className='tabs' to="/contact"  style={{fontFamily: 'Sofia Sans '}} >CONTACT</NavLink>
             </Nav>
           </Navbar.Collapse>
        </Container>
     </Navbar>
   );
};

export default Navigation;