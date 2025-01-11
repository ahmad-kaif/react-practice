import React, { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const res = await data.json();
  //     setUsers(res); // Update the state with fetched data
  //   };

  //   fetchData();
  // }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default Users;
