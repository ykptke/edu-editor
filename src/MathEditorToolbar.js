import React from 'react';

const buttons = [
  { name: 'frac', latex: '\\frac{}{}' },
  { name: 'square-root', latex: '\\sqrt{}' },
  { name: 'x-root', latex: '\\sqrt[{}]{}' },
  { name: 'x-power', latex: '\\^{}' },
];

export default ({ onClickFormula = (e) => console.log(e) }) => (
  <div>
    {
      buttons.map(el => (
	<button key={el.name} className={`math-btn ${el.name}`} onClick={() => onClickFormula(el.latex)} />
      ))
    }
  </div>
);
