import React, { useContext } from "react";
import { RingContext } from "../../App";

const MySelf = () => {
  const ring = useContext(RingContext);

  return (
    <div style={{ border: "1px solid green", padding: "5px" }}>
      <span>My Self:{ring}</span>
    </div>
  );
};

export default MySelf;
