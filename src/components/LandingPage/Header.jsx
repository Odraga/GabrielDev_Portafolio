import React from "react";
import fotonice from "../../assets/photos/fotonice.jpg";
import "../../css/effects.scss";
import Timer from "../Timer/Timer";

const Header = () => {
  const imageStyle = {
    backgroundImage: `url(${fotonice})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "16rem",
    width: "16rem",
    margin: "auto",
  };
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6 line-sm-none line-xl-end">
          <div style={imageStyle}></div>
        </div>
        <div className="col-sm-12 col-md-6 d-flex align-items-center ">
          <div className="fw-light px-2 rounded-5">
            <h1 className="presentation-text mb-0 text-shadow-1 ms-3 ms-md-0">
              Hey, welcome!
            </h1>
            <hr />
            <p className="presentation-text ms-3 ms-md-0">
              I am a Venezuelan with a passion for web development.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
