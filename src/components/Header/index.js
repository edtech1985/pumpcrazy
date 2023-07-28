import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

function Header() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("CartItems"));
    if (items) {
      setCartItems(items);
    }
  }, []);

  return (
    <StyledHeader>
      <StyledLogo src={logo} alt="Logo da loja" />
      <StyledNavbar>
        <StyledNavItem href="/">Home</StyledNavItem>
        <StyledNavItem href="/cookies">Cookies</StyledNavItem>
        <StyledNavItem href="/checkout">Checkout</StyledNavItem>
      </StyledNavbar>
      <StyledCartDiv>
        <Link to="/checkout">
          <StyledCartIcon>
            <FaShoppingCart />
            <StyledCartCount>{cartItems.length}</StyledCartCount>
          </StyledCartIcon>
        </Link>
      </StyledCartDiv>
    </StyledHeader>
  );
}

export default Header;
