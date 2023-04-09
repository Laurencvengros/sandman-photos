import Navigation from '../components/Navigation'
import React, { useEffect } from 'react';
import { MDBCol, MDBRow,} from 'mdb-react-ui-kit';
import '../Styles/imagePages.css'
import Footer from '../components/Footer';
import fitnessMain from '../assets/gym-shoots/FitnessMain.jpg'
import { col1 } from '../Data/gymShootsData'
import { col2 } from '../Data/gymShootsData'
import { col3 } from '../Data/gymShootsData'


export default function App() {
  useEffect(() => {
    window.scrollTo({top:0, left:0, behavior: 'instant'});
  }, []);
  return (
    <React.Fragment>
     <Navigation/>
      <div className="imageHeader">
            <img className='headerimg' src={fitnessMain} alt={fitnessMain} />
          </div>
          <div className="gallarySummary" >
            <h4 style={{fontFamily: 'Sofia Sans '}}> FITNESS</h4>
            <div className='summaryText'>
              <p style={{fontFamily: 'Sofia Sans Condensed'}} >
                Fitness has always been a large part of my life. I have met a lot
                of amazing people through fitness. I have been fortunte enough to 
                grab some images for a few of those people. This gallary is a small 
                sample of those amazing individuals.
              </p>
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