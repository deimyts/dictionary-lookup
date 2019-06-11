const isSpace = (char) => char === ' ';

const getChars = (sourceText, index, result = '', fn) => {
  const char = sourceText[index]
  const indexOutOfRange = index >= sourceText.length || index < 0
  if(indexOutOfRange || isSpace(char)) {
    return result
  } else {
    return fn();
  }
}

const getNextChars = (sourceText, index, result = '') => {
  return getChars(sourceText, index, result, () => {
    result += sourceText[index]
    return getNextChars(sourceText, index + 1, result);
  })
}

const getPrevChars = (sourceText, index, result = '') => {
  return getChars(sourceText, index, result, () => {
    result = sourceText[index] + result;
    return getPrevChars(sourceText, index - 1, result);
  })
}

const getStartIndex = (sourceText, index) => {
  if(index <= 0) return 0;
  if(isSpace(sourceText[index])) return index + 1;
  else return getStartIndex(index - 1);
}

const getEndIndex = (sourceText, index) => {
  if(index >= sourceText.length) return sourceText.length;
  if(isSpace(sourceText[index])) return index;
  else return getEndIndex(sourceText, index + 1);
}


export default function getWord(sourceText, index) {
  const invalidArgs = !sourceText || typeof index !== 'number';
  if(invalidArgs) return {};
  const indexOutOfRange = index + 1 > sourceText.length || index < 0;
  if(indexOutOfRange) return {};
  if(sourceText.indexOf(' ') === -1) return {
    selectionStart: 0,
    selectionEnd: sourceText.length
  }

  const selectionStart = null
  const selectionEnd = null

  // let result = sourceText[index];

  return {
    selectionStart: getStartIndex(sourceText, index - 1),
    selectionEnd: getEndIndex(sourceText, index + 1)
  }
  // result = getPrevChars(sourceText, index - 1) + result + getNextChars(sourceText, index + 1)
  // return result
}
