import React, { useReducer } from 'react';

export default function () {
  const [count, dispatch] = useReducer((state, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'add':
        return state + payload;
      default:
        throw new Error('action is not defined');
    }
  }, 0);

  return (
    <div>
      {count}
      {[1, 2, 3, 4].map((item) => {
        return (
          <button
            onClick={() => {
              dispatch({ type: 'add', payload: item });
            }}
            key={item}
          >
            +{item}
          </button>
        );
      })}
    </div>
  );
}
