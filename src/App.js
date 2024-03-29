
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation"
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Professional from './components/Professional';
import Contact from './components/Contact'
import Personal from './components/Personal'
import CopperCoin from './Pages/copperCoin';
import GrandRapids from './Pages/grandRapids'
import Germany from './Pages/germany2022'
import GRCG from './Pages/cityGym'
import GymShoots from './Pages/gymShoots'
import Norway2023 from './Pages/norway2023'

function App() {
  return (
    <div className="App">
      <Router>
      
        <Routes>
          <Route path="/sandman-photos"  element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/professional' element={<Professional/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/personal' element ={<Personal/>}/>
          <Route path='/CopperCoin' element={<CopperCoin/>}/>
          <Route path='/GrandRapids' element={<GrandRapids/>}/>
          <Route path='/germany2022' element={<Germany/>}/>
          <Route path='/cityGym' element={<GRCG/>}/>
          <Route path='/gymShoots' element={<GymShoots/>}/>
          <Route path='/norway2023' element={<Norway2023/>}/>


          
        </Routes>
      </Router>
    
    
    </div>
    
  );
}

export default App;
