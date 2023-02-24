import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
    
  return (
    
    <div> 
       
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"data-spy="affix" data-offset-top="197">
    <Container>
      <Link to={'/Home'}>
      <button className='btn btn-dark'>EPIC GAMES</button>
      </Link>
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link to={'/Home/about'}>
            <button  className='btn btn-dark'>About Us</button>
          </Link>
          <Link to={'/Home/newrelease'}>
          <button className='btn btn-dark'>New Releases</button>
          </Link>
          <Nav.Link href="#pricing"></Nav.Link>
          <Link to={'/Home/ourgames'}>
          <button className='btn btn-dark'>Our Games</button>
          </Link>
          <Nav.Link href="#features">Login</Nav.Link>
          <Link to={'/Home/register'}>
          <button className='btn btn-dark'>Register</button>
          </Link>
         
        </Nav>
        <Nav>
          <Link to={'./Home/deals'}>
          <button className='btn btn-info btn-lg'>All In! Deals</button>&nbsp;
          </Link>
          
          <Link to={'/Home/submit'}>
          <button className='btn btn-danger btn-lg'>Sumbit Your Game</button>
          </Link>
         
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  
  
  )
}

export default Header