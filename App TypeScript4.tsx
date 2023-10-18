import { useState } from 'react';
import './App.css';
import React from 'react';

export default function Form() {
  const [value, setValue] = useState('Change me');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);
  }
  return (
    <>
      <input value={value} onChange={handleChange} />
      <p>value: {value}</p>
    </>
  );
}
