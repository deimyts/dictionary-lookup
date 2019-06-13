const validChars = /[a-zA-Z]/g
const isSpace = (char) => !validChars.test(char);

const getStartIndex = (sourceText, index) => {
  if(index < 0) return 0;
  const char = sourceText[index]
  // console.log('CHAR: ', char, isSpace(char))
  if(isSpace(char)) return index + 1;
  else if(index === 0) return 0;
  else return getStartIndex(sourceText, index - 1);
}

const getEndIndex = (sourceText, index) => {
  const char = sourceText[index]
  // console.log(`SOURCE: "${sourceText}"`)
  console.log(`INDEX: "${index}"`)
  // console.log('CHAR: ', `"${char}"`, 'INDEX: ', index, 'INVALID?: ', isSpace(char))
  // if(index > sourceText.length) return sourceText.length;
  // if(index === sourceText.length) return 'baz';
  const isInvalid = !char || char.match(validChars) === null;
  if(isInvalid) return index;
  else if(index >= sourceText.length - 1) {
    console.log('LAST CHAR!')
    return index;
  }
  // if(isSpace(char)) return index; 
  // if(index > sourceText.length) return `bork`;
  // if(index > sourceText.length) return sourceText.length;
  // else if(index === sourceText.length - 1) {
    // if(!isSpace(char)) return 'foobar'
    // if(isSpace(char)) return `gaw: ${index}`
    // if(isSpace(char)) return index
    // return `blah: ${sourceText.length - 1}`
    // console.log('BAR')
    // return sourceText.length
    // return sourceText.length - 1
  // }
  // else if(isSpace(char)) return `argh: ${index}`
  // else if(isSpace(char)) return index
  
  else return getEndIndex(sourceText, index + 1);
  // else return getEndIndex(sourceText, index + 1);
}


export default function getWord(sourceText, index) {
  // console.log('SOURCE: ', `"${sourceText}"`)
  let selectionStart = 0;
  let selectionEnd = 0;

  const invalidArgs = !sourceText || typeof index !== 'number';
  if(invalidArgs) {
    return { selectionStart, selectionEnd }
  };

  const indexOutOfRange = index < 0 || index > sourceText.length - 1;

  if(indexOutOfRange) {
    return { selectionStart, selectionEnd }
  };

  const char = sourceText[index]
  const isInvalid = !char || char.match(validChars) === null;
  console.log('RECURSING')
  selectionStart = getStartIndex(sourceText, index - 1),
  selectionEnd = getEndIndex(sourceText, index)
  // selectionEnd: index === sourceText.length - 1 ? sourceText.length : getEndIndex(sourceText, index + 1)

  return { selectionStart, selectionEnd }
}
