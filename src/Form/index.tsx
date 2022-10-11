import React, { useState } from 'react';
import './form.css';
import FormField from './FormField';

interface Props {
  handleUserChange: Function;
}

const Form: React.FunctionComponent<Props> = ({ handleUserChange }: Props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const handleNewUserAge = (age: number): void => {
    setAge(age);
  };
  const handleNewUserName = (name: string): void => {
    setName(name);
  };
  const handleSubmit: any = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleUserChange({ name, age });
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <FormField changeName={handleNewUserName} changeAge={handleNewUserAge} />
      <button type="submit" className="form-button">
        Submit
      </button>
    </form>
  );
};

export default Form;
