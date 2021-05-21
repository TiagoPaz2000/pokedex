import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GitHubIcon from '../images/github-icon.png';

function Footer() {
  return (
    <Navbar bg="light" expand="lg" sticky="bottom">
      <Nav className="mr-auto">
        <Nav.Link><Link to="/">Home</Link></Nav.Link>
        <Nav.Link href="https://pokeapi.co/" target="_blank">PokeApi</Nav.Link>
        <Nav.Link href="https://github.com/TiagoPaz2000" target="_blank"><p>Made by Tiago Paz</p></Nav.Link>
        <Nav.Link href="https://github.com/TiagoPaz2000" target="_blank">
          <img src={ GitHubIcon } alt="github icon" width="60px"/>
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Footer;