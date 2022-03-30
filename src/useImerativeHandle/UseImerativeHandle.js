import React, { useRef } from "react";
import Button from "./Button";

export default function UseImerativeHandle() {
  const btnRef = useRef(null);

  const handleOnClick = () => {
    btnRef.current.alterToggle();
  };

  return (
    <div style={{ background: "#ccc" }}>
      <button onClick={handleOnClick}>Button From Parent</button>
      <Button ref={btnRef} />
    </div>
  );
}
