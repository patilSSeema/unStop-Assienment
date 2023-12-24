import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import MyAssessment from "./MyAssessment";

const Header = ({ isMobile }) => {
  return (
    <div style={{ margin: 0 }}>
      {/* <NavDropdown.Divider /> */}
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Assessment</Navbar.Brand>

          <Nav variant="underline" className="me-auto" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home" style={{ color: "#1877F2" }}>
                My Assessment
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <hr />
      {isMobile ? "" : <MyAssessment />}
     
    </div>
  );
};

export default Header;
