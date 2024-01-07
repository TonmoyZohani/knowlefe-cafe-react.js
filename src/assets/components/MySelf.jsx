import React, { useContext } from "react";
import { RingContext } from "../../App";
import { MoneyContext } from "../../App";

const MySelf = () => {
  const ring = useContext(RingContext);
  const { money, setMoney } = useContext(MoneyContext);

  setMoney("Dollar");

  console.log(money);

  return (
    <div style={{ border: "1px solid green", padding: "5px" }}>
      <span>My Self:{ring}</span>
    </div>
  );
};

export default MySelf;
