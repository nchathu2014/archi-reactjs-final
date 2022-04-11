import React, { useReducer } from "react";

const initialState = { showText: true, count: 10 };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "TOGGLE_TEXT":
      return { ...state, showText: !state.showText };
    default:
      return state;
  }
};

export default function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{ background: "#ccc" }}>
      <h2>Another Counter</h2>
      <label>{state.count}</label>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "TOGGLE_TEXT" });
        }}
      >
        Click Me!
      </button>
      <label>{state.showText ? "Show Me!" : ""}</label>
    </div>
  );
}
