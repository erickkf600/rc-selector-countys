import React, { useState } from 'react';
import './style.css';

const countrys = {
  Germany: 'Berling',
  Brazil: 'São Paulo',
  Portugal: 'Lisboa',
  Russia: 'Moscou'
};
function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
export default function App() {
  const key = Object.keys(countrys).map(el => ({
    name: el,
    answer: countrys[el]
  }));
  const values = Object.values(countrys).map((el, i) => ({
    name: el,
    answer: key[i].name
  }));

  const [array, setArray] = useState(shuffleArray(key.concat(values)));
  const [selections] = useState([]);
  const [elements] = useState([]);
  const [wrong, setWrong] = useState(false);
  const [_, setBackgrounds] = useState([]);

  const handle = (el, e) => {
    selections.push(el);
    elements.push(e.target);
    setBackgrounds(el.name);

    if (selections.length > 2) {
      selections.splice(0, 2);
      setWrong(false);
    }
    if (selections.length === 2) {
      validation();
    }
  };

  const validation = () => {
    const check = selections[0].name === selections[1].answer;

    if (check) {
      selections.map((el, i) => {
        let index = array.findIndex(item => item === el);
        array.splice(index, 1);
      });
    } else {
      setWrong(true);
    }
  };

  const setBackgroundColor = el => {
    return selections.indexOf(el) != -1;
  };
  return (
    <div className="app">
      <div className="buttons">
        {array.map((el, i) => (
          <button
            key={i}
            className={
              setBackgroundColor(el) ? (wrong ? 'wrong' : 'selected') : ''
            }
            onClick={e => handle(el, e)}
          >
            {el.name}
          </button>
        ))}
        {!array.length ? <h1>Congradulations!</h1> : null}
      </div>
    </div>
  );
}
