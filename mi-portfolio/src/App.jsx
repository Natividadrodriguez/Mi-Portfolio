import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./Components/HomePage/HomePage"; 
import Carrousel from "./Components/Carrousel/Carrousel"; 
import PortfolioPage from "./Components/PortfolioPage/PortfolioPage";
import './app.css'

const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        
       
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </Router>
  );
}

export default App;
