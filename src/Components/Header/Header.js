import React from 'react';
import {   Container, Nav, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Header.css'
const Header = () => {
    return (
        <div>
        <div className="container-fluid headerBg"> 
       <Navbar></Navbar>
        
          
<div className="col align-items-center heroTxt">
  <h2 className="m-auto  text-white pt-3"> Authentic Islamic Knowledge By Qualified Scholars</h2>
<p className="m-auto text-white py-3">Boost your understanding of Islam at the comfort of your home!</p>
</div>

<Stack gap={3}>
  <div className="text-warning bg-light rounded p-3  m-auto"><h3>6000+</h3> Students </div>
  <div className="text-warning bg-light rounded p-3 m-auto"> <h3>150+</h3> Qualified Teachers</div>
  <div className="text-warning bg-light rounded p-3 m-auto mb-3"> <h3>15+</h3> From 15+ Countries</div>
</Stack>
</div>

         
            
        </div>
    );
};

export default Header;