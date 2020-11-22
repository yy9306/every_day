
// 冒泡排序
// export default arr => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[i]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp
//       }
//     }
//   }
// }

// 选择排序
// export default arr => {
//   for (let i = 0, len = arr.length; i < len; i++) {
//     let index = i;
//     for (let j = i + 1; j < len; j++) {
//       if (arr[j] < arr[i]) {
//         index = j
//       }
//     }
//     let temp = arr[i]
//     arr[i] = arr[index]
//     arr[index] = temp;
//   }
//   return arr;
// }

// 按奇偶排序数组 II

// 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。

// 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。

// 你可以返回任何满足上述条件的数组作为答案。

export default arr => {
  let event = 0,
    odd = 1;
  const result = [];  

  for (let i = 0, len = arr.length; i < len; i++) {
    const item = arr[i];
    if (item % 2 === 0) {
      result[event] = item;
      event += 2;
    } else {
      result[odd] = item;
      odd += 2;
    }
  }
  return result;
}
