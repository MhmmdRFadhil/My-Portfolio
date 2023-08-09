import React from "react";
import "./skills.css";
import HardSkills from "./HardSkills";
import SoftwareSkills from "./SoftwareSkills";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">
        My technical skills & software skills
      </span>

      <div className="skills__container container grid">
        <HardSkills />
        <SoftwareSkills />
      </div>
    </section>
  );
};

export default Skills;
