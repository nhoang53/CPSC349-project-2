import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import fire from "../config/firebase";

export default class NavbarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Food Fight</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/discover">Discover</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            {this.state.user ? (
              <>
                {/* <Nav.Link href="/UserProfile">user profile</Nav.Link> */}
                <NavDropdown
                  title={this.state.user.displayName}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/UserProfile">Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={()=> fire.auth().signOut()} href="/landingpage">
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
