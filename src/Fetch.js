import React, { useEffect, useState } from "react";

function Fetch() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data));
  },[]);
  console.log(user)
  return (
    <div>
      <h1>User Data</h1>
      <ul>
        {user.map((users) => 
          
            <li key={users.id}>
              <a href={users.html_url}>{users.login}</a>
            </li>
          
        )}
      </ul>
    </div>
  );
}

export default Fetch;
