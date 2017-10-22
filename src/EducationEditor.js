import React from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import Katex from 'katex';
import 'katex/dist/katex.min.css';

import MathEditorPopover from './MathEditorPopover';

class EducationEditor extends React.Component {
  constructor() {
    super();
    window.katex = Katex;

    this.state = {
      cursorIndex: 0,
      mathEditorIsOpen: false
    };

    this.toggleMathEditor = this.toggleMathEditor.bind(this);
    this.insertEmbed = this.insertEmbed.bind(this);
  }

  componentDidMount() {
    this.installEditor();
  }

  toggleMathEditor() {
    this.setState((prevState, props) => {
      return {
	mathEditorIsOpen: !prevState.mathEditorIsOpen
      }
    })
  }

  insertEmbed({ type, value }) {
    const { cursorIndex } = this.state;
    if (type === 'formula') {
      // clone math editor popover
      this.toggleMathEditor();
    }
    this.editor.insertEmbed(cursorIndex, type, value);
  }

  installEditor() {
    let instance = this;

    this.editor = new Quill(this.editorContainer, {
      modules: {
	formula: true,
	toolbar: {
	  container: instance.editorToolbar,
	  handlers: {
            formula() {
	      instance.toggleMathEditor();
            },
            image() {
	      instance.insertEmbed({
		type: 'image',
		value: 'http://maymun.gen.tr/images/maymun.jpg'
	      });
            }
	  }
	},
      },
      theme: 'snow'
    });

    this.editor.on('editor-change', () => {
      const range = this.editor.getSelection();

      if (range) {
	this.setState({
	  cursorIndex: range.index
	});
      }
    });
  }

  render() {
    const { mathEditorIsOpen } = this.state;

    return (
      <div>
	<div ref={el => this.editorToolbar = el}>
	  <select className="ql-size" defaultValue="">
	    <option value="small">Küçük</option>
	    <option value="">Normal</option>
	    <option value="large">Büyük</option>
	  </select>
	  <span className="ql-formats">
	    <button className="ql-bold"/>
	    <button className="ql-italic"/>
	    <button className="ql-underline"/>
	    <button className="ql-strike"/>
	  </span>
	  <span className="ql-formats">
	    <button className="ql-list" value="ordered"/>
	    <button className="ql-list" value="bullet"/>
	  </span>
	  <span className="ql-formats">
	    <select className="ql-color"></select>
	    <select className="ql-align"></select>
	  </span>
	  <span className="ql-formats">
	    <button className="ql-blockquote"/>
	  </span>
	  <span className="ql-formats">
	    <MathEditorPopover isOpen={mathEditorIsOpen} onOuterAction={this.toggleMathEditor} onEditComplete={this.insertEmbed}>
	      <button className="ql-formula">Formula</button>
	    </MathEditorPopover>
	    <button className="ql-image"/>
	  </span>
	</div>
	<div ref={el => this.editorContainer = el}>Birşeyler yaz...</div>
      </div>
    )
  }
}

export default EducationEditor;
