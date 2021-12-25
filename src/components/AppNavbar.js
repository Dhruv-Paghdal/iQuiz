import React from 'react'
import { Nav,Navbar,Container } from 'react-bootstrap'
import { Link,useLocation } from 'react-router-dom'


const AppNavbar = () => {
    let location=useLocation();
    
    return (
        <>
           <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand to="/">i<span style={{color:"rgb(13, 131, 170)"}}>Quiz</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className={`nav-link ${location.pathname==="/"?"active":""}`} to="/">Home</Link>
                            <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> 
        </>
    )
}

export default AppNavbar
