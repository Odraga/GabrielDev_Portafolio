import React from "react";
import personal_picture from "../../assets/photos/me.png";
import "../../css/about.css";
import cv_pdf from "../../assets/documents/GabrielVargasResume.pdf";

const About = () => {
  const styleMePicture = {
    filter: "drop-shadow(-8px -5px 20px black)",
  };
  return (
    <div className="row my-4 bgc-icecream rounded-5">
      <div className="col-sm-12 col-md-4">
        <img
          src={personal_picture}
          style={styleMePicture}
          className=""
          width={"100%"}
          alt=""
        />
      </div>
      <div className="col-sm-12 col-md-8 text-center text-normal ">
        <div className="d-flex align-items-center h-100">
          <h2 className="color-white text-shadow-1 me-2">Gabriel Vargas</h2>
          {/*  <div className="line-start">
            <p className="color-icecream ms-2">
              I am a software developer with experience in front-end and
              back-end development. I have a solid understanding of web
              technologies such as HTML, CSS, JavaScript and ReactJS. I am a
              self-starter with good communication skills and the ability to
              work in a team or independently. I am looking for opportunities to
              apply my technical skills and passion for software development to
              create innovative solutions.
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
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default About;
