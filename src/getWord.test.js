import getWord from './getWord'

describe('getWord()', () => {
  describe('when there are missing arguments', () => {
    it('should return an empty string', () => {
      expect(getWord()).toBe('')
      expect(getWord('')).toBe('')
      expect(getWord('a')).toBe('')
      expect(getWord('a', null)).toBe('')
    })
  })

  describe('when the source text is only one character long', () => {
    it('should return that character', () => {
      expect(getWord('a', 0)).toBe('a')
    })
  })
})

