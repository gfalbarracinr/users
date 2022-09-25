import React, { useState } from 'react';
import './App.css';
import Form from './Form';

const App: React.FunctionComponent = () => {
  const [users, setUsers] = useState([]);
  return (
    <main className="App">
      <Form />
      <Users />
    </main>
  );
};

export default App;
