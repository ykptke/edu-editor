import React from 'react';

import Quill from 'quill';
import 'quill/dist/quill.snow.css';

import Katex from 'katex';
import 'katex/dist/katex.min.css';

import MathEditorPopover from './MathEditorPopover';

/* const toolbarOptions = [
 *   ['bold', 'italic', 'underline', 'strike'],
 *   [{ 'list': 'ordered'}, { 'list': 'bullet' }],
 *   [{ 'color': [] }],
 *   [{ 'align': [] }],
 *   ['blockquote'],
 *   ['image', 'formula']
 * ];
 * */

class EducationEditor extends React.Component {
  constructor() {
    super();
    window.katex = Katex;
    this.state = {
      mathEditorIsOpen: false
    };
    this.toggleMathEditor = this.toggleMathEditor.bind(this);
  }

  componentDidMount() {
    this.renderEditor();
  }

  toggleMathEditor() {
    this.setState((prevState, props) => {
      return {
	mathEditorIsOpen: !prevState.mathEditorIsOpen
      }
    })
  }

  renderEditor() {
    let instance = this;

    this.editor = new Quill(this.editorContainer, {
      modules: {
	formula: true,
	toolbar: {
	  container: instance.editorToolbar,
	  handlers: {
            formula() {
	      instance.toggleMathEditor();
	      //instance.insertEmbed('formula', '\\frac{2}{4}');
            },
            image() {
	      instance.insertEmbed('image', 'http://maymun.gen.tr/images/maymun.jpg');
            }
	  }
	},
      },
      theme: 'snow'
    });
  }

  insertEmbed(type, value) {
    const selection = this.editor.getSelection();
    this.editor.insertEmbed(selection.index, type, value);
  }

  render() {
    const { mathEditorIsOpen } = this.state;

    return (
      <div>
	<div ref={el => this.editorToolbar = el}>
	  <MathEditorPopover isOpen={mathEditorIsOpen} onOuterAction={this.toggleMathEditor} onEditComplete={this.insertEmbed}>
	    <button className="ql-formula">Formula</button>
	  </MathEditorPopover>

	</div>
	<div ref={el => this.editorContainer = el}></div>
      </div>
    )
  }
}

export default EducationEditor;
