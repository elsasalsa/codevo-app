import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './css/header.css';
import Home from './Company/Home';
import Service from './Company/Service';
import Product from './Company/Product';
import About from './Company/About';
import Contact from './Company/Contact';
import { Link } from 'react-scroll';

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="sticky-navbar">
        <Container>
          <Navbar.Brand href="/">Codevo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="custom-nav">
              <Link to="services" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
                Services
              </Link>
              <Link to="products" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
                Products
              </Link>
              <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
                About
              </Link>
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <div id="home">
        <Home />
      </div>
      <div id="services">
        <Service />
      </div>
      <div id="products">
        <Product />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default Header;
