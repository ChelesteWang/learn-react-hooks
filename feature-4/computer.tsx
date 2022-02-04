import React, { useReducer } from 'react';

export default function () {
  const [count, dispatch] = useReducer((state, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'add':
        return state + payload;
      case 'sub':
        return state - payload;
      case 'mult':
        return state * payload;
      case 'div':
        return state / payload;
      default:
        throw new Error('action is not defined');
    }
  }, 0);

  return (
    <div>
      {count}
      <button
        onClick={() => {
          dispatch({ type: 'add', payload: 1 });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'sub', payload: 1 });
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'mult', payload: 2 });
        }}
      >
        * 2
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'div', payload: 2 });
        }}
      >
        / 2
      </button>
    </div>
  );
}
