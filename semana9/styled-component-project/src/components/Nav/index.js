import React from "react";
import { NavWrapper, NavItem } from "./styled";
const Nav = () => (
  <nav className="tabs">
    <NavWrapper>
      <NavItem className="is-active">
        <a href="DireccionPagina"> Card </a>
      </NavItem>

      <NavItem>
        <a href="DireccionPagina"> Bank </a>
      </NavItem>
    </NavWrapper>
  </nav>
);

export default Nav;
