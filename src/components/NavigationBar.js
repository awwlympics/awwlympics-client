import styled from "styled-components";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import whitePaw from "../assets/whitepaw.png";

const BrandImage = styled.img`
  max-height: 30px;
`;

const StyledNavItem = styled(NavItem)`
  &&& {
    width: max-content;
    .nav-link {
      color: rgba(245, 245, 245, 0.9);
      &.active {
        &:after {
          content: "";
          display: block;
          height: 1px;
          background: white;
        }
      }
    }
  }
`;

const StyledNavbarToggler = styled(NavbarToggler)`
  &&& {
    border: none;
    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
    }
  }
`;

const StyledCollapse = styled(Collapse)`
  & {
    .navbar-nav {
      align-items: flex-end;
    }
  }
`;
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
