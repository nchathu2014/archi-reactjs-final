import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

export default function UseContext() {
  const [username, setUserName] = useState("");
  return (
    <div style={{ background: "#ccc" }}>
      <h2>UseName App</h2>
      <AppContext.Provider value={{ username, setUserName }}>
        <Login />
        <User />
      </AppContext.Provider>
    </div>
  );
}
