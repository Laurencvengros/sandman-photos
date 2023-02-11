import Navigation from '../components/Navigation'
import React from 'react';
import {MDBContainer, MDBCol, MDBRow,} from 'mdb-react-ui-kit';
import '../Styles/copperCoin.css'
import GRCG1 from '../assets/GRCG/GRCG_1.jpg'
import GRCG2 from '../assets/GRCG/GRCG_2.jpg'
import GRCG3 from '../assets/GRCG/GRCG_3.jpg'
import GRCG4 from '../assets/GRCG/GRCG_4.jpg'
import GRCG5 from '../assets/GRCG/GRCG_5.jpg'
import GRCG6 from '../assets/GRCG/GRCG_6.jpg'
import GRCG7 from '../assets/GRCG/GRCG_7.jpg'
import GRCG8 from '../assets/GRCG/GRCG_8.jpg'

export default function App() {
  return (
    <React.Fragment>
    <Navigation/>
    <MDBRow className='margins'>
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
        <img
          src={GRCG1}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />

        <img
          src={GRCG2}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Wintry Mountain Landscape'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src={GRCG3}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Mountains in the Clouds'
        />

        <img
          src={GRCG4}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src={GRCG5}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Waves at Sea'
        />

        <img
          src={GRCG6}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Yosemite National Park'
        />
      </MDBCol>
    </MDBRow>
    </React.Fragment>
  );
}