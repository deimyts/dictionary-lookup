const isSpace = (char) => char === ' ';

const getNextChars = (sourceText, index, result = '') => {
  const char = sourceText[index]
  const indexOutOfRange = index >= sourceText.length || index < 0
  if(indexOutOfRange || isSpace(char)) {
    return result
  } else {
    result += sourceText[index]
    return getNextChars(sourceText, index + 1, result);
  }
}

const getPrevChars = (sourceText, index, result = '') => {
  const char = sourceText[index]
  const indexOutOfRange = index >= sourceText.length || index < 0
  if(indexOutOfRange || isSpace(char)) { 
    return result 
  } else {
    result = sourceText[index] + result;
    return getPrevChars(sourceText, index - 1, result);
  }
}

export default function getWord(sourceText, index) {
  const invalidArgs = !sourceText || typeof index !== 'number';
  if(invalidArgs) return '';
  const indexOutOfRange = index + 1 > sourceText.length || index < 0;
  if(indexOutOfRange) return '';

  let result = sourceText[index];

  result = getPrevChars(sourceText, index - 1) + result + getNextChars(sourceText, index + 1)
  return result
}
