import React, { useEffect, useReducer } from 'react';

export default function () {
  const initialState = {
    count: 0,
    step: 1,
  };

  function reducer(state, action) {
    console.log(state, action);
    const { count, step } = state;
    switch (action.type) {
      case 'tick':
        return { ...state, count: count + step };
      case 'step':
        return { ...state, step: action.step };
      default:
        throw new Error('action is not defined');
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h1>
        count:{count}, step: {step}
      </h1>
      <input
        value={step}
        onChange={(e) =>
          dispatch({ type: 'step', step: Number(e.target.value) })
        }
      />
    </div>
  );
}
