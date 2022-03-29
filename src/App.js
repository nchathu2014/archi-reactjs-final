import logo from "./logo.svg";
import "./App.css";
import UseStateDemo from "./useState/UseStateDemo";
import UseReducerDemo from "./useReducer/UseReducerDemo";

function App() {
  return (
    <div className="App">
      <h1>ReactJS Hooks</h1>
      <ul style={{ textAlign: "left" }}>
        <li>
          {/*  <h1>useState()</h1>
          <br />
          The useState() is a Hook that allows you to have state variables in
          functional components
          <UseStateDemo /> */}
        </li>
        <li>
          <h1>useReducer()</h1>
          <br />
          useReducer is usually preferable to useState when you have complex
          state logic that involves multiple sub-values or when the next state
          depends on the previous one. useReducer also lets you optimize
          performance for components that trigger deep updates because you can
          pass dispatch down instead of callbacks.
          <UseReducerDemo />
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default App;
