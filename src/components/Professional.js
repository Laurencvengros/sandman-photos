import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from '../components/Navigation'
import copperCoin from '../assets/Copper_Coin_Shop.jpg'
import '../Styles/Professional.css'
import { Link } from 'react-router-dom';


function Professional(){


    return(
        <React.Fragment>
            <Navigation/>
            <Container fluid className="containers">
                <Row className="row">
                    <Col className="col">
                        <Link to="/CopperCoin">
                            <img className=' resize ' src={copperCoin} alt='copper coin' />
                            <div class="middle">
                                <div class="text">Copper Coin</div>
                            </div>
                        </Link>
                    </Col>
                </Row>
                
            </Container>
        </React.Fragment>
        
    )
    
};

export default Professional;