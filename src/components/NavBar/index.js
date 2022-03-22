import React from "react";
import { Nav, NavLink, NavItems,NavIcon } from "./Navbar.style";

const Navbar = ({toggle}) => {
  return (
    <Nav>
      <NavLink to="/">PIZZA</NavLink>
      <NavItems onClick={toggle}>
        <span>Menu</span>
        <NavIcon />
      </NavItems>
    </Nav>
  );
};

export default Navbar;
