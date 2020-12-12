import convert from '../code/ls-18.js'

test('convert', () => {
  expect(convert("LEETCODEISHIRING", 3)).toEqual("LCIRETOESIIGEDHN");
  expect(convert("LEETCODEISHIRING", 4)).toEqual("LDREOEIIECIHNTSG");
  expect(convert("LEETC", 1)).toEqual("LEETC");
})
