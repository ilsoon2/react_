import React from 'react';
import Counter from './Counter';
import { createContext, useReducer } from 'react';

export const CounterContext = createContext(null);

const InitialState = {
  counter: { count: 0 },
};

function CounterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: { count: state.counter.count + 1 },
      };
    case 'DECREMENT':
      return {
        counter: { count: state.counter.count - 1 },
      };
    default:
      return state;
  }
}

export default function App() {
  const [CounterState, CounterDispatch] = useReducer(
    CounterReducer,
    InitialState
  );
  return (
    <CounterContext.Provider value={CounterDispatch}>
      <Counter state={CounterState} />
      <Counter state={CounterState} />
      <Counter state={CounterState} />
      <Counter state={CounterState} />
      <Counter state={CounterState} />
      <Counter state={CounterState} />
      <Counter state={CounterState} />
      <Counter state={CounterState} />
      <Counter state={CounterState} />
    </CounterContext.Provider>
  );
}
