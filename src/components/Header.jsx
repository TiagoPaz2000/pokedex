import React from 'react';
import { Link } from 'react-router-dom';
import PokemonLogo from '../images/pokemon-logo.png';
import SearchBar from '../components/SearchBar';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/Header.css';

function Header({ data, variant }) {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" className="header-flex">
      <Navbar.Brand>
        <Nav.Link>
          <Link to="/"><img src={ PokemonLogo } alt="pokemon logo" width="150px"/></Link>
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          { variant && <SearchBar data={ data } /> }
          <Nav.Link><Link to="/favorites">Favorites</Link></Nav.Link>
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;