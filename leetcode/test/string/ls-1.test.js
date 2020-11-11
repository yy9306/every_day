import letterCombinations from '../../code/array/ls-1.js'

test(`letterCombinations`, () => {
  expect(letterCombinations('23')).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
})
