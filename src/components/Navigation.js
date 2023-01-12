import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/Navbar.css'
import WebFont from 'webfontloader';

function Navigation(){

return (



    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
       <Container className="header" >
       <NavLink className='logo' to="/home" >*LOGO*</NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="ms-auto tab" >
               
                 <NavLink className='tabs' to="/professional" >Professional</NavLink>
                 <NavLink className='tabs' to="/personal" >Personal</NavLink>
                 <NavLink className='tabs' to="/about" >About</NavLink>
                 <NavLink className='tabs' to="/contact" >Contact</NavLink>
             </Nav>
           </Navbar.Collapse>
        </Container>
     </Navbar>
   );
};

export default Navigation;