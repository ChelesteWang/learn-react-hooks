import Store from './useCount';
import React from 'react';

const Timer = () => {
  const store = Store.useContainer();
  return (
    <div>
      <button onClick={store.decrement}>-</button>
      <span>{store.count}</span>
      <button onClick={store.increment}>+</button>
    </div>
  );
};

export default Timer;
