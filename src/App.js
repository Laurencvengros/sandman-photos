
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation"
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
      
        <Routes>
        <Route path="/"  element={<Home/>}/>
        </Routes>
      </Router>
    
    
    </div>
    
  );
}

export default App;
