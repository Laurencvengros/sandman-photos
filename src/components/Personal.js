import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from '../components/Navigation'
import SnowBus from '../assets/GrandRapids/GR_SnowBus.jpg'
import Germany from '../assets/Germany-2022/Tyler.jpg'
import '../Styles/Work.css'
import { Link } from 'react-router-dom';


function Personal(){


    return(
        <React.Fragment>
            <Navigation/>
            <Container fluid className="containers">
                <Row className="row">
                    <Col className="col">
                        <Link to="/grandRapids">
                        
                            <div className="imagebox">
                            <img className=' resize ' src={SnowBus} alt='Snow Bus' />
                                <div className="caption">GRAND RAPIDS</div>
                            </div>
                        </Link>
                    </Col>
                </Row>
                
            </Container>
            <Container fluid className="containers">
                <Row className="row">
                    <Col className="col">
                        <Link to="/germany-2022">
                            
                            <div className="imagebox">
                            <img className=' resize ' src={Germany} alt='Tyler with Mountasin' />
                                <div className="caption">GERMANY 2022</div>
                            </div>
                        </Link>
                    </Col>
                </Row>
                
            </Container>
        </React.Fragment>
        
    )
    
};

export default Personal;