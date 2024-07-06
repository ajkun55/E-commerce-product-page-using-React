import { useState } from "react";
import iconCart from "/images/icon-cart.svg";
import avatar from "/images/image-avatar.png";
import "./Navbar.css";

export default function Navbar({ counter }) {
  const [open, setOpen] = useState(false);

  function toggleNav() {
    setOpen(!open);
  }
  const list = (
    <>
      <li>
        <a href="#">Collections</a>
      </li>
      <li>
        <a href="#">Men</a>
      </li>
      <li>
        <a href="#">Women</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">contact</a>
      </li>
    </>
  );

  const openMobileNav = (
    <img
      src="/images/icon-menu.svg"
      alt=""
      onClick={toggleNav}
      className="toggle-btn"
    />
  );
  const closeMobileNav = (
    <>
      <img
        src="/images/icon-close.svg"
        alt=""
        onClick={toggleNav}
        className="toggle-btn"
      />
      <ul className="nav-mobile">{list}</ul>
    </>
  );

  return (
    <div className="nav-container">
      <div className="left-part">
        <div className="nav-mobile-container">
          {open ? closeMobileNav : openMobileNav}
        </div>

        <img src="/images/logo.svg" alt="" className="logo" />

        <div className="nav-desk-container">
          <ul className="nav-desk">{list}</ul>
        </div>
      </div>

      <div className="right-part">
        <div className="cart-in-nav-container">
          <img src={iconCart} alt="" />
          <span className="cart-count">{counter > 0 ? counter : null}</span>
        </div>
        <img src={avatar} alt="" className="avatar" />
      </div>
    </div>
  );
}
