import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../Context/useAuth';
import logo from './logo.png'

const Header = () => {
    const {user,logOut} = useAuth()  
    return (
        <div>
            <Navbar bg="primary" expand="lg">
            <Container>
                <Navbar.Brand className="text-white" href="#"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                  
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px',color: 'white' }}
                    navbarScroll
                >
                    
                  <Nav.Link as={HashLink} className="text-white" to="/home">Home</Nav.Link>
                  <Nav.Link as={HashLink} className="text-white" to="/about">About</Nav.Link>
                  <Nav.Link as={HashLink} className="text-white" to="/details">Details</Nav.Link>
                  <h6  className="mt-2 mx-3 h-25">{user?.email && user.email}</h6>
                  
                    {user?.email? (<Button className="bg-danger rounded px-4" onClick={logOut} variant="primary">LogOut</Button>) : (<Nav.Link as={HashLink} className="text-white bg-danger rounded px-4" to="/login">Login</Nav.Link>) }
                 
                </Nav>
               
               
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;