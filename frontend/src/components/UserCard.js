import React from 'react';

const UserCard = ({ name, age }) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
};

UserCard.defaultProps = {
  name: "John Doe", 
  age: 25,
};

export default UserCard;