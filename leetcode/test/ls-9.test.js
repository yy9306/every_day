import detectCapitalUse from '../code/ls-9.js'

test('detectCapitalUse', () => {
  expect(detectCapitalUse("USA")).toBe(true);

  expect(detectCapitalUse("FlaG")).toBe(false);

  expect(detectCapitalUse("world")).toBe(true);
  
  expect(detectCapitalUse("w")).toBe(true);
})

