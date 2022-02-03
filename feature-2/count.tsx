import React, { useEffect, useState } from 'react';

export default function () {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(() => count + 1);
    }, 3000);
  });

  return <div>三秒后+1：{count}</div>;
}
