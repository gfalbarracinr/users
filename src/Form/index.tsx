import React from 'react';
import './form.css';
import FormField from './FormField';

interface Props {
  handleUserChange: Function;
}

const Form: React.FunctionComponent<Props> = ({ handleUserChange }: Props) => (
  <form className="form">
    <FormField />
    <button type="submit" className="form-button">
      Submit
    </button>
  </form>
);

export default Form;
