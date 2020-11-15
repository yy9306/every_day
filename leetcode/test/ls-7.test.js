import grayCode from '../code/ls-7.js'

test('grayCode', () => {
  expect(grayCode(2)).toEqual([0,1,3,2]);
  expect(grayCode(1)).toEqual([0, 1]);
  expect(grayCode(0)).toEqual([0]);
  expect(grayCode(3)).toEqual([0, 1, 3, 2, 6, 7, 5, 4]);

})



