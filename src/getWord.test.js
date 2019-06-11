import getWord from './getWord'

describe('getWord()', () => {
  describe('when there are missing arguments', () => {
    it('should return an empty string', () => {
      expect(getWord()).toBe('')
      expect(getWord('')).toBe('')
    })
  })
})

