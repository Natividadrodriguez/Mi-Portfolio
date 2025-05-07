import React from 'react';
import './Portfoliopage.css'
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
    <section className="container" id="sobremi">
     <div className="row">
      <div className='col-12 col-md-6 d-flex flex-column justify-content-center align-items-start' >
        <h2 className="mb-3">Sobre mi</h2>
        <p>Soy Natividad, Técnica en Laboratorio y estudiante de Desarrollo Fullstack. Tras varios años en el ámbito de la salud, decidí dar el salto al mundo de la programación. Mi pasión por aprender y mi gusto por desarrollar nuevas habilidades me han llevado a formarme en desarrollo web, y ahora estoy lista para enfrentar nuevos desafíos y seguir creciendo.</p>

         <div className="social-links col-12 d-flex justify-content-center" style={{marginBottom: '15px'}}>

<a href="mailto:tu-correo@gmail.com" target="_blank" rel="noopener noreferrer"  style={{ marginLeft: '10px', marginRight: '10px' }}>
  <img src={linkedinIcon} alt="Linkedin" width="25" height="25" className="icon-hover" />
  </a>


      <a href="https://github.com/Natividadrodriguez" target="_blank" rel="noopener noreferrer"  style={{ marginLeft: '10px', marginRight: '10px' }}>
  <img src={githubIcon} alt="Github" width="25" height="25" className="icon-hover" />
  </a>
      

      <a href="mailto:natividad.m1990@gmail.com" target="_blank" rel="noopener noreferrer"  style={{ marginLeft: '10px', marginRight: '10px' }}>
  <img src={gmailIcon} alt="Gmail" width="32" height="25" className="icon-hover" />
  </a>
</div>
      </div>
     

      <div className='col-12 col-md-6 mb-3'>
      <img src={foto} alt="Mi foto" className="img-fluid" style={{borderRadius: '8px'}} />
      </div>
     </div>
  
    </section>

    <section className="container" id="skills">
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

    <section className="container" id="proyectos">
      <div className="row">
        <h2 className="mb-5">Proyectos</h2>
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center flex-wrap" style={{ gap: '30px' }} >

   <div className="row justify-content-center mb-3 mb-md-0">

    <Card className="proyectos mb-4 mb-md-0" style={{ width: '18rem', margin: '0px 20px', borderRadius: '8px' }}>
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
        <Card.Title>Pay2Win</Card.Title>
        <Card.Text>
        Aplicación inspirada en Steam, desarrollada con React. Desde la sección de administración (accesible tras iniciar sesión), se puede gestionar el contenido: agregar, editar o eliminar juegos. La aplicación utiliza React Router para la navegacion entre secciones y Firebase para la autenticación de usuarios.
        </Card.Text>
        <a 
  href="https://pay2win-two.vercel.app/" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="my-button"
>
  Visitar
</a>
      </Card.Body>
    </Card>
          </div>

        

<div className="row justify-content-center">
<Card className="proyectos" style={{ width: '18rem', margin: '0px 20px',borderRadius: '8px'  }}>
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
        <Card.Title>Movielife+</Card.Title>
        <Card.Text>
        Movielife+ es una página web de práctica que emula una plataforma de streaming. Desarrollada con HTML, CSS y Bootstrap, la página ofrece una interfaz dinámica y responsiva, permitiendo a los usuarios navegar por una selección de contenido de forma fácil y visualmente atractiva.
        </Card.Text>
        <a 
  href="https://movielifeplus.netlify.app/" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="my-button"
>
  Visitar
</a>
      </Card.Body>
    </Card>
            
</div>

 
    </div>
   
        
      </div>
      
    </section>

    <section className="container" id="contacto">
      <div className="row">
        <h2 className="mb-5">Contacto</h2>
<div className='col-12 col-md-4 text-center mb-4'>
<a href="mailto:natividad.m1990@gmail.com" target="_blank" rel="noopener noreferrer">
        <img src={gmailIcon} alt="Gmail" width="38" height="32" className="mb-2 icon-hover" />
      </a>
<p>natividad.m1990@gmail.com</p>
</div>

<div className='col-12 col-md-4 text-center mb-4'>
<a href="http://www.linkedin.com/in/rodrigueznatividad" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" width="32" height="32" className="mb-2 icon-hover" />
      </a>
      <p>/rodrigueznatividad</p>
</div>

<div className='col-12 col-md-4 text-center mb-4'>
<a href="https://github.com/Natividadrodriguez" target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub" width="32" height="32" className="mb-2 icon-hover" />
      </a>
      <p>/Natividadrodriguez</p>
</div>

      </div>
    </section>
    
    </>
  );
}

export default PortfolioPage;