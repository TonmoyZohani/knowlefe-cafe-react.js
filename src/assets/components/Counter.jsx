import React, { useReducer } from "react";

const reducer = (state, action) => {
  console.log(state, action.payLoad);

  switch (action.type) {
    case "inc":
      return state + action.payLoad;
    case "dec":
      return state + action.payLoad;
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

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>{state}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button>Reset</button>
    </div>
  );
};

export default Counter;
