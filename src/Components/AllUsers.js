import React from 'react';

const AllUsers = (props) => {
  return (
    <>
      {props.allUsers.map(user => {
        return (
          <div key={user.login.uuid} className="user-wrapper">
            <h2>Username: {user.login.username}</h2>
            <img src={user.picture.medium} alt="User" />
            <p>First name: {user.name.first}</p>
            <p>Location: {user.location.city}</p>
          </div>
        )
      })}
    </>
  )
}

export default AllUsers;