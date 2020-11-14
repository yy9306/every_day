import canPlaceFlowers from '../../code/ls-6.js'


test('canPlaceFlowers', () => {
  expect(canPlaceFlowers([1,0,0,0,1], 1)).toBe(true);
  expect(canPlaceFlowers([1,0,0,0,1], 2)).toBe(false);
  expect(canPlaceFlowers([0], 1)).toBe(true);
  expect(canPlaceFlowers([0, 0, 0], 2)).toBe(true);
});
