import React, { useReducer } from "react";

const reducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + 1 };
    case "dec":
      if (state.count <= 0) {
        return { ...state, count: 0 };
      }
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
  }
};

const Counter = () => {
  const initialState = {
    count: 0,
    step: 1,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const { count, step } = state;

  const handleIncrement = () => {
    dispatch({ type: "inc" });
  };

  const handleDecrement = () => {
    dispatch({ type: "dec" });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>Count:{count}</p>
      <p>Step:{step}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
