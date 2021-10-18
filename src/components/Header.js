import React from 'react';
import { Navbar, Container, Nav, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import useAuth from '../Context/useAuth';
import logo from './logo.png'

const Header = () => {
    const {user,logOut} = useAuth()  
    return (
        <div>
            <Navbar className="sticky-top" bg="primary" expand="lg">
            <Container>
                <Navbar.Brand className="text-white" href="#"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                  
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px',color: 'white' }}
                    navbarScroll
                >
                    
                  <NavLink className="text-white text-decoration-none mt-2 px-4" to="/home">Home</NavLink>
                  <NavLink className="text-white text-decoration-none mt-2 px-4" to="/about">About</NavLink>
                  <NavLink className="text-white text-decoration-none mt-2 px-4" to="/details">Details</NavLink>
                  
                  <h6  className="mt-2 mx-3 h-25 text-black">{user?.email && user.email}</h6>
                  
                    {user?.email? (<Button className="bg-danger rounded px-4" onClick={logOut} variant="primary">LogOut</Button>) : (<Nav.Link as={HashLink} className="text-white bg-danger rounded px-4" to="/login">Login</Nav.Link>) }
                 
                </Nav>
               
               
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;