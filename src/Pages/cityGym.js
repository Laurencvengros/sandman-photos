import Navigation from '../components/Navigation'
import React, { useEffect } from 'react';
import { MDBCol, MDBRow,} from 'mdb-react-ui-kit';
import '../Styles/imagePages.css'
import Footer from '../components/Footer';
import GRCGMain from '../assets/GRCG/GRCGMain.jpg'
import { col1 } from '../Data/grcgData'
import { col2 } from '../Data/grcgData'
import { col3 } from '../Data/grcgData'



export default function App() {
  useEffect(() => {
    window.scrollTo({top:0, left:0, behavior: 'instant'});
  }, []);
  return (
    <React.Fragment>
     <Navigation/>
      <div className="imageHeader">
            <img className='headerimg' src={GRCGMain} alt={GRCGMain} />
          </div>
          <div className="gallarySummary" >
            <h4 style={{fontFamily: 'Sofia Sans '}}> GRAND RAPIDS CITY GYM</h4>
            <div className='summaryText'>
              <p style={{fontFamily: 'Sofia Sans Condensed'}} >
              Grand Rapids City Gym was releasing a new line of apparel. Of course the launch of a 
              new clothing line requires new pictures sporting the new apparel. 
              <br></br><br></br>
              Check them out: <a href="https://grandrapidscitygym.com/" target="_blank">GRAND RAPIDS CITY GYM</a></p>
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