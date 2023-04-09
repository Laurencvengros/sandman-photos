import Navigation from '../components/Navigation'
import React, { useEffect } from 'react';
import { MDBCol, MDBRow,} from 'mdb-react-ui-kit';
import '../Styles/imagePages.css'
import Footer from '../components/Footer';
import michMain from '../assets/GrandRapids/GRMain.jpg'
import { col1 } from '../Data/grData'
import { col2 } from '../Data/grData'
import { col3 } from '../Data/grData'



export default function App() {
  useEffect(() => {
    window.scrollTo({top:0, left:0, behavior: 'instant'});
  }, []);
  return (
    <React.Fragment>
     <Navigation/>
        <div className="imageHeader">
            <img className='headerimg' src={michMain} alt={michMain} />
          </div>
          <div className="gallarySummary" >
            <h4 style={{fontFamily: 'Sofia Sans '}}> MICHIGAN</h4>
            <div className='summaryText'>
              <p style={{fontFamily: 'Sofia Sans Condensed'}} >
              Welcome to my collection of images from around Michigan. Being from 
              the state, I get out around Michigan the most. This gallary 
              contains a lot of images from various seasons and contains a lot of 
              different styles of street, liftestyle, architectural, and business shots.   </p>
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
