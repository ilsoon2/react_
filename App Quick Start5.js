import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButto count={count} onClick={handleClick} />
      <MyButto count={count} onClick={handleClick} />
    </div>
  );
}

function MyButto({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}


