import { useState } from 'react';
import React from 'react'
import createContainer from './createContainer';

const Timer = (props) => {
  const { increment, count, decrement } = props;
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default function () {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return <Timer count={count} increment={increment} decrement={decrement} />;
}
