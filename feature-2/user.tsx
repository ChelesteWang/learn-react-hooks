import React, { useEffect, useState } from 'react';

export default function () {
  const defaultUser = {
    name: 'xiaoming',
    age: 18,
    gender: 'man',
  };
  const [user, setUser] = useState(defaultUser);

  useEffect(() => {
    console.log(user);
  }, [user]);

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
        }}
      >
        加一岁
      </button>
    </div>
  );
}
