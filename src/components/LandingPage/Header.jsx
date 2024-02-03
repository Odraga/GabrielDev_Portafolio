import React from "react";
import fotonice from "../../assets/photos/fotonice.jpg";
import presentation from "../../assets/photos/wisuda.gif";

import "../../css/effects.scss";
import Timer from "../Timer/Timer";

const Header = () => {
  const imageStyle = {
    backgroundImage: `url(${fotonice})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "16rem",
    width: "16rem",
  };

  const imagePresentationStyle = {
    backgroundImage: `url(${presentation})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "16rem",
    width: "30rem",
  };
  return (
    <>
      <div className="row justify-content-center">
        <div className="line-sm-none line-xl-end">
          {/* <div className="scene">
            <div className="sphere">
              <div className="hemisphere"> */}
          <div style={imageStyle}></div>
          {/* </div>
            </div>
          </div> */}
        </div>
        <div
          className="d-flex align-items-center rounded-5 shadow-5 mx-4 mx-md-1"
          style={imagePresentationStyle}
        >
          <div className="fw-light px-2 rounded-5 ms-1">
            <h1 className="presentation-text color-primary mb-0 text-shadow-1 ms-3 ms-md-0">
              Hey, welcome!
            </h1>
            <hr />
            <p className="presentation-text color-secondary ms-3 ms-md-0">
              I am a Venezuelan with a passion for web development.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
