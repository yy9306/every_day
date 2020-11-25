// 给你一个未排序的整数数组，请你找出其中没有出现的最小的正整数。

// 示例 1:

// 输入: [1,2,0]
// 输出: 3
// 示例 2:

// 输入: [3,4,-1,1]
// 输出: 2
// 示例 3:

// 输入: [7,8,9,11,12]
// 输出: 1

// 排序后查找
// export default arr => {
//   arr = arr.filter(item => item > 0);
//   const len = arr.length;
//   for (let i = 0, temp; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (arr[i] > arr[j]) {
//         temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//     if (i === 0 && arr[i] > 1) {
//       return 1
//     } else if (i > 0 && (arr[i] - arr[i - 1] > 1)) {
//       return arr[i - 1] + 1
//     }
//   }
//   return len ? arr[len - 1] + 1 : 1;
// }

// 初始值 i= 1， 累加判断
export default arr => {
  const set = new Set(arr);
  const len = set.size + 1;
  for (let i = 1; i <= len; i++) {
    if (!set.has(i)) {
      return i
    }
  }
  return set.size + 1
}