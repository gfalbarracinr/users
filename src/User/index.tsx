import React from 'react';

const User: React.FunctionComponent = ({name, age}) => {
  return (
    <article>
      <p>{name}</p>
      <p>{age}</p>
    </article>
  );
};
export default User;
