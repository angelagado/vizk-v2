import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link } from "react-router-dom";

import icon from "../assets/images/icon.png";

function AppHeader() {
  return (
    <div>
      <Navbar id="header" bg="dark" expand="md">
        <Container>
          <Navbar.Brand href="/home">
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
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/testimonials">Testimonials</Link>
              <Link to="/teams">Team</Link>
              <Link to="/contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </div>
  );
}

export default AppHeader;
