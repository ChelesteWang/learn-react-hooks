import React, { useState } from 'react';

export default function () {
  const defaultUser = {
    name: 'xiaoming',
    age: 18,
    gender: 'man',
  };
  const [user, setUser] = useState(defaultUser);

  return (
    <div>
      <div>
        <span>{user.name}</span>
        <span>{user.age}</span>
        <span>{user.gender}</span>
      </div>
      <button
        onClick={() => {
          setUser((old) => {
            return {
              ...old,
              age: old.age + 1,
            };
          });
          setUser((old) => {
            return {
              ...old,
              age: old.age + 1,
            };
          });
          setUser((old) => {
            return {
              ...old,
              age: old.age + 1,
            };
          });
        }}
      >
        加三次
      </button>
    </div>
  );
}
