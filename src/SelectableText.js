import React from 'react';
import getWord from './getWord'
import getDefinition from './getDefinition'

export default class SelectableText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.children
    }
    this.setSelection = this.setSelection.bind(this)
  }

  setSelection() {
    const selection = document.getSelection();
    const text = selection.anchorNode.textContent;
    const offset = selection.anchorOffset;
    const { selectionStart, selectionEnd } = getWord(text, offset);
    const range = document.createRange();
    range.setStart(selection.anchorNode, selectionStart)
    range.setEnd(selection.anchorNode, selectionEnd)
    selection.addRange(range);

    window.selectedText = text;
    const word = text.substring(selectionStart, selectionEnd);
    getDefinition(word)
      .then(res => {
        const definition = res.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];
        this.setState({ word, definition })
      })
      .catch(err => console.log('ERR: ', err))
  }

  render() {
    const {text} = this.state
    return (
      <React.Fragment>
        <span onClick={this.setSelection}>{text}</span>
        <br />
        <br />
        <br />
        <span>{`${this.state.word}: ` + this.state.definition}</span>
      </React.Fragment>
    );
  }
}
