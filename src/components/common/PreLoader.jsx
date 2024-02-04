import React from "react";
import cat from "../../assets/photos/cat.png";

const PreLoader = () => {
  return (
    <div
      className={`position-fixed vw-100 vh-100 d-flex flex-column justify-content-center align-items-center z-100`}
    >
      <div className="bgc-primary w-50 h-50 rounded-circle opacity-5 position-absolute rotating-normal"></div>
      <div className="bgc-secondary w-50 h-50 rounded-circle opacity-5 position-absolute rotating-anormal"></div>
      <div className="bgc-red w-50 h-50 rounded-circle opacity-5 position-absolute rotating-inverse"></div>
      <img src={cat} alt="" className="rotating-inverse opacity-5" />
    </div>
  );
};

export default PreLoader;
