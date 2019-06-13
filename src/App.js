import React from 'react';
import './App.scss';
import getWord from './getWord'
import getDefinition from './getDefinition'
import SelectableText from './SelectableText'
import Definition from './Definition'

const extractDefinition = (entryData) => entryData.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      popoverActive: false,
      sections: []
    }
    this.setSelection = this.setSelection.bind(this)
    this.hidePopover = this.hidePopover.bind(this)
  }

  setSelection(e) {
    this.setState({ word: '', definition: '' });
    this.showPopover(e.pageX, e.pageY);
    const [ start, word, end ] = highlightWord();
    getDefinition(word)
      .then(extractDefinition)
      .then(definition => this.setState({ word, definition, sections: [ start, word, end ]}))
      .catch(err => {
        this.setState({ word, definition: 'Definition not found.', sections: [ start, word, end ]});
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
        <SelectableText handleClick={this.setSelection} highlightActive={this.state.popoverActive} sections={this.state.sections}>
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
  console.log('SELECTION: ', selection);
  console.log('RANGE:', range);

  // const fullText = range.commonAncestorContainer.parentNode.parentNode;

  // console.log('node text: ', text)
  // console.log('full text: ', fullText)

  const start = text.substring(0, selectionStart)
  const word = text.substring(selectionStart, selectionEnd)
  const end = text.substring(selectionEnd, text.length)
  return [ start, word, end ];
}

export default App;
