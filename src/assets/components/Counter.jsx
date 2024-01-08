import React, { useReducer } from "react";

const reducer = (state, action) => {
  console.log(state, action.payLoad);

  switch (action.type) {
    case "inc":
      return state + action.payLoad;
    case "dec":
      if (state <= 0) {
        return 0;
      }
      return state + action.payLoad;
    case "reset":
      return 0;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  const handleIncrement = () => {
    dispatch({ type: "inc", payLoad: 1 });
  };

  const handleDecrement = () => {
    dispatch({ type: "dec", payLoad: -1 });
  };

  const handleReset = () => {
    dispatch({ type: "reset", payLoad: 0 });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>{state}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
