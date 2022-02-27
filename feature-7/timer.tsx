import Store from './useCount';
import React from 'react';

const Timer = () => {
  const useCount = Store.useContainer;
  const { count, decrement, increment } = useCount();
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Timer;
