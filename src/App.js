import React from 'react';
import './App.scss';
import getWord from './getWord'
import getDefinition from './getDefinition'
import SelectableText from './SelectableText'
import Definition from './Definition'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
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
        this.setState({ word, definition: 'Definition not found.' });
        console.log('ERR: ', err)
      })
  }

  render() {
    return (
      <div className="App">
        <SelectableText handleClick={this.setSelection}>
          <h1>Dictionary</h1>
          <p>
            A dictionary, sometimes known as a wordbook, is a collection of words in one or more specific languages, often arranged alphabetically (or by radical and stroke for ideographic languages), which may include information on definitions, usage, etymologies, pronunciations, translation, etc. or a book of words in one language with their equivalents in another, sometimes known as a lexicon. It is a lexicographical reference that shows inter-relationships among the data.
          </p>
        </SelectableText>
        { this.state.word ? <Definition word={this.state.word} definition={this.state.definition} /> : null }
      </div>
    );
  }
}

export default App;
