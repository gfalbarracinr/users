import React from 'react';
const FormField: React.FunctionComponent = () => (
  <fieldset className="form-field">
    <label htmlFor="name" className="label-name">
      Write your name
    </label>
    <input type="text" id="name" className="input-name" />
    <label htmlFor="age" className="label-age">
      Write your age (up to 30)
    </label>
    <input type="number" id="age" className="input-age" />
  </fieldset>
);

export default FormField;
