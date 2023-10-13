import { useState } from 'react';
import './App.css';
import Counter from './Counter';

export default function App() {
  const [isCounter, setIsCounter] = useState(false);

  const onClick = () => {
    setIsCounter(!isCounter);
  };
  return (
    <>
      {isCounter && <Counter />}
      <button onClick={onClick}>버튼</button>
    </>
  );
}
