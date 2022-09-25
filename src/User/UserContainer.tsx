import React from 'react';
import User from './index';

const UserContainer: React.FunctionComponent = (props) => {
  return (
    {
      props.users.map(user => (
        <User name={user.name} age={user.age}/>
      ))
    }
  );
};

export default UserContainer;
