import Navigation from '../components/Navigation'
import React from 'react';
import { MDBCol, MDBRow,} from 'mdb-react-ui-kit';
import '../Styles/copperCoin.css'
import Footer from '../components/Footer';
import { col1 } from '../Data/germanyData'
import { col2 } from '../Data/germanyData'
import { col3 } from '../Data/germanyData'



export default function App() {
  return (
    <React.Fragment>
     <Navigation/>
     
      <MDBRow className='margins'>
        
          <MDBCol  lg={4} md={10} className='mb-4 mb-lg-0'>
          {col1.map((col1, k) => (
            <img  key={k}
              src={col1.pic}
              className='w-100 shadow-1-strong rounded mb-4 img-fluid '
              alt={col1.name}
            />
            ))}
          </MDBCol>
          <MDBCol  lg={4} md={10} className='mb-4 mb-lg-0'>
          {col2.map((col2, k) => (
            <img  key={k}
              src={col2.pic}
              className='w-100 shadow-1-strong rounded mb-4 img-fluid '
              alt={col2.name}
            />
            ))}
          </MDBCol>
          <MDBCol  lg={4} md={10} className='mb-4 mb-lg-0'>
          {col3.map((col3, k) => (
            <img  key={k}
              src={col3.pic}
              className='w-100 shadow-1-strong rounded mb-4 img-fluid '
              alt={col3.name}
            />
            ))}
          </MDBCol>
        
        
      </MDBRow>
     <Footer/>
    </React.Fragment>
  );
}