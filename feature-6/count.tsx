import React, { useEffect, useState } from 'react';

export default function () {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timmer = setTimeout(() => {
      setCount(() => count + 1);
    }, 1000);
    return () => clearTimeout(timmer);
  });

  useEffect(() => {
    console.log(count);
  }, [count]);

  return <div>三秒后+1：{count}</div>;
}
