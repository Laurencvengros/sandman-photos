
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation"
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Professional from './components/Professional';
import CopperCoin from './Pages/copperCoin';

function App() {
  return (
    <div className="App">
      <Router>
      
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/professional' element={<Professional/>}/>
          <Route path='/CopperCoin' element={<CopperCoin/>}/>
        </Routes>
      </Router>
    
    
    </div>
    
  );
}

export default App;
