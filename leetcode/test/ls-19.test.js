import isValid from '../code/ls-19.js'

test('isValid', () => {
  expect(isValid("()")).toBe(true);
  expect(isValid("()[]{}")).toBe(true);
  expect(isValid("(]")).toBe(false);
  expect(isValid("([)]")).toBe(false);
  expect(isValid("{[]}")).toBe(true);
  expect(isValid(")[")).toBe(false);
})
