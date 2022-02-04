import React from 'react';
import CounterWithState from './count';
import CounterWithReducer from './count1';

export default function () {
  return (
    <div>
      <h2>feature-5</h2>
      CounterWithState
      <CounterWithState />
      CounterWithReducer
      <CounterWithReducer />
    </div>
  );
}
