const invalidChars = /[^a-zA-Z]/g
const isSpace = (char) => invalidChars.test(char);

const getStartIndex = (sourceText, index) => {
  if(index < 0) return 0;
  const char = sourceText[index]
  // console.log('CHAR: ', char, isSpace(char))
  if(isSpace(char)) return index + 1;
  else return getStartIndex(sourceText, index - 1);
}

const getEndIndex = (sourceText, index) => {
  const char = sourceText[index]
  console.log('CHAR: ', char, 'INDEX: ', index, 'INVALID?: ', isSpace(char))
  // if(index > sourceText.length) return sourceText.length;
  // if(index === sourceText.length) return 'baz';
  if(index > sourceText.length) return 'baz';
  else if(index === sourceText.length - 1) {
    if(isSpace(char)) return 'foobar'
    return sourceText.length
  }
  else if(isSpace(char)) return 'foo'
  else return getEndIndex(sourceText, index + 1);
}


export default function getWord(sourceText, index) {
  console.log('SOURCE: ', sourceText)
  const invalidArgs = !sourceText || typeof index !== 'number';
  if(invalidArgs) return {};
  const indexOutOfRange = index < 0 || index >= sourceText.length;
  if(indexOutOfRange) return {};
  if(!invalidChars.test(sourceText)) return {
    selectionStart: 0,
    selectionEnd: sourceText.length
  }

  return {
    selectionStart: getStartIndex(sourceText, index - 1),
    selectionEnd: getEndIndex(sourceText, index)
    // selectionEnd: index === sourceText.length - 1 ? sourceText.length : getEndIndex(sourceText, index + 1)
  }
}
