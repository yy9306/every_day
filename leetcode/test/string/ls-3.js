import getMaxLength from '../../code/string/ls-3.js'

test('getMaxLength', () => {
  expect(getMaxLength("abcabcbb")).toBe(3)
})

test('getMaxLength', () => {
  expect(getMaxLength("bbbbb")).toBe(1)
})

test('getMaxLength', () => {
  expect(getMaxLength("pwwkew")).toBe(3)
})

test('getMaxLength', () => {
  expect(getMaxLength(" ")).toBe(1)
})
