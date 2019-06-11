export default function getWord(sourceText, index) {
  const invalidArgs = !sourceText || typeof index !== 'number';
  if(invalidArgs) return '';
  const indexOutOfRange = index + 1 > sourceText.length || index < 0;
  if(indexOutOfRange) return '';

  let result = sourceText[index];
  const nextChar = index + 1;
  if(nextChar < sourceText.length) result = result + sourceText[nextChar]
  if(index - 1 >= 0) result = sourceText[index - 1] + result
  return result
}
