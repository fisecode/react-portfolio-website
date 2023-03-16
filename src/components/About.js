import React from "react";

// import image
import Image from "../assets/img/about.webp";

const About = () => {
  return (
    <section className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col gap-24 xl:flex-row">
          <img
            src={Image}
            alt=""
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Fikri Septiawan
              </h2>
              <p className="mb-4 text-accent">Freelance Web Developer</p>
              <hr className="mb-8 opac-5" />
              <p className="mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                laborum vel cum officiis error praesentium iusto? Explicabo
                debitis vel obcaecati asperiores, repellendus mollitia odit
                animi delectus laudantium rerum nisi modi.
              </p>
            </div>
            <button className="transition-all btn btn-md bg-accent hover:bg-accent-hover">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
