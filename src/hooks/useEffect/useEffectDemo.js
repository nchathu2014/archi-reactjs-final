import axios from "axios";
import React, { useEffect, useState } from "react";

export default function UseEffectDemo() {
  const [users, setUsers] = useState(null);
  const [counter, setCounter] = useState(0);

  const handleOnClick = () => setCounter(counter + 1);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        console.log("API CALLED");
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2>Email App</h2>
      <p>{users ? users[0].email : "no users"}</p>
      <p>
        <label>{counter}</label>
      </p>
      <button onClick={handleOnClick}>Click Me!</button>
    </>
  );
}
