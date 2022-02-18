import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AllUsers from './Components/AllUsers';
import Profile from './Components/Profile';

// 1.) Bring in useState, useEffect
// 2.) Hit the api endpoint, and save the data in state

const identity = {
  username: "CRHarding",
  name: "Case-Of-Base",
  email: "case@case.com",
  picture: "https://movieknowing.com/wp-content/uploads/2020/07/1594143108_Thor39s-first-design-revealed-for-Marvel-movies-1024x768.jpg"
}

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(identity);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=5")
      .then(res => {
        setUsers(res.data.results);
      }).catch(err => console.error(err))
  }, [])

  return (
    <div className="app">
      <Profile user={user} />
      {/**
       * const props = {
       *   user: user,
       * } 
       * Profile(user);
       */}
      <h1>WELCOME TO CASEYBOOK!</h1>
      <AllUsers allUsers={users} />
    </div>
  );
}

export default App;
