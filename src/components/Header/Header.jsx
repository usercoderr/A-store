import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import { Container, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import "./Header.css";

const nav__links = [
  {
    path: "home",
    display: "Home",
    id: 1,
  },
  {
    path: "shop",
    display: "Shop",
    id: 2,
  },
  {
    path: "cart",
    display: "Cart",
    id: 3,
  },
];
export const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null)

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle("active__menu")

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>A Store</h1>
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__links.map((item) => (
                  <li key={item.id} className="nav_item">
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon">
                <i class="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon">
                <i class="ri-shopping-cart-line"></i>
                <span className="badge">1</span>
              </span>
              <span>
                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" />
              </span>
              <div className="mobile_menu">
                <span onClick={menuToggle}>
                  <i class="ri-menu-5-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};
