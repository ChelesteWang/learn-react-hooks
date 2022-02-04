import React, { useEffect, useState } from 'react';

export default function () {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + step);
    }, 1000);
    return () => clearInterval(id);
  }, [step]);

  return (
    <div>
      <h1>{count}</h1>
      <input value={step} onChange={(e) => setStep(Number(e.target.value))} />
    </div>
  );
}
