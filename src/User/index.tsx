import React from 'react';
import UserType from '../Types/UserType';

const User: React.FunctionComponent<UserType> = ({ name, age }: UserType) => {
  return (
    <article>
      <p>{name}</p>
      <p>{age}</p>
    </article>
  );
};
export default User;
