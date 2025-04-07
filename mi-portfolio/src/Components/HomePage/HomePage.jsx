import React from 'react';
import { Button } from 'react-bootstrap';
import Carrousel from '../Carrousel/Carrousel';
import fotoperfil from '../Assets/1743984844011.png'
import './HomePage.css'

const HomePage = () => {
    return (
      <div className="home-page">
        <Carrousel /> 
  
        
        <div className="overlay">
          <img
            src={fotoperfil} 
            alt="Natividad Rodriguez"
            className="profile-photo"
          />
          <h1 className="name">Tu Nombre</h1>
          <Button href="/portfolio" className="portfolio-button">Ir al Portfolio</Button> {/* Redirige al portfolio */}
        </div>
      </div>
    );
  }
  
  export default HomePage;