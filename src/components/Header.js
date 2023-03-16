import React, { useState, useEffect } from "react";

// import components
import Logo from "../assets/img/logo2.svg";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Socials from "./Socials";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-tertiary h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container flex items-center justify-between h-full mx-auto">
        {/* logo */}
        <a href="#">
          <img src={Logo} alt="Jane Wilson" />
        </a>
        {/* nav */}
        <div className="hidden lg:block">
          <Nav />
        </div>
        {/* socials */}
        <div className="hidden lg:block">
          <Socials />
        </div>
        {/* nav mobile */}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
