import React from 'react';
import { Button } from 'react-bootstrap';
import Carrousel from '../Carrousel/Carrousel';
import './HomePage.css'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';  
import { BsBootstrapFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
      <div className="home-page">
        <Carrousel /> 
  
        
        <div className="overlay">
          <h1 className="name">Natividad Rodriguez</h1>
          <h6>Programadora trainee</h6>
          <h6 style={{ margin: '20px' }}> 
     <FaHtml5 size={40} color="#F16529" />
      <FaCss3Alt size={40} color="#2965F1" />
       <BsBootstrapFill size={40} color="#563D7C" />
       <FaJsSquare size={40} color="#F7DF1E" />
      <FaReact size={40} color="#61DBFB" />
     </h6>
     <Link to="/portfolio"> 
     <button class="my-button">Ir al Portfolio</button>
     </Link>
         
        </div>
      </div>
    );
  }
  
  export default HomePage;