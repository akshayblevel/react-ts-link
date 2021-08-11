import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ROUTER_URL_CONSTANT } from '../../constant/routeUrlConstant';

export function NavigationBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to={ROUTER_URL_CONSTANT.EMPLOYEELIST}>
              Employee List
            </Link>
          </Nav>
          <Nav className="pr-5">
            <NavDropdown title="Akshay" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link className="nav-link" to={ROUTER_URL_CONSTANT.LOGIN}>
                  Logout
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
