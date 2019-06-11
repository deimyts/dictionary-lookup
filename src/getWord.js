export default function getWord(sourceText, index) {
  if(!sourceText) return '';
  if(typeof index !== 'number') return '';
  if(index + 1 > sourceText.length) return '';
  let result = sourceText[index];
  if(index + 1 < sourceText.length) result = result + sourceText[index+1]
  return result
}
