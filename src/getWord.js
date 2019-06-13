const isSpace = (char) => char === ' ' || char === ',';

const getStartIndex = (sourceText, index) => {
  if(index < 0) return 0;
  const char = sourceText[index]
  if(isSpace(char)) return index + 1;
  else return getStartIndex(sourceText, index - 1);
}

const getEndIndex = (sourceText, index) => {
  const char = sourceText[index]
  if(isSpace(char)) return index
  if(index > sourceText.length) return sourceText.length;
  else return getEndIndex(sourceText, index + 1);
}


export default function getWord(sourceText, index) {
  const invalidArgs = !sourceText || typeof index !== 'number';
  if(invalidArgs) return {};
  const indexOutOfRange = index < 0 || index >= sourceText.length;
  if(indexOutOfRange) return {};
  if(sourceText.indexOf(' ') === -1) return {
    selectionStart: 0,
    selectionEnd: sourceText.length
  }

  return {
    selectionStart: getStartIndex(sourceText, index - 1),
    selectionEnd: getEndIndex(sourceText, index)
    // selectionEnd: index === sourceText.length - 1 ? sourceText.length : getEndIndex(sourceText, index + 1)
  }
}
