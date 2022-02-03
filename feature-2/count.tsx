import React, { useEffect, useState } from 'react';

export default function () {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(() => count + 1);
    });
  }, []);

  return (
    <div>
      {count}
    </div>
  );
}
