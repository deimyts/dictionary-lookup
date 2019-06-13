import React from 'react';
import './App.css';
import SelectableText from './SelectableText'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SelectableText>
          <h1>Dictionary</h1>
          <p>
            A dictionary, sometimes known as a wordbook, is a collection of words in one or more specific languages, often arranged alphabetically (or by radical and stroke for ideographic languages), which may include information on definitions, usage, etymologies, pronunciations, translation, etc. or a book of words in one language with their equivalents in another, sometimes known as a lexicon. It is a lexicographical reference that shows inter-relationships among the data.
          </p>
        </SelectableText>
      </div>
    );
  }
}

export default App;
