import Navigation from '../components/Navigation'
import React, { useEffect } from 'react';
import { MDBCol, MDBRow,} from 'mdb-react-ui-kit';
import '../Styles/imagePages.css'
import Footer from '../components/Footer';
import germanyMain from '../assets/Germany-2022/germanyMain.jpg'
import { col1 } from '../Data/germanyData'
import { col2 } from '../Data/germanyData'
import { col3 } from '../Data/germanyData'



export default function App() {
  useEffect(() => {
    window.scrollTo({top:0, behavior: 'instant'});
  }, []);
  return (
    <React.Fragment>
     <Navigation/>
        <div className="imageHeader">
            <img className='headerimg' src={germanyMain} alt={germanyMain} />
          </div>
          <div className="gallarySummary" >
            <h4 style={{fontFamily: 'Sofia Sans '}}> GERMANY 2022</h4>
            <div className='summaryText'>
              <p style={{fontFamily: 'Sofia Sans Condensed'}} >
              This was my first trip to Germany. It was always on the top of my list to
              visit due to my family originally coming from Germany generations ago. We were able
              to get to many places during our time in the country. Berlin, Munich, and Southern Bavaria 
              to name a few. Many historical areas and buildings that have great importance in the history
              of Germany itself.  </p>
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