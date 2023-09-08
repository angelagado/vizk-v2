import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, NavLink } from "react-router-dom";

import icon from "../assets/images/icon.png";

function AppHeader() {
  return (
    <div>
      <Navbar id="header" bg="dark" expand="md">
        <Container>
          <Navbar.Brand>
            <img
              src={icon}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            VIZK
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <i class="fas fa-bars" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/teams">Team</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </div>
  );
}

export default AppHeader;
