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
          setUser({
            ...user,
            age: user.age + 1,
          });
          console.log(user);
        }}
      >
        加一岁
      </button>
    </div>
  );
}