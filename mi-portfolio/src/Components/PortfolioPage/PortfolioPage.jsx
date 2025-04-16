import React from 'react';
import './PortfolioPage.css'
import foto from '../Assets/20250414_215517.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import gmailIcon from '../Assets/gmail-icon.png';
import githubIcon from '../Assets/github-icon.png';
import linkedinIcon from '../Assets/linkedin-icon.png';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';  
import { BsBootstrapFill } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const PortfolioPage = () => {
  
  return (
    <>
    <section className="container">
     <div className="row">
      <div className='col-12 col-md-6 d-flex flex-column justify-content-center align-items-start' >
        <h2 className="mb-3">Sobre mi</h2>
        <p>Soy Natividad, Técnica en Laboratorio y estudiante de Desarrollo Fullstack. Tras varios años en el ámbito de la salud, decidí dar el salto al mundo de la programación. Mi pasión por aprender y mi gusto por desarrollar nuevas habilidades me han llevado a formarme en desarrollo web, y ahora estoy lista para enfrentar nuevos desafíos y seguir creciendo.</p>

         <div className="social-links col-12 d-flex justify-content-center" style={{marginBottom: '15px'}}>

<a href="mailto:tu-correo@gmail.com" target="_blank" rel="noopener noreferrer"  style={{ marginLeft: '10px', marginRight: '10px' }}>
  <img src={linkedinIcon} alt="Linkedin" width="25" height="25" />
  </a>


      <a href="https://github.com/Natividadrodriguez" target="_blank" rel="noopener noreferrer"  style={{ marginLeft: '10px', marginRight: '10px' }}>
  <img src={githubIcon} alt="Github" width="25" height="25" />
  </a>
      

      <a href="mailto:natividad.m1990@gmail.com" target="_blank" rel="noopener noreferrer"  style={{ marginLeft: '10px', marginRight: '10px' }}>
  <img src={gmailIcon} alt="Gmail" width="32" height="25" />
  </a>
</div>
      </div>
     

      <div className='col-12 col-md-6 mb-3'>
      <img src={foto} alt="Mi foto" className="img-fluid" style={{borderRadius: '8px'}} />
      </div>
     </div>
  
    </section>

    <section className="container">
      <div className="row">
        <h2 className="mb-3">Skills</h2>
        <p>Estas son las tecnologías que he ido aprendiendo hasta ahora. Actualmente me encuentro en formación continua, ampliando mis conocimientos día a día, con el objetivo de crecer como desarrolladora y sumar nuevas herramientas a mi perfil.</p>

     <div className='d-flex col-12 justify-content-center'>
       <h6 style={{ margin: '20px' }}> 
     <FaHtml5 size={40} color="#F16529" style={{margin: '5px'}} />
      <FaCss3Alt size={40} color="#2965F1"style={{margin: '5px'}} />
       <BsBootstrapFill size={40} color="#563D7C"style={{margin: '5px'}} />
       <FaJsSquare size={40} color="#F7DF1E"style={{margin: '5px'}} />
      <FaReact size={40} color="#61DBFB" style={{margin: '5px'}}/>
     </h6>
     </div>
      </div>
    </section>

    <section className="container">
      <div className="row">
        <h2 className="mb-5">Proyectos</h2>
        <div className="d-flex col-12 justify-content-center mb-4">
        <Card className="proyectos" style={{ width: '18rem', margin: '0px 20px' }}>
        <div style={{ height: '180px', overflow: 'hidden' }}>
    <iframe
      src="https://pay2win-two.vercel.app/"
      title="Pay2Win"
      style={{
        width: '100%',
        height: '100%',
        border: 'none',
        borderRadius: '4px',
      }}
    />
  </div>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className="proyectos" style={{ width: '18rem', margin: '0px 20px' }}>
    <div
  style={{
    height: '180px',
    overflow: 'hidden',     
    borderRadius: '4px',
  }}
>
  <iframe
    src="https://movielifeplus.netlify.app/"
    title="Movielife+"
    style={{
      width: '100%',
      height: '100%',
      border: 'none',
    }}
    scrolling="no"
  />
</div>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
      </div>
      
    </section>
    
    </>
  );
}

export default PortfolioPage;