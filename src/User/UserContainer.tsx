import React from 'react';
import User from './index';
import UserType from '../Types/UserType';

interface Props {
  users: UserType[];
}
const UserContainer: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div>
      {props.users.map((user: UserType, index: number) => (
        <User key={index} name={user.name} age={user.age} />
      ))}
    </div>
  );
};

export default UserContainer;
