import React from "react";

// import brands data
import { brands } from "../data";

const Brands = () => {
  return (
    <section className="min-h-[146px] bg-tertiary flex items-center">
      <div className="container flex flex-wrap items-center mx-auto md:justify-between justify-evenly">
        {brands.map((brand, index) => {
          return (
            <div key={index}>
              <img src={brand.img} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
