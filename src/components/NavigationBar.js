import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavLink } from "reactstrap";
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
        <BrandImage src={whitePaw} alt="" className="mx-2" />
        Awwwlympics
      </NavbarBrand>
      <StyledNavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <StyledCollapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <StyledNavItem>
            <NavLink className="active" href="#">
              Dashboard
            </NavLink>
          </StyledNavItem>
          <StyledNavItem>
            <NavLink href="#">Vote</NavLink>
          </StyledNavItem>
          <StyledNavItem>
            <NavLink href="#">Rankings</NavLink>
          </StyledNavItem>
        </Nav>
      </StyledCollapse>
    </Navbar>
  );
};

export default NavigationBar;
