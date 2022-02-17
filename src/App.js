import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// 1.) Bring in useState, useEffect
// 2.) Hit the api endpoint, and save the data in state

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=5")
      .then(res => {
        setUsers(res.data.results);
      }).catch(err => console.error(err))
  }, [])

  return (
    <div className="app">
      <h1>WELCOME TO CASEYBOOK!</h1>
      {users.map(user => {
        return (
          <div key={user.login.uuid} className="user-wrapper">
            <h2>Username: {user.login.username}</h2>
            <img src={user.picture.medium} alt="User" />
            <p>First name: {user.name.first}</p>
            <p>Location: {user.location.city}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
