import React from "react";
import { Container, Image, Nav, NavDropdown, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const SmallNav = (props) => {

    let logoImg = props.logoImg;

    return (
        <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary pro-navbar" sticky="top">
            <Container>
                <Navbar.Brand>
                <Image src={logoImg} className="logo-img" alt="software-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="links small-nav-links" eventKey="1" as={Link} to="/">Home</NavLink>
                        <NavLink className="links small-nav-links" eventKey="2" as={Link} to="/about-us">About Us</NavLink>
                        <NavDropdown title="Our Services" id="basic-nav-dropdown" className="links nav-dropdown-links1">
                            <NavDropdown.Item className="pro-drop-item">
                                <NavLink className="links small-nav-links" eventKey="3" as={Link} to="/android-development">Android Development</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="pro-drop-item">
                                <NavLink className="links small-nav-links" eventKey="4" as={Link} to="/ios-development">iOS Development</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="pro-drop-item">
                                <NavLink className="links small-nav-links" eventKey="5" as={Link} to="/website-development">Website Development</NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavLink className="links small-nav-links" eventKey="6" as={Link} to="/career" >Career</NavLink>
                        <NavLink className="links small-nav-links" eventKey="7" as={Link} to="/contact-us" >Contact Us</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default SmallNav;