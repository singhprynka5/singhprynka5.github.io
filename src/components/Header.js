import React from "react";
import { Navbar } from "react-bootstrap";

const Header = () => (
    <Navbar variant="dark" sticky="top" className="justify-content-center" style={{ backgroundColor: "#2e3141" }}>
        <Navbar.Brand href="#about">ABOUT</Navbar.Brand>
        <Navbar.Brand href="#skills">SKILLS</Navbar.Brand>
        <Navbar.Brand href="#intro">CONNECT</Navbar.Brand>
        <Navbar.Brand href="https://medium.com/@singhprynka5" target="_blank">BLOG</Navbar.Brand>
    </Navbar>
);

export default Header;
