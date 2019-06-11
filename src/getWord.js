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

export default function getWord(sourceText, index) {
  const invalidArgs = !sourceText || typeof index !== 'number';
  if(invalidArgs) return '';
  const indexOutOfRange = index + 1 > sourceText.length || index < 0;
  if(indexOutOfRange) return '';

  let result = sourceText[index];

  result = getPrevChars(sourceText, index - 1) + result + getNextChars(sourceText, index + 1)
  return result
}
