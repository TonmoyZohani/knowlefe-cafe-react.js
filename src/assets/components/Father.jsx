import React from "react";
import MySelf from "./MySelf";

const Father = () => {
  return (
    <div style={{ border: "1px solid blue" }}>
      <span>Father</span>
      <MySelf/>
    </div>
  );
};

export default Father;
