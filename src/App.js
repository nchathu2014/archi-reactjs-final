import logo from "./logo.svg";
import "./App.css";
import UseStateDemo from "./useState/UseStateDemo";
import UseEffectDemo from "./useEffect/useEffectDemo";
import UseRefDemo from "./useRef/UseRefDemo";

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
          {/*  <h1>useReducer()</h1>
          <br />
          useReducer is usually preferable to useState when you have complex
          state logic that involves multiple sub-values or when the next state
          depends on the previous one. useReducer also lets you optimize
          performance for components that trigger deep updates because you can
          pass dispatch down instead of callbacks.
          <UseReducerDemo /> */}
        </li>
        <li>
          {/*  <h1>useEffect()</h1>
          <br />
          The useEffect Hook{" "}
          <b>allows you to perform side effects in your components</b>. Some
          examples of side effects are: fetching data, directly updating the
          DOM, and timers. useEffect accepts two arguments. The second argument
          is optional. useEffect(fnction, dependency)
          <UseEffectDemo /> */}
        </li>
        <li>
          <h1>useRef()</h1>
          <br />
          The useRef Hook allows you to <b> persist values between renders</b>.
          It can be used to store a mutable value that does not cause a
          re-render when updated. It can be used to access a DOM element
          directly.
          <UseRefDemo />
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default App;
