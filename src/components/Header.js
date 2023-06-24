import React from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap';
import logo from "../images/bakeit_logo.png"
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderStyled>
        <Navbar expand="lg" className="navbar">
            <Container>
                <Navbar.Brand href="/"><img src={logo} alt='bakeit_logo' className='bakeit_logo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-toggle'/>
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                <Nav className='nav-links'>
                    <Nav.Link href="#home">Log In</Nav.Link>
                    <Nav.Link href="#link">Help</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
.navbar-toggle{
    border: none;
}

.navbar-toggle:hover{
    background-color: crimson;
    transition: all 0.5s;
}


.nav-links a{
    color: white;
    font-size: 1.2em;
    margin: 1vw;
}
.nav-links a:hover{
    color: darkred;
}
.navbar{
    background: linear-gradient(151deg, rgba(255,255,255,1) 3%, rgba(255,238,238,1) 15%, rgba(251,104,104,1) 68%, rgba(255,0,0,1) 100%);
}
.bakeit_logo{
    width: 15vw;
}
`

export default Header

