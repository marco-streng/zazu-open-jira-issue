const zazu = require('../zazu.json')

describe('zazu.json', () => {
  test('is valid', () => {
    expect(zazu).toBeInstanceOf(Object)
  })
})
