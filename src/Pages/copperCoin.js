import Navigation from '../components/Navigation'
import React, { useEffect } from 'react';
import { MDBCol, MDBRow,} from 'mdb-react-ui-kit';
import '../Styles/imagePages.css'
import Footer from '../components/Footer';
import copperMain from '../assets/copper-coin/copperCoinMain.jpg'
import { col1 } from '../Data/copperCoinData'
import { col2 } from '../Data/copperCoinData'
import { col3 } from '../Data/copperCoinData'



export default function App() {
  useEffect(() => {
    window.scrollTo({top:0, left:0, behavior: 'instant'});
  }, []);
  return (
    <React.Fragment>
     <Navigation/>
      <div className="imageHeader">
            <img className='headerimg' src={copperMain} alt={copperMain} />
          </div>
          <div className="gallarySummary" >
            <h4 style={{fontFamily: 'Sofia Sans '}}> COPPER COIN TATTOO</h4>
            <div className='summaryText'>
              <p style={{fontFamily: 'Sofia Sans Condensed'}} >
              Had the honor of taking some of the amazing tattoo shop in Grand Rapids called the 
              Copper Coin. A beautiful shop with some amazing artist. 
              <br></br><br></br>
              Check them out: <a href="https://www.coppercointattoo.com/index.html" target="_blank">COPPER COIN TATTOO</a></p>
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

