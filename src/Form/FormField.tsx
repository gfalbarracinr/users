import React from 'react';

interface Props {
  changeAge: (age: number) => void;
  changeName: (name: string) => void;
}
const FormField: React.ElementType = ({ changeAge, changeName }: Props) => {
  const handleNameChange = (event: any): void => {
    changeName(event.target.value);
  };

  const handleAgeChange = (event: any): void => {
    changeAge(event.target.value);
  };

  return (
    <fieldset className="form-field">
      <label htmlFor="name" className="label-name">
        Write your name
      </label>
      <input type="text" id="name" className="input-name" onChange={handleNameChange} required />
      <label htmlFor="age" className="label-age">
        Write your age (up to 30)
      </label>
      <input
        type="number"
        id="age"
        className="input-age"
        onChange={handleAgeChange}
        required
        min="0"
        max="30"
      />
    </fieldset>
  );
};

export default FormField;
