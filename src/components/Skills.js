import React from "react";

// import skills data
import { skills } from "../data";

const Skills = () => {
  return (
    <section className="py-12 bg-tertiary">
      <div className="container mx-auto">
        <div className="grid grid-cols-8 md:grid-flow-row">
          {skills.map((skill, index) => {
            return (
              <div key={index} className="flex items-center justify-center">
                <img src={skill.image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
