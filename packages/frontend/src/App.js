import React, { useEffect, useState } from "react";

const App = () => {
  const [companies, setCompanies] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getCompanies = async () => {
      const res = await fetch("http://localhost:3001/company");
      const json = await res.json();
      setCompanies(json.list);
    };

    const getUsers = async () => {
      const res = await fetch("http://localhost:3001/user");
      const json = await res.json();
      setUsers(json.list);
    };

    getCompanies();
    getUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Frontend</h1>
      </header>
      <h2>Companies</h2>
      <ul id="companies">
        {companies.map((c) => (
          <li>{c}</li>
        ))}
      </ul>
      <h2>Users</h2>
      <ul id="users">
        {users.map((c) => (
          <li>{c}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
