import { useState } from 'react';
import './App.css';
import React from 'react';

interface MyButtonProps {
  title: String;
  disabled: Boolean;
}

function MyButton({ title, disabled }: MyButtonProps) {
  return <button disabled={false}>{title}</button>;
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title="I'm a disabled button" disabled={true} />
    </div>
  );
}
