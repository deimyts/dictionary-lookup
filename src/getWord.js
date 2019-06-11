export default function getWord(sourceText, index) {
  const invalidArgs = !sourceText || typeof index !== 'number';
  const indexOutOfRange = index + 1 > sourceText.length || index < 0;
  if(invalidArgs) return '';
  if(indexOutOfRange) return '';
  let result = sourceText[index];
  if(index + 1 < sourceText.length) result = result + sourceText[index+1]
  return result
}
