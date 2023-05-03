import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import "./intro.css";
import ME from "../../assets/ME.jpg";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3 Year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon">
                <h5>Projects</h5>
                <small>3+ Completed Projects</small>
              </VscFolderLibrary>
            </article>
          </div>
          <p>
          "Hi, I'm Sonphi Sah, a Civil Engineer with 3 years of experience in building and road construction and design. I'm passionate about creating safe, sustainable, and efficient infrastructure that makes a positive impact on people's lives. My expertise includes project management, design, estimation, surveying, and collaboration with contractors, architects, and government officials. Check out my CV for more details on my experience and skills."
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
