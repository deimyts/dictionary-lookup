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

    const word = text.substr(selectionStart, selectionEnd);
    getDefinition(word).then(res => {
      this.setState({ definition: res.body.json() })
    });
  }

  render() {
    const {selectionStart, selectionEnd, text} = this.state
    const children = this.props.children;
    return (
      <React.Fragment>
        <span onClick={this.setSelection}>{text}</span>
        <span>{this.state.definition}</span>
      </React.Fragment>
    );
  }
}
