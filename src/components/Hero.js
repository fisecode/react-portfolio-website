import React from "react";

// import woman image
import WomanImg from "../assets/img/banner-woman2.webp";
import MyImg from "../assets/img/fikri.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container h-full mx-auto">
        <div className="flex items-center h-full pt-8">
          {/* left side */}
          <div className="flex flex-col items-center justify-end flex-1 lg:items-start">
            <p className="text-lg text-accent mb-[22px]">Hey, I'm Fikri 👋</p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg-leading-[1.2] font-bold md:tracking-[-2px]">
              I Beginner Programmer
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto voluptas quidem laboriosam sapiente. Vero, delectus.
            </p>
            <button className="transition-all btn btn-md bg-accent hover:bg-accent-hover md:btn-lg">
              Work with me
            </button>
          </div>
          {/* right side */}
          <div className="items-end justify-end flex-1 hidden h-full lg:flex">
            <img src={MyImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
