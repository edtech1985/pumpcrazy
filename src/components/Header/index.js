import React, { useContext, useEffect } from "react";
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

import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const { cartCount } = useContext(CartContext);

  return (
    <StyledHeader>
      <div className="animation" data-aos="fade-right">
        <StyledLogo src={logo} alt="Logo da loja" />
      </div>
      <StyledNavbar>
        <div className="animation" data-aos="fade-right">
          <StyledNavItem as={NavLink} to="/">
            Home
          </StyledNavItem>
        </div>
        <div className="animation" data-aos="zoom-in">
          <StyledNavItem as={NavLink} to="/cookies">
            Cookies
          </StyledNavItem>
        </div>
        <div className="animation" data-aos="fade-left">
          <StyledNavItem as={NavLink} to="/cardapio">
            Cardápio
          </StyledNavItem>
        </div>
      </StyledNavbar>
      <div className="animation" data-aos="fade-left">
        <StyledCartDiv>
          <Link to="/checkout">
            <StyledCartIcon>
              <FaShoppingCart />
              <StyledCartCount>{cartCount}</StyledCartCount>
            </StyledCartIcon>
          </Link>
        </StyledCartDiv>
      </div>
    </StyledHeader>
  );
}

export default Header;
