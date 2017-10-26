import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { compose, withHandlers, withState } from 'recompose';
import Link from 'gatsby-link';

const enhance = compose(
  withState('expand', 'toggleExpand', false),
  withHandlers({
    showMore: props => () => props.toggleExpand(expand => true),
    showLess: props => () => props.toggleExpand(expand => false),
  }),
);

const Header = enhance(({ expand, showMore, showLess }) => {
  const toggleExpand = () => (expand ? showLess() : showMore());
  return (
    <Navbar fixed="top" dark className="bg-dark" expand="md">
      <Link className="navbar-brand" to="/">
        Tobias Timm
      </Link>
      <NavbarToggler onClick={toggleExpand} />
      <Collapse isOpen={expand} navbar>
        <Nav navbar className="mr-auto">
          <NavItem>
            <Link className="nav-link" to="/skills">
              Skills
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/education">
              Education
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
});
export default Header;
