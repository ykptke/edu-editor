import React from 'react';
import './MathEditorToolbar.css';

const styles = {
  button: {
    width: 45,
    height: 45,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain'
  }
};

export default () => (
  <div>
    <button className="btn btn-frac"></button>
    <button className="btn btn-square-root"></button>
    <button className="btn btn-x-root"></button>
    <button className="btn btn-x-power"></button>
  </div>
);
