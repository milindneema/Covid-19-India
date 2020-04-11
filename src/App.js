import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Country from './components/CountryComponent'

function App() {
  return (
    <div className="container-fluid mt-3">
      <Navbar dark radius="10px" color='primary' className="mb-2">
        <div>
          <NavbarBrand href='/' className="font-weight-bold">Covid-19-India</NavbarBrand>
        </div>
      </Navbar>
      <Country />

    </div>
  );
}

export default App;
