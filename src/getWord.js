const validChars = /[a-zA-Z]/g
const isSpace = (char) => !validChars.test(char);

const getStartIndex = (sourceText, index) => {
  if(index < 0) return 0;
  const char = sourceText[index]
  // console.log('CHAR: ', char, isSpace(char))
  if(isSpace(char)) return index + 1;
  else return getStartIndex(sourceText, index - 1);
}

const getEndIndex = (sourceText, index) => {
  const char = sourceText[index]
  // console.log('CHAR: ', `"${char}"`, 'INDEX: ', index, 'INVALID?: ', isSpace(char))
  // if(index > sourceText.length) return sourceText.length;
  // if(index === sourceText.length) return 'baz';
  if(index > sourceText.length) return sourceText.length;
  else if(index === sourceText.length - 1) {
    // if(!isSpace(char)) return 'foobar'
    if(isSpace(char)) return index
    return `blah: ${sourceText.length - 1}`
    // console.log('BAR')
    return sourceText.length - 1
  }
  else if(isSpace(char)) return index
  else return getEndIndex(sourceText, index + 1);
}


export default function getWord(sourceText, index) {
  console.log('SOURCE: ', `"${sourceText}"`)
  const invalidArgs = !sourceText || typeof index !== 'number';
  if(invalidArgs) return {};
  const indexOutOfRange = index < 0 || index >= sourceText.length;

  const char = sourceText[index];
  if(!char) {
    return {
      selectionStart: 0,
      selectionEnd: 'foo'
    }
  }

  console.log('1')
  if(indexOutOfRange) {
    return {
      selectionStart: 0,
      selectionEnd: 'bar'
    }
  }
  console.log('2')
  const isInvalid = isSpace(char);
  console.log(`"${char}" IS INVALID?: `, `"${isInvalid}"`)
  if(isInvalid) {
    console.log('IT WAS')
    return {
      selectionStart: 0,
      selectionEnd: 'baz'
    }
  }
  console.log('3')
  if(validChars.test(sourceText)) return {
    selectionStart: 0,
    selectionEnd: 'qux'
  }

  console.log('RECURSING')
  return {
    selectionStart: getStartIndex(sourceText, index - 1),
    selectionEnd: getEndIndex(sourceText, index)
    // selectionEnd: index === sourceText.length - 1 ? sourceText.length : getEndIndex(sourceText, index + 1)
  }
}
