import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from '../components/Navigation'
import copperCoin from '../assets/copper-coin/Copper_Coin_Shop.jpg'
import '../Styles/Work.css'
import { Link } from 'react-router-dom';


function Professional(){


    return(
        <React.Fragment>
            <Navigation/>
            <Container fluid className="containers">
                <Row className="row">
                    <Col className="col">
                        <Link to="/CopperCoin">
                            
                            <div className="imagebox">
                            <img className=' resize ' src={copperCoin} alt='copper coin' />
                                <div className="caption">COPPER COIN</div>
                            </div>
                        </Link>
                    </Col>
                </Row>
                
            </Container>
        </React.Fragment>
        
    )
    
};

export default Professional;