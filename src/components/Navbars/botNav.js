import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';

const BottomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom">
      <Navbar.Brand href="#home">My App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default BottomNavbar;
