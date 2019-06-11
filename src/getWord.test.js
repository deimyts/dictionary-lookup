import getWord from './getWord'

describe('getWord()', () => {
  const result = (start, end) => ({
    selectionStart: start,
    selectionEnd: end
  })

  describe('when there are missing arguments', () => {
    it('should return an empty object', () => {
      expect(getWord()).toEqual({})
      expect(getWord('')).toEqual({})
      expect(getWord('a')).toEqual({})
      expect(getWord('a', null)).toEqual({})
    })
  })

  describe('when the source text does not contain spaces', () => {
    it('should return the full source text', () => {
      expect(getWord('a', 0)).toEqual(result(0, 1))
      expect(getWord('aa', 0)).toEqual(result(0, 2))
    })
  })

  describe('when the index is out of range', () => {
    it('should return an empty object', () => {
      expect(getWord('a', 1)).toEqual({})
      expect(getWord('a', -1)).toEqual({})
    })
  })

  describe('getting the word based on index', () => {
    // expect(getWord('ab', 0)).toEqual(result(0, 2))
    // expect(getWord('abc', 0)).toEqual(result(0, 3))
      expect(getWord('abc ', 0)).toEqual(result(0, 3))
      expect(getWord(' abc ', 0)).toEqual(result(1, 4))
    // expect('abc '.substring(0, 3)).toBe('abc')
      expect(getWord('abc def', 0)).toEqual(result(0, 3))
    // expect('abc def'.substring(0, 3)).toBe('abc ')
      expect(getWord('ab', 1)).toEqual(result(0, 2))
      expect(getWord('abc', 2)).toEqual(result(0, 3))
    // expect(getWord('def abc', 6)).toEqual(result(4, 6))
      expect(getWord('a', 0)).toEqual(result(0, 1))
  })

  describe.skip('when the source text contains spaces', () => {
    it('should not include the spaces', () => {
      expect(getWord('a ', 0)).toBe('a')
      expect(getWord(' a', 0)).toBe('a')
      expect(getWord(' a ', 0)).toBe('a')
      expect(getWord('a b', 0)).toBe('a')
    })
  })

  describe('when the source text contains non-word characters', () => {
    it('should return the full source text', () => {
      // expect(getWord('a,', 0)).toBe('a')
      // expect(getWord('a1', 0)).toBe('a')
      // expect(getWord('a:', 0)).toBe('a')
    })
  })
})

