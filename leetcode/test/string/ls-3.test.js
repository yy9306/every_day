import getMaxLength from '../../code/string/ls-3.js'

test('getMaxLength', () => {
  expect(getMaxLength("abcabcbb")).toBe(3);
  // expect(getMaxLength("bbbbb")).toBe(1);
  expect(getMaxLength("pwwkew")).toBe(3);
  expect(getMaxLength(" ")).toBe(1);
})
