
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation"
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Professional from './components/Professional';
import Personal from './components/Personal'
import CopperCoin from './Pages/copperCoin';
import GrandRapids from './Pages/grandRapids'

function App() {
  return (
    <div className="App">
      <Router>
      
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/professional' element={<Professional/>}/>
          <Route path='/personal' element ={<Personal/>}/>
          <Route path='/CopperCoin' element={<CopperCoin/>}/>
          <Route path='/GrandRapids' element={<GrandRapids/>}/>
          
        </Routes>
      </Router>
    
    
    </div>
    
  );
}

export default App;
