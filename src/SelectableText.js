import React from 'react';
import getWord from './getWord'
import getDefinition from './getDefinition'

const Definition = (props) => (<div>{`${props.word}: ${props.definition}`}</div>)

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
        this.setState({ word, definition });
      })
      .catch(err => {
        this.setState({ word, definition: 'Definition not found' });
        console.log('ERR: ', err)
      })
  }

  render() {
    const {text} = this.state
    return (
      <React.Fragment>
        <div onClick={this.setSelection}>{text}</div>
        { this.state.word ? <Definition word={this.state.word} definition={this.state.definition} /> : null }
      </React.Fragment>
    );
  }
}
