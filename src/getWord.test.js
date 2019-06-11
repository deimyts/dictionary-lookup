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

  describe('when the source text does not contain spaces', () => {
    it('should return the full source text', () => {
      expect(getWord('a', 0)).toBe('a')
      expect(getWord('aa', 0)).toBe('aa')
    })
  })

  describe('when the index is out of range', () => {
    it('should return an empty string', () => {
      expect(getWord('a', 1)).toBe('')
    })
  })

  describe('getting the word based on index', () => {
      expect(getWord('ab', 0)).toBe('ab')
      expect(getWord('a', 0)).toBe('a')
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

