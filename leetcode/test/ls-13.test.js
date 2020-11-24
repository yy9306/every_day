import maximumGap from '../code/ls-13.js'


test('maximumGap', () => {
  expect(maximumGap([3,6,9,1])).toBe(3);

  expect(maximumGap([10])).toBe(0);

  expect(maximumGap([1, 9, 12, 15])).toBe(8);

})