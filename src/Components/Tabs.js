import React, { Component } from 'react';
import '../App.css';
import {Navbar, Nav,NavItem, MenuItem, NavDropdown} from 'react-bootstrap';


class Tabs extends Component {
    render() {
        return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a>ZO Organized</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">Contacts</NavItem>
                    <NavItem eventKey={2} href="#">Forms</NavItem>
                    <NavItem eventKey={1} href="#">Bills</NavItem>
                    <NavItem eventKey={2} href="#">Taxes</NavItem>
                    <NavItem eventKey={2} href="#">Other</NavItem>
                    <NavItem eventKey={2} href="#">Other</NavItem>
                    <NavItem eventKey={2} href="#">Other</NavItem>
                    <NavItem eventKey={2} href="#">Other</NavItem>
                    <NavItem eventKey={2} href="#">Other</NavItem>
                    <NavItem eventKey={2} href="#">Other</NavItem>
                    <NavItem eventKey={2} href="#">Other</NavItem>
                    <NavItem eventKey={2} href="#">Other</NavItem>
                    <NavItem eventKey={2} href="#">Other</NavItem>
                </Nav>
                <Nav pullRight>
                    <NavDropdown eventKey={3} title="Family" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Husband</MenuItem>
                        <MenuItem eventKey={3.2}>Son</MenuItem>
                        <MenuItem eventKey={3.3}>Daughter</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Other</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default Tabs;