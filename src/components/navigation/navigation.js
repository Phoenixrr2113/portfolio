import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink>
              <Link to="/">Home</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/about">About</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/projects">Projects</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/contact">Contact</Link>
            </NavLink>
          </NavItem>
        </Nav>
        <hr />
      </div>
    );
  }
}

export default Navigation;
