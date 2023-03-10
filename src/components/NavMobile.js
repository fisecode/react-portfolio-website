import React, { useState } from "react";

// import navigation data
import { navigation } from "../data";

// import icons
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";

// import components
import Socials from "./Socials";

// import framer motion
import { motion } from "framer-motion";

// import link
import { Link } from "react-scroll";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  // framer motion variants
  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "sring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      delay: 0.1,
    },
  };
  return (
    <nav className="relative">
      {/* menu icon */}
      <div
        onClick={() => setIsOpen(true)}
        className="text-white cursor-pointer"
      >
        <Bars3BottomRightIcon className="w-8 h-8" />
      </div>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="fixed top-0 right-0 w-4 h-4 rounded-full bg-accent"
      ></motion.div>
      {/* menu */}
      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        {/* close icon */}
        <div
          onClick={() => setIsOpen(false)}
          className="absolute cursor-pointer top-8 right-8"
        >
          <XMarkIcon className="w-8 h-8" />
        </div>
        {navigation.map((item, index) => {
          return (
            <li key={index} className="mb-8">
              <Link
                to={item.href}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-xl cursor-pointer capitalize"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
