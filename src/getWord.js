const getNextChar = (sourceText, index, result) => {
  const nextChar = index + 1;
  if(nextChar < sourceText.length) {
    result += sourceText[nextChar]
    return getNextChar(sourceText, nextChar, result);
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

  result = getNextChar(sourceText, index, result);
  const prevChar = index - 1;
  if(prevChar >= 0) result = sourceText[prevChar] + result
  return result
}
