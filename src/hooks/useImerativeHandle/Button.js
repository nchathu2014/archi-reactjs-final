import React, { forwardRef, useState, useImperativeHandle } from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <div>
      <button>Button From Child</button>
      <div>{toggle ? "Toggle" : ""}</div>
    </div>
  );
});

export default Button;
