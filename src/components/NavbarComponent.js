import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import AboutComponent from './AboutComponent';
import UserComponent from './UserComponent';

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div>
        <Navbar color="light" light expand="md">
          <Link to='/'><NavbarBrand>DISTANCE CALCULATOR</NavbarBrand></Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to='/about'><NavLink>About</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to='/users'><NavLink>Users</NavLink></Link>
              </NavItem>
            </Nav>
            
          </Collapse>
        </Navbar>

        <Switch>
          <Route path='/' exact component={HomeComponent}></Route>
          <Route path="/about" component={AboutComponent}></Route>
          <Route path="/Users"><UserComponent/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default NavbarComponent;