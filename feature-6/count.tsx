import React, { useEffect, useState } from 'react';

export default function () {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timmer = setTimeout(() => {
      setCount(() => count + 1);
    }, 1000);
    return () => clearTimeout(timmer);
  });

  return <div>三秒后+1：{count}</div>;
}
