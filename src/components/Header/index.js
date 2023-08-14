import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";
import {
  StyledHeader,
  StyledLogo,
  StyledNavbar,
  StyledNavItem,
  StyledCartIcon,
  StyledCartDiv,
  StyledCartCount,
} from "./Header";
import logo from "../../img/newlogo (2).jpeg";
import { CartContext } from "../CartContext";

function Header() {
  const { cartCount } = useContext(CartContext);

  return (
    <StyledHeader>
      <StyledLogo src={logo} alt="Logo da loja" />
      <StyledNavbar>
        <StyledNavItem as={NavLink} to="/">
          Home
        </StyledNavItem>
        <StyledNavItem as={NavLink} to="/cookies">
          Cookies
        </StyledNavItem>
        <StyledNavItem as={NavLink} to="/cardapio">
          Cardápio
        </StyledNavItem>
      </StyledNavbar>
      <StyledCartDiv>
        <Link to="/checkout">
          <StyledCartIcon>
            <FaShoppingCart />
            <StyledCartCount>{cartCount}</StyledCartCount>
          </StyledCartIcon>
        </Link>
      </StyledCartDiv>
    </StyledHeader>
  );
}

export default Header;
