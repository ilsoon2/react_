import React, { useEffect, useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  // useEffect(() => {}, []);
  // useEffect(() => {}, [number]);

  useEffect(() => {
    console.log('Initial Mounted');
    return () => {
      console.log('Unmounted');
    };
  }, []);

  useEffect(() => {
    console.log('updated...>', number);
  }, [number]);

  const onIncrease = () => {
    setNumber(number + 1);
  };
  const onDecrease = () => {
    setNumber(number - 1);
  };

  return (
    <>
      <div>{number}</div>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </>
  );
}
