import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

export default function UseMemo() {
  const [users, setUsers] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        console.log("API CALLED");
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;
    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("LONGEST NAME COMPUTED");

    return longestName;
  };

  const findLongestNameMemo = useMemo(() => findLongestName(users), [users]);

  return (
    <div>
      <h2>Memoization App</h2>
      <button onClick={() => setToggle(!toggle)}>Toggle Me!</button>
      <p>{findLongestNameMemo}</p>
      <p>
        <h3>{toggle ? "Toggle" : ""}</h3>
      </p>
    </div>
  );
}
