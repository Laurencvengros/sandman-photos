
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation"
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Professional from './components/Professional';

function App() {
  return (
    <div className="App">
      <Router>
      
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/professional' element={<Professional/>}/>
        </Routes>
      </Router>
    
    
    </div>
    
  );
}

export default App;
