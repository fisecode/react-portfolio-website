import React, { useState, useEffect } from "react";

//import link
import { Link, animateScroll as scroll } from "react-scroll";

// import icon
import { ChevronUpIcon } from "@heroicons/react/24/outline";

const BackToTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });

  const scrollToTOp = () => {
    scroll.scrollToTop();
  };

  return (
    show && (
      <button
        onClick={() => scrollToTOp()}
        className="fixed flex items-center justify-center w-12 h-12 text-white transition-all rounded-full cursor-pointer bg-accent hover:bg-accent-hover right-10 bottom-24 lg:right-24"
      >
        <ChevronUpIcon className="w-6 h-6" />
      </button>
    )
  );
};

export default BackToTopBtn;
