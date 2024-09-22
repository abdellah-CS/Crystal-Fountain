import React from "react";
import { noresult } from "../../assets";

const Empty: React.FC = () => {
  return (
    <>
      <img
        src={noresult}
        style={{ width: "60%", margin: "auto" }}
        className="img-fluid"
        alt="No results"
      />
    </>
  );
};

export default Empty;
