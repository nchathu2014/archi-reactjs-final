import React, { useEffect } from "react";

export default function Child({ returnComment }) {
  console.log("CHILD RENDERING");
  useEffect(() => {
    console.log("FUNCTION CALLED");
  }, [returnComment]);
  return <div>{returnComment()}</div>;
}
