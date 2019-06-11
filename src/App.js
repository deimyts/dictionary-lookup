import React from 'react';
import './App.css';
import SelectableText from './SelectableText'
import getWord from './getWord'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const setSelection = () => {
      const selection = document.getSelection();
      const text = selection.anchorNode.textContent;
      const offset = selection.anchorOffset;
      const { selectionStart, selectionEnd } = getWord(text, offset);
      this.setState({ selectionStart, selectionEnd });
    }

    return (
      <div className="App">
        <h1>Dictionary</h1>
        <p>
          <SelectableText selectionStart={this.state.selectionStart} selectionEnd={this.state.selectionEnd} onClick={setSelection}>
            A dictionary, sometimes known as a wordbook, is a collection of words in one or more specific languages, often arranged alphabetically (or by radical and stroke for ideographic languages), which may include information on definitions, usage, etymologies, pronunciations, translation, etc. or a book of words in one language with their equivalents in another, sometimes known as a lexicon. It is a lexicographical reference that shows inter-relationships among the data.
          </SelectableText>
        </p>
      </div>
    );
  }
}

export default App;
