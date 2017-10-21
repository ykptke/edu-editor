import React from 'react';
import PropTypes from 'prop-types';

import 'mathquill/build/mathquill.css';
import 'mathquill/build/mathquill.js'

import MathEditorToolbar from './MathEditorToolbar';

const styles = {
  body: {
    display: 'inline-flex',
    flexDirection: 'column',
    padding: 5,
    background: 'hsl(0, 0%, 80%)',
    borderRadius: '0.3rem'
  }
};

class MathEditor extends React.Component {
  componentDidMount() {
    let MQ = window.MathQuill.getInterface(2);

    this.mathField = MQ.MathField(this.mathFieldSpan, {
      spaceBehavesLikeTab: true,
      handlers: {
	edit: () => {
	  this.mathField.focus()
	}
      }
    });
  }
  render() {
    return (
      <div style={styles.body}>
	<MathEditorToolbar />
	<span ref={el => this.mathFieldSpan = el}></span>
      </div>
    )
  }
};

MathEditor.propTypes = {
  onEditComplete: PropTypes.func
};

export default MathEditor;
