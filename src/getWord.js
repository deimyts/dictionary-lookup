const isSpace = (char) => char === ' ';

const getStartIndex = (sourceText, index) => {
  if(isSpace(sourceText[index])) return index + 1;
  if(index <= 0) return 0;
  else return getStartIndex(sourceText, index - 1);
}

const getEndIndex = (sourceText, index) => {
  if(index >= sourceText.length) return sourceText.length;
  if(isSpace(sourceText[index])) return index;
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
    selectionStart: getStartIndex(sourceText, index),
    selectionEnd: getEndIndex(sourceText, index + 1)
  }
}
