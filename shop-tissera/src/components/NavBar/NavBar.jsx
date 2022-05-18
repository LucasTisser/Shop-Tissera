import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <Navbar bsPrefix={"nav"}>
        <Navbar.Brand>
          <NavLink to={"/"}>
            <img
              className="logoImg"
              src="https://play-lh.googleusercontent.com/byZDtGXJxSbMoFgmJA_RHWU7DCt-Lv6IzOVTJd_uPV3HPb0YQSaAx-fb_VZ1OA8sVj0"
              alt="Imagen del logo"
            />
          </NavLink>
        </Navbar.Brand>
        <Nav className="navLinks">
          <ul className="navList">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/category/chocolate"}>Chocolates</NavLink>
            </li>
            <li>
              <NavLink to={"/category/golosina"}>Golosinas</NavLink>
            </li>
          </ul>
        </Nav>
        <Nav className={"cartWidget"}>
          <CartWidget />
        </Nav>
      </Navbar>
    </div>
  );
}
export default NavBar;
