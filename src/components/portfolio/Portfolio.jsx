import React from "react";
import Works from "./Works";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My android application project</span>

      <Works />
    </section>
  );
};

export default Portfolio;
