import React from "react";
import Navigationbar from "../../components/common/Navigationbar";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Navigationbar />
      {children}
    </div>
  );
};

export default DefaultLayout;
