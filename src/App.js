import React, { useState } from 'react';
import './style.css';

const countrys = {
  Germany: 'Berling',
  Brazil: 'São Paulo',
  Portugal: 'Lisboa',
  Russia: 'Moscou'
};
export default function App() {
  const key = Object.keys(countrys);
  const values = Object.values(countrys);

  const [array] = useState(key.concat(values));
  return (
    <div className="app">
      <div className="buttons">
        {array.map((el, i) => (
          <button key={i}>{el}</button>
        ))}
      </div>
    </div>
  );
}
