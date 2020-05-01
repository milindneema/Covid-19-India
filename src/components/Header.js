import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  NavbarToggler,
  Collapse,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar light radius='10px' color='primary' className='mb-2' expand='md'>
      <NavbarBrand href='/' className='font-weight-bold'>
        Covid-19-India
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='mr-auto' navbar>
          <NavItem>
            <NavLink className='NavLink' to='/india'>
              India
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='NavLink' to='/world'>
              World
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
