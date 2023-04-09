import Navigation from '../components/Navigation'
import React, { useEffect } from 'react';
import { MDBCol, MDBRow,} from 'mdb-react-ui-kit';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Styles/imagePages.css'
import Footer from '../components/Footer';
import norway1 from '../assets/Norway/norwayMain.jpg'
import { col1 } from '../Data/norwayData'
import { col2 } from '../Data/norwayData'
import { col3 } from '../Data/norwayData'



export default function App() {
  useEffect(() => {
    window.scrollTo({top:0, left:0, behavior: 'instant'});
  }, []);
  return (
    <React.Fragment>
     <Navigation/>
          <div className="imageHeader">
            <img className='headerimg' src={norway1} alt={norway1} />
          </div>
          <div className="gallarySummary" >
            <h4 style={{fontFamily: 'Sofia Sans '}}> NORWAY 2023</h4>
            <div className='summaryText'>
              <p style={{fontFamily: 'Sofia Sans Condensed'}} >
              This was my first trip to Norway but will not be the last. We began with a few days
              in the Lofoten Islands and driving from town to town. Our first stop was in Henningsvær, 
              a little fishing village with an incredible view. When then made our way to Reine during 
              a heavy snowstorm. We also spent a few days in Oslo and Bergen to round out our Norwegian 
              experience. Unfortunately no Northern Lights during our visit. Just another reason to head 
              back to Norway in the future.</p>
            </div>
          </div>
        
     
      <MDBRow className='margins'>
        
          <MDBCol  lg={4} md={10} className='mb-4 mb-lg-0 p-1'>
          {col1.map((col1, k) => (
            <img  key={k}
              src={col1.pic}
              className='w-100 shadow-1-strong mb-2 img-fluid '
              alt={col1.name}
            />
            ))}
          </MDBCol>
          <MDBCol  lg={4} md={10} className='mb-4 mb-lg-0 p-1'>
          {col2.map((col2, k) => (
            <img  key={k}
              src={col2.pic}
              className='w-100 shadow-1-strong mb-2 img-fluid '
              alt={col2.name}
            />
            ))}
          </MDBCol>
          <MDBCol  lg={4} md={10} className='mb-4 mb-lg-0 p-1'>
          {col3.map((col3, k) => (
            <img  key={k}
              src={col3.pic}
              className='w-100 shadow-1-strong mb-2 img-fluid '
              alt={col3.name}
            />
            ))}
          </MDBCol>
        
        
      </MDBRow>
     <Footer/>
    </React.Fragment>
  );
}

