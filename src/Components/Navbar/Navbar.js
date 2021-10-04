import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="header">
             <Container>
         <div className="nabBrand">
           <img  src="../../storytelling.png" alt="" />
           <h5 className="text-white">ILM CORNER</h5>
         </div> 
         <Nav className="justify-content-between ">
           <Link className="text-white" exact to="/home">
            Home
            </Link>
          <Link className="text-white" exact to="/about">
          About us
          </Link>
          <Link className="text-white" exact to="/courses">
          Courses
          </Link>
          <Link className="text-white" exact to="/join">
         Join Now
          </Link>
          </Nav>
          
</Container> 
        </div>
    );
};

export default Navbar;