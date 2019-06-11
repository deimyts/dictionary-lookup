const getNextChar = (sourceText, char, result) => {
  if(char < sourceText.length) {
    if(sourceText[char] === ' ') return result;
    result += sourceText[char]
    return getNextChar(sourceText, char + 1, result);
  } else {
    return result
  }
}

const getPrevChar = (sourceText, char, result) => {
  if(char >= 0) {
    if(sourceText[char] === ' ') return result;
    result = sourceText[char] + result;
    return getPrevChar(sourceText, char - 1, result);
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
