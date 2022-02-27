import Timer from './timer';
import Store from './useCount';
import React from 'react';

function App() {
  return (
    <Store.Provider>
      <Timer />
    </Store.Provider>
  );
}

export default App;
