import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import UserType from './Types/UserType';
import UserContainer from './User/UserContainer';
const userList: UserType[] = [
  {
    name: 'prueba 1',
    age: 23
  },
  {
    name: 'prueba 2',
    age: 23
  }
];
const App: React.FunctionComponent = () => {
  const [users, setUsers] = useState<UserType[]>(userList);

  const handleUserChange: Function = (users: UserType[]) => {
    setUsers((prevState) => ({
      ...users
    }));
  };
  return (
    <main className="App">
      <Form handleUserChange={handleUserChange} />
      <UserContainer users={users} />
    </main>
  );
};

export default App;
