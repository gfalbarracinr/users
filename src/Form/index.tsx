import React from 'react';
import './form.css';
import FormField from './FormField';
const Form: React.FunctionComponent = () => (
  <form className="form">
    <FormField />
    <button type="submit" className="form-button">
      Submit
    </button>
  </form>
);

export default Form;
