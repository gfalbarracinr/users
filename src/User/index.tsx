import React from 'react';
import './user.css';
import UserType from '../Types/UserType';

const User: React.FunctionComponent<UserType> = ({ name, age }: UserType) => {
  return (
    <article className="user-container">
      <p>{name}</p>
      <p>{age}</p>
    </article>
  );
};
export default User;
