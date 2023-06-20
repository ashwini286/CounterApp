import React, { useState } from 'react';
// import './style.css';

export default function Counter() {
  const [Counter, setCounter] = useState(0);
  function count() {
    setCounter(Counter + 1);
  }
  function countminus() {
    setCounter(Counter - 1);
  }
  return (
    <div>
      <h1> count: {Counter}</h1>
      <button onClick={count}>CLick me</button>
      <button onClick={countminus}>CLick me</button>
    </div>
  );
}
