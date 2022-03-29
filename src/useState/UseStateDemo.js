import { useState } from "react";
const UseStateDemo = () => {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("Nuwan");

  const handleOnClick = () => setCounter(counter + 1);

  const handleOnChange = (event) => {
    !event.target.value ? setMessage("Nuwan") : setMessage(event.target.value);
  };

  return (
    <>
      <div style={{ background: "#ccc" }}>
        <h2>Counter App</h2>
        <p data-testid="count" value={counter}>
          {counter}
        </p>
        <button onClick={handleOnClick}>Click Me!</button>
      </div>

      <div style={{ background: "#ccc" }}>
        <h2>Word Enter App</h2>
        <input
          type="text"
          placeholder="Enter something..."
          onChange={handleOnChange}
        />
        <label>{message}</label>
      </div>

      <hr />
    </>
  );
};

export default UseStateDemo;
