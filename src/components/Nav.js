import React from "react";

// import navigation data
import { navigation } from "../data";

import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, index) => {
          return (
            <li
              className="text-white cursor-pointer hover:text-accent"
              key={index}
            >
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
