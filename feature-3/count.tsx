import React, { useState } from 'react';

export default function () {
  const [count, setCount] = useState(0);

  function handleClick(num) {
    setCount(() => count + num);
  }

  return (
    <div>
      {count}
      {[1,2,3,4].map((item)=>{
        return(<button
          onClick={() => {
            handleClick(item);
          }}
        >
          +{item}
        </button>)
      })}
    </div>
  );
}
