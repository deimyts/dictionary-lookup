const isSpace = (char) => char === ' ';

const getNextChar = (sourceText, index, result) => {
  if(index < sourceText.length) {
    if(isSpace(sourceText[index])) return result;
    result += sourceText[index]
    return getNextChar(sourceText, index + 1, result);
  } else {
    return result
  }
}

const getPrevChar = (sourceText, index, result) => {
  if(index >= 0) {
    if(isSpace(sourceText[index])) return result;
    result = sourceText[index] + result;
    return getPrevChar(sourceText, index - 1, result);
  } else {
    return result
  }
}

export default function getWord(sourceText, index) {
  const invalidArgs = !sourceText || typeof index !== 'number';
  if(invalidArgs) return '';
  const indexOutOfRange = index + 1 > sourceText.length || index < 0;
  if(indexOutOfRange) return '';

  let result = sourceText[index];

  result = result + getNextChar(sourceText, index + 1, '');
  result = getPrevChar(sourceText, index - 1, '') + result;
  return result
}
