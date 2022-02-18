import React from 'react';

const Profile = (props) => {
  console.log(props.user); // ->> { username: .....}
  return (
    <div>
      <h2>{props.user.username}</h2>
      <img src={props.user.picture} />
      <p>{props.user.email}</p>
      <p>{props.user.name}</p>
    </div>
  )
}

export default Profile;

// const ash = {
//   favPoke: "Pikachu",
//   hatedPoke: "Mew"
// }

// console.log(ash.favPoke); // --> Pikachu

// const add = (num1, num2) => {
//   return num1 + num2;
// }

// add(5, 6);