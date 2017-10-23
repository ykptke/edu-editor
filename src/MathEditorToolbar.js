import React from 'react';

const buttons = [
  { name: 'frac', latex: '\\frac{}{}' },
  { name: 'square-root', latex: '\\sqrt{}' },
  { name: 'x-power-square-root', latex: '\\sqrt[{}]{}' },
  { name: 'x-power', latex: '\\^{}' },
  { name: 'x-sub-power', latex: '\\_{}' },
  { name: 'sum', latex: '\\sum' },
  { name: 'prod', latex: '\\prod' },
  { name: 'int', latex: '\\int' },
  { name: 'oint', latex: '\\oint' },
  { name: 'bigwedge', latex: '\\bigwedge' },
  { name: 'bigvee', latex: '\\bigvee' },
  { name: 'circ', latex: '^\\circ{}' },
  { name: 'overleftarrow', latex: '\\overleftarrow{AB}' },
  { name: 'overrightarrow', latex: '\\overrightarrow{AB}' },
  { name: 'alpha', latex: '\\alpha' },
  { name: 'beta', latex: '\\beta' },
  { name: 'gamma', latex: '\\gamma' },
  { name: 'delta', latex: '\\delta' },
  { name: 'mu', latex: '\\mu' },
  { name: 'pi', latex: '\\pi' },
  { name: 'omega', latex: '\\Omega' },
  { name: 'subset', latex: '\\subset' },
  { name: 'supset', latex: '\\supset' },
  { name: 'to', latex: '\\to' },
  { name: 'gets', latex: '\\gets' },
  { name: 'in', latex: '\\in' },
  { name: 'notin', latex: '\\notin' },
  { name: 'ni', latex: '\\ni' },
  { name: 'infty', latex: '\\infty' },
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
