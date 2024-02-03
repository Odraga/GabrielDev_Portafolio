import React from "react";
import Navigationbar from "../../components/common/Navigationbar";

const DefaultLayout = ({ children }) => {
  return (
    <div
      id={"reset-this-root"}
      className=""
      style={{ backgroundColor: "rgb(215, 190, 168)" }}
    >
      {/* <Navigationbar /> */}
      <div className="container-md container-lg mt-0 mb-0">{children}</div>
    </div>
  );
};

export default DefaultLayout;
