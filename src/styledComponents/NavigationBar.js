import styled from "styled-components";
import { NavbarToggler, Collapse, NavItem } from "reactstrap";

export const BrandImage = styled.img`
  max-height: 30px;
`;

export const StyledNavItem = styled(NavItem)`
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

export const StyledNavbarToggler = styled(NavbarToggler)`
  &&& {
    border: none;
    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
    }
  }
`;

export const StyledCollapse = styled(Collapse)`
  & {
    .navbar-nav {
      align-items: flex-end;
    }
  }
`;
