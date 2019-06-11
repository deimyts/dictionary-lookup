const isSpace = (char) => char === ' ';

const getNextChars = (sourceText, index, result = '') => {
  if(index >= sourceText.length || index < 0) {
    return result
  } else {
    if(isSpace(sourceText[index])) return result;
    result += sourceText[index]
    return getNextChars(sourceText, index + 1, result);
  }
}

const getPrevChars = (sourceText, index, result = '') => {
  if(index >= sourceText.length || index < 0) { 
    return result 
  } else {
    if(isSpace(sourceText[index])) return result;
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
