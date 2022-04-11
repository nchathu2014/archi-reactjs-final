import React, { useCallback, useState } from "react";
import Child from "./Child";

export default function UseCallback() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("I am the data");

  //Before Memoize
  /*  const returnComment = (name) => {
    return data;
  }; */

  //Memoize

  const returnCommentMemo = useCallback(() => returnComment, [data]);
  const returnComment = (name) => {
    return data;
  };

  return (
    <div>
      <Child returnComment={returnCommentMemo} />
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <p>{toggle && <span>Toggle</span>}</p>
    </div>
  );
}
