import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from '../components/Navigation'
import copperCoin from '../assets/copper-coin/Copper_Coin_Shop.jpg'
import '../Styles/Work.css'
import { Link } from 'react-router-dom';
import WebFont from 'webfontloader';
import Footer from '../components/Footer';
import '../Styles/Home.css';
import data from '../Data/professionalData.js'



WebFont.load({
   google: {
     families: ['Sofia Sans', 'Sofia Sans Condensed']
   }
 });

// const data =[
//     {
//     id: 1,
//     name: "COPPER COIN",
//     view:'/copperCoin',
//     pic: copperCoin,
//     }
// ]



function Professional(){


    return(
    
         <React.Fragment>
             <Navigation/>
            <Container fluid className="containers">
                
                {data.map((data, k) => (
                    <Row >
                    <Col key={k} className="col">
                        <Link to={data.view}>
                            
                            <div className="imagebox">
                             <img className=' resize ' src={data.pic} alt={data.name} />
                                <div className="caption" style={{fontFamily: 'Sofia Sans Condensed'}}>{data.name}</div>
                             </div>
                         </Link>
                     </Col>
                     </Row>
                ))}
                 
                
            </Container>
             <Footer/>
         </React.Fragment> 
        
    )
    
};

export default Professional;