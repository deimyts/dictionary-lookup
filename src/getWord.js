export default function getWord(sourceText, index) {
  const invalidArgs = !sourceText || typeof index !== 'number';
  if(invalidArgs) return '';
  const indexOutOfRange = index + 1 > sourceText.length || index < 0;
  if(indexOutOfRange) return '';

  let result = sourceText[index];
  const nextChar = index + 1;
  const prevChar = index - 1;
  if(nextChar < sourceText.length) result = result + sourceText[nextChar]
  if(prevChar >= 0) result = sourceText[prevChar] + result
  return result
}
