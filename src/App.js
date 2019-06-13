import React from 'react';
import './App.scss';
import getWord from './getWord'
import getDefinition from './getDefinition'
import SelectableText from './SelectableText'
import Definition from './Definition'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      popoverActive: false
    }
    this.setSelection = this.setSelection.bind(this)
    this.hidePopover = this.hidePopover.bind(this)
  }

  setSelection(e) {
    this.showPopover(e.pageX, e.pageY);
    const word = highlightWord();
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

  showPopover(xOffset, yOffset) {
    const definitionPosition = {
      left: xOffset,
      top: yOffset
    }
    this.setState({ definitionPosition, popoverActive: true })
  }

  hidePopover() {
    this.setState({ popoverActive: false });
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
        { this.state.popoverActive ? 
            <Definition 
              word={this.state.word}
              definition={this.state.definition} 
              style={this.state.definitionPosition}  
              overlayClickHandler={this.hidePopover} 
            /> 
            : null 
        }
      </div>
    );
  }
}

function highlightWord() {
  const selection = document.getSelection();
  const text = selection.anchorNode.textContent;
  const offset = selection.anchorOffset;
  const { selectionStart, selectionEnd } = getWord(text, offset);
  const range = document.createRange();
  range.setStart(selection.anchorNode, selectionStart)
  range.setEnd(selection.anchorNode, selectionEnd)
  selection.addRange(range);
  return text.substring(selectionStart, selectionEnd);
}

export default App;
