import useCount from './useCount';
import React from 'react';

const Timer = () => {
  const { count, decrement, increment } = useCount.useContainer();
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Timer;
