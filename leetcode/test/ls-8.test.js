import repeatedSubstringPattern from '../code/ls-8.js'

test('repeatedSubstringPattern', () => {
  expect(repeatedSubstringPattern("a")).toBe(false);
  expect(repeatedSubstringPattern("abab")).toBe(true);
  expect(repeatedSubstringPattern("aba")).toBe(false);
  expect(repeatedSubstringPattern("abcabcabcabc")).toBe(true);
})

