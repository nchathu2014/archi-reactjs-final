import React, { useRef, useState } from "react";

export default function UseRefDemo() {
  const inputRef = useRef(null);
  const [name, setName] = useState("Bob");

  const handleOnClick = () => {
    const txtEle = inputRef.current;
    setName(txtEle.value);
    txtEle.focus();
  };

  return (
    <div>
      <h2>Enter Name App</h2>
      <h3>{name}</h3>
      <input ref={inputRef} type="text" placeholder="Enter your name" />
      <button onClick={handleOnClick}>Change Name</button>
    </div>
  );
}
