import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <div className="bg-light">
            <img src="./allconnect.png" alt="" />
          </div>
          <NavLink
            to="/details"
            className="text-decoration-none text-light mx-2"
          >
            Home
          </NavLink>
          <Nav className="me-auto">
            <NavLink
              to="/update"
              className="text-decoration-none text-light mx-2"
            >
              Profile-Update
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
