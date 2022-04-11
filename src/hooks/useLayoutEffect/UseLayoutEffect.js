import React, { useEffect, useLayoutEffect, useRef } from "react";

export default function UseLayoutEffect() {
  const divRef = useRef(null);

  useLayoutEffect(() => {
    divRef.current.innerHTML = "Nuwan";
  }, []);

  useEffect(() => {
    divRef.current.innerHTML = "Nuwan Chathuranga";
  }, []);

  return <div ref={divRef}></div>;
}
