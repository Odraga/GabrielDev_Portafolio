import React from "react";
import personal_picture from "../../assets/photos/personal_picture.png";
import "./about.css";
import cv_pdf from "../../assets/documents/GabrielVargasResume.pdf";

const About = () => {
  return (
    <div>
      {/* <div className="d-flex justify-content-center my-2 ">
        <img
          src={personal_picture}
          alt=""
          className="w-25 h-25 effect-shadow-2 rounded-5 cursor-pointer transition-shadow-2"
        />
      </div> */}

      <div className="d-sm-flex justify-content-center about-text border rounded-5 mt-4  shadow-2 transition-shadow-2">
        <div className="mx-4 my-4 color-primary d-flex justify-content-center align-items-center text-shadow-1">
          <h2>ABOUT ME</h2>
        </div>
        <hr />
        <div className="px-2">
          <div className="d-flex justify-content-center my-2">
            <img
              src={personal_picture}
              alt=""
              className="w-25 h-25 rounded-5 cursor-pointer"
            />
          </div>
          <hr />
          <p className="color-secondary">
            I am a software developer with experience in front-end and back-end
            development. I have a solid understanding of web technologies such
            as HTML, CSS, JavaScript and ReactJS. I am a self-starter with good
            communication skills and the ability to work in a team or
            independently. I am looking for opportunities to apply my technical
            skills and passion for software development to create innovative
            solutions.
          </p>
          <div className="row justify-content-evenly mb-2">
            <a href="https://www.linkedin.com/in/gabriel-vargas-dev">
              LinkedIn
            </a>

            <a href="https://github.com/Odraga">GitHub</a>

            <a href={cv_pdf} target="_blank" rel="noreferrer">
              View CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
