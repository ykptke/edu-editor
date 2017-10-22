import React from 'react';
import PropTypes from 'prop-types';
import 'mathquill/build/mathquill.css';
import 'mathquill/build/mathquill.js'
import './MathEditor.css';
import MathEditorToolbar from './MathEditorToolbar';

class MathEditor extends React.Component {
  constructor() {
    super();
    this.writeFormula = this.writeFormula.bind(this);
  }
  componentDidMount() {
    let MQ = window.MathQuill.getInterface(2);
    this.mathField = MQ.MathField(this.mathFieldSpan);
  }
  writeFormula(value) {
    this.mathField.write(value);
    this.mathField.focus();
  }
  handleEditComplate() {
    const { onEditComplete } = this.props;
    const value = this.mathField.latex();
    onEditComplete({ type: 'formula', value });
  }
  render() {
    return (
      <div className="math-panel">
	<MathEditorToolbar onClickFormula={this.writeFormula} />
	<div className="math-field" ref={el => this.mathFieldSpan = el} />
	<button className="btn btn-default" onClick={() => this.handleEditComplate()}>Ekle</button>
      </div>
    )
  }
};

MathEditor.propTypes = {
  onEditComplete: PropTypes.func
};

export default MathEditor;
