import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import UserType from './Types/UserType';
import UserContainer from './User/UserContainer';

const App: React.FunctionComponent = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  const handleUserChange: Function = (user: UserType) => {
    setUsers((prevState) => [user, ...prevState]);
  };
  return (
    <main className="App">
      <Form handleUserChange={handleUserChange} />
      <UserContainer users={users} />
    </main>
  );
};

export default App;
