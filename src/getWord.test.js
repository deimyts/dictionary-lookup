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

  describe('when the index is out of range', () => {
    it('should return an empty object', () => {
      expect(getWord('a', -1)).toEqual({})
      expect(getWord('a', 1)).toEqual({})
    })
  })

  describe('when the source text does not contain spaces', () => {
    it('should return the full source text', () => {
      expect(getWord('a', 0)).toEqual(result(0, 1))
      expect(getWord('aa', 0)).toEqual(result(0, 2))
      expect(getWord('abc', 2)).toEqual(result(0, 3))
    })
  })

  describe('when the source text contains spaces', () => {
    it('should not stop when it encounters a space', () => {
      expect(getWord('abc ', 0)).toEqual(result(0, 3))
      expect(getWord(' abc', 0)).toEqual(result(1, 4))
      expect(getWord(' abc ', 0)).toEqual(result(1, 4))
      expect(getWord('abc def', 0)).toEqual(result(0, 3))
      expect(getWord('a bc', 2)).toEqual(result(2, 4))
      expect(getWord('def abc', 6)).toEqual(result(4, 7))
    })
  })

  describe('when the source text contains non-word characters', () => {
    it('should not return the non-word characters', () => {
      // expect(getWord('a ', 0)).toBe(result(0, 1))
      // expect(getWord('a1', 0)).toBe(result(0, 1))
      // expect(getWord('a:', 0)).toBe(result(0, 1))
    })
  })
})

