import getWord from './getWord'

describe('getWord()', () => {
  const result = (start, end) => ({
    selectionStart: start,
    selectionEnd: end
  })

  describe('when there are missing arguments', () => {
    it('should set both indices to 0', () => {
      expect(getWord()).toEqual(result(0, 0))
      expect(getWord('')).toEqual(result(0, 0))
      expect(getWord('a')).toEqual(result(0, 0))
      expect(getWord('a', null)).toEqual(result(0, 0))
    })
  })

  describe('when the index is out of range', () => {
    it('should set both indices to 0', () => {
      expect(getWord('a', -1)).toEqual(result(0, 0))
      expect(getWord('a', 1)).toEqual(result(0, 0))
    })
  })

  describe('when the source text does not contain invalid chars', () => {
    it('should return the full source text', () => {
      expect(getWord('a', 0)).toEqual(result(0, 1))
      expect(getWord('aa', 0)).toEqual(result(0, 2))
      expect(getWord('aa', 1)).toEqual(result(0, 2))
      expect(getWord('abc', 0)).toEqual(result(0, 3))
      expect(getWord('abc', 1)).toEqual(result(0, 3))
      expect(getWord('abc', 2)).toEqual(result(0, 3))
    })
  })

  describe('when the source text contains invalid chars', () => {
    // it('should stop when it encounters a space', () => {
      // expect(getWord(' a', 1)).toEqual(result(1, 2))
      // expect(getWord(' abc', 1)).toEqual(result(1, 4))
      // expect(getWord(' abc', 2)).toEqual(result(1, 4))
      // expect(getWord(' abc ', 1)).toEqual(result(1, 4))
      // expect(getWord('abc def', 0)).toEqual(result(0, 3))
      // expect(getWord('a bc', 2)).toEqual(result(2, 4))
      // expect(getWord('def abc', 6)).toEqual(result(4, 7))
    // })

    describe('when the starting index is an invalid character', () => {
      it('should set both indices to 0', () => {
        expect(getWord(' ', 0)).toEqual(result(0, 0))
        expect(getWord(',', 0)).toEqual(result(0, 0))
        expect(getWord(':', 0)).toEqual(result(0, 0))
        expect(getWord(' a', 0)).toEqual(result(0, 0))
        expect(getWord('a ', 1)).toEqual(result(0, 0))
        // expect(getWord(',a', 0)).toEqual(result(0, 0))
        // expect(getWord('a,', 1)).toEqual(result(0, 0))
      })
    })

    describe('when there are spaces before the start index', () => {
      it('should stop when it encounters a space', () => {
        expect(getWord(' a', 1)).toEqual(result(1, 2))
      })
    })

    describe('when there are spaces after the start index', () => {
      it('should stop when it encounters a space', () => {
        expect(getWord('a ', 0)).toEqual(result(0, 1))
        expect(getWord('abc ', 0)).toEqual(result(0, 3))
      })
    })

    describe('when there are spaces before and after the start index', () => {
      it('should stop when it encounters a space', () => {
        expect(getWord(' a ', 1)).toEqual(result(1, 2))
      })
    })

  })

  describe('when the source text contains non-word characters', () => {
    it('should not return the non-word characters', () => {
      expect(getWord('T,', 0)).toEqual(result(0, 1))
      expect(getWord('T1', 0)).toEqual(result(0, 1))
      expect(getWord('T:', 0)).toEqual(result(0, 1))
    })
  })
})

