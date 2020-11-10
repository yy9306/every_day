import countBinarySubstrings from '../../code/string/s2.js'

test('countBinarySubstrings', () => {
  expect(countBinarySubstrings("00110011")).toBe(6)
})

test('countBinarySubstrings', () => {
  expect(countBinarySubstrings("10101")).toBe(4)
})

test('countBinarySubstrings', () => {
  expect(countBinarySubstrings("10101110")).toBe(5)
})