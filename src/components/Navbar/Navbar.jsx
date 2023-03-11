import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import "./Navbar.css";

// video

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>

      {/* <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Tub rooms</a>
        </li>
        <li className="p__opensans">
          <a href="#about">Massage</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Spa treatment</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Skin care</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Groups</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Packages</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Gift cards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Rates</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Shop</a>
        </li>
      </ul> */}
      <div className="app__navbar-login">
        {/* <a href="#login" className="p__opensans">
          Log In / Regester
        </a> */}

        <div />
        <a href="/" className="p__opensans">
          Book now
        </a>
      </div>

      {/* mobile */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#home">Tub rooms</a>
              </li>
              <li className="p__opensans">
                <a href="#about">Massage</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">Spa treatment</a>
              </li>
              <li className="p__opensans">
                <a href="#awards">Skin care</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">Groups</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">Packages</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">Gift cards</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">Rates</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">Shop</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
