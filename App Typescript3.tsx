import { useReducer, useState } from 'react';
import './App.css';
import React from 'react';

interface State {
  count: number;
}

type CounterAction =
  | { type: 'reset' }
  | { type: 'setCount', value: State['count'] };

const initialState: State = { count: 0 };

function stateRedcer(state: State, action: CounterAction): State {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'setCount':
      return { ...state, count: action.value };
    default:
      throw new Error('Unkcown action');
  }
}

export default function App() {
  const [state, dispatch] = useReducer(stateRedcer, initialState);

  const addFive = () => dispatch({ type: 'setCount', value: state.count + 5 });
  const reset = () => dispatch({ type: 'reset' });

  return (
    <div>
      <h1>Welcome to my counter</h1>

      <p>Count : {state.count}</p>
      <button onClick={addFive}>Add 5</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}