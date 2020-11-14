// 种花问题

// 假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

// 给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花），和一个数 n 。能否在不打破种植规则的情况下种入 n 朵花？能则返回True，不能则返回False。


// 示例1：

// 输入: flowerbed = [1,0,0,0,1], n = 1
// 输出: True

// 示例 2:

// 输入: flowerbed = [1,0,0,0,1], n = 2
// 输出: False

export default (flowerbed, n) => {
  const tempFlower = flowerbed.join('').match(/0+|1+/g);
  let number = 0;

  if (tempFlower.length === 1 && tempFlower[0].includes('0')) {
    return Math.floor((tempFlower[0].length + 1) / 2) >= n
  }

  for (let i = 0; i < tempFlower.length; i++) {
    const flower = tempFlower[i];
    const len = flower.length;

    if (flower.includes(0)) {
      if ((i === 0 | i === tempFlower.length - 1) && len >= 2) {
        number += Math.floor(len / 2);
      } else if (len >= 3) {
        number += Math.floor((len - 1) / 2);
      }
    }
  }

  return number >= n;
}


// function fn(flowerbed, n) {
//   let max = 0;
//   flowerbed.push(0);
//   for (let i = 0, len = flowerbed.length - 1; i < len; i++) {
//     if (flowerbed[i] === 0) {
//       if (i === 0 && flowerbed[1] === 0) {
//         max++
//         i++
//       } else if(flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
//         max++
//         i++
//       }
//     }
//   }

//   return max >= n
// }
