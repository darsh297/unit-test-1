import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const Navigationbar = () => {
  return (
    <div>
       <Navbar bg="dark" className='px-3' variant="dark" expand="lg">
        <Navbar.Brand ><Link className="nav-link" to="/">Patient Management System</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link className="nav-link" to="/">Home</Link></Nav.Link>
            <Nav.Link><Link className="nav-link" to="/adddata">AddData</Link></Nav.Link>
            <Nav.Link><Link className="nav-link" to="/patientlist">GetData</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigationbar
