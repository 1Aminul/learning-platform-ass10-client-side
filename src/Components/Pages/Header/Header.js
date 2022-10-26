import React, { useContext } from 'react';
import logo from '../../../logo.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextAuth';
import { Button } from 'react-bootstrap';
import {FaUser} from 'react-icons/fa'

const Header = () => {
    const {user, LogOut} = useContext(AuthContext)

    

    return (
        <Navbar className='mx-3' expand="lg">
        
                <Navbar><Link className='text-decoration-none' to="/"><img src={logo} className="img-fluid" style={{width: "14rem"}} alt="this is logo" /><span className='text-secondary fw-bolder fs-3'></span></Link></Navbar>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav><Link className='me-5 fs-5 fw-bold text-decoration-none' to="/">Courses</Link></Nav>
                    <Nav><Link className='me-5 fs-5 fw-bold text-decoration-none' to="/faq">FAQ</Link></Nav>
                    <Nav><Link className='me-5 fs-5 fw-bold text-decoration-none' to="/blog">Blog</Link></Nav>
                    {
                        (user?.displayName || user?.uid) ?
                        <Link className='me-5' to="/login"><Button onClick={LogOut}>Sign Out</Button></Link>
                        :
                        <>
                        <Nav><Link className='me-5 fs-5 fw-bold text-decoration-none' to="/login">Log In</Link></Nav>
                        <Nav><Link className='me-5 fs-5 fw-bold text-decoration-none' to="/register">Sign Up</Link></Nav>
                        </>
                    }
                    
                    <nav>
                    {
                        (user?.photoURL || user?.uid) ? 
                        <span>
                        <span> {user?.displayName} </span>
                        <img src= {user?.photoURL}  className='img-fluid rounded-circle' style={{width: "3rem"}} />
                        </span> : <><FaUser></FaUser></>
                    }
                </nav>
                </Nav>

                
                </Navbar.Collapse>
        
        </Navbar>

    );
};

export default Header;