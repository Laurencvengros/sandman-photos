
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation"
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
      </Router>
      <Footer/>
    
    </div>
    
  );
}

export default App;
