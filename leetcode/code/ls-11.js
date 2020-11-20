
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
export default arr => {
  for (let i = 0, len = arr.length; i < len; i++) {
    let index = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[i]) {
        index = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[index]
    arr[index] = temp;
  }
  return arr;
}