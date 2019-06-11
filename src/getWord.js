const getNextChar = (sourceText, nextChar, result) => {
  if(nextChar < sourceText.length) {
    if(sourceText[nextChar] === ' ') return result;
    result += sourceText[nextChar]
    return getNextChar(sourceText, nextChar + 1, result);
  } else {
    return result
  }
}

const getPrevChar = (sourceText, prevChar, result) => {
  if(prevChar >= 0) {
    result = sourceText[prevChar] + result;
    return getPrevChar(sourceText, prevChar - 1, result);
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

  result = getNextChar(sourceText, index + 1, result);
  result = getPrevChar(sourceText, index - 1, result);
  return result
}
