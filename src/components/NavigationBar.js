import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavLink as BootNavLink } from "reactstrap";
import { NavLink } from "react-router-dom";
import whitePaw from "../assets/whitepaw.png";
import {
  StyledCollapse,
  StyledNavItem,
  StyledNavbarToggler,
  BrandImage
} from "../styledComponents/NavigationBar";

const NavigationBar = props => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar color="primary" dark expand="md" className="sticky-top">
      <NavbarBrand href="/">
        <BrandImage src={whitePaw} alt="white paw" className="mx-2" />
        Awwwlympics
      </NavbarBrand>
      <StyledNavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <StyledCollapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <StyledNavItem>
            <BootNavLink tag={NavLink} to="/dashboard" activeClassName="active">
              Dashboard
            </BootNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <BootNavLink tag={NavLink} to="/vote" activeClassName="active">
              Vote
            </BootNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <BootNavLink tag={NavLink} to="/rankings" activeClassName="active">
              Rankings
            </BootNavLink>
          </StyledNavItem>
        </Nav>
      </StyledCollapse>
    </Navbar>
  );
};

export default NavigationBar;
