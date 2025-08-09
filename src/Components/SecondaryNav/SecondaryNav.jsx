import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import style from './SecondaryNav.module.css';

const SecondaryNav = () => {
  return (
    <>
        <Navbar>
            <Nav className={`me-auto ${style.navbar}`}>
                <Link to="#">Graphic Design</Link>
                <Link to="">Apps</Link>
                <Link to="">Software</Link>
            </Nav>
        </Navbar>
        
    </>
  )
}

export default SecondaryNav
