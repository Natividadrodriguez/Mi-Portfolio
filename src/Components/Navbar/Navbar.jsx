import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import { Link } from 'react-router-dom';

function MyNavbar () {

  
  return (
    <Navbar expand="sm" className="MyNavbar justify-content-center">
      <Container className='justify-content-center'>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
          <Nav className="text-center">
          <Link to="/" className="nav-link">Inicio</Link>
            <Nav.Link href="#sobremi">Sobre Mi</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#proyectos">Proyectos</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
           </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;