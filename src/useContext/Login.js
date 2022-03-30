import React, { useContext } from "react";
import { AppContext } from "./UseContext";

export default function Login() {
  const { setUserName } = useContext(AppContext);
  return (
    <div>
      <input
        type="text"
        onChange={(event) => setUserName(event.target.value)}
      />
    </div>
  );
}
