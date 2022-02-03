import React, { useReducer, useState } from 'react';

export default function () {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer((action) => {
    switch (action.type) {
      case 'add':
        return { count: count + 1 };
    }
  }, 0);

  

  return (
    <div>
      {count}
      {[1, 2, 3, 4].map((item) => {
        return (
          <button
            onClick={() => {
              dispatch({ type: 'add' });
            }}
          >
            +{item}Í
          </button>
        );
      })}
    </div>
  );
}
