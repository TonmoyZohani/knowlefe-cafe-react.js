import React, { useReducer } from "react";

const reducer = (state, action) => {
  console.log(state, action);
  return state + action;
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  const handleIncrement = () => {
    dispatch(1);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>{state}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button>Decrement</button>
      <button>Reset</button>
    </div>
  );
};

export default Counter;
