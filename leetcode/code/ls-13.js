// 最大间距

// 给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。

// 如果数组元素个数小于 2，则返回 0。

// 示例 1:

// 输入: [3,6,9,1]
// 输出: 3
// 解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。
// 示例 2:

// 输入: [10]
// 输出: 0
// 解释: 数组元素个数小于 2，因此返回 0。


export default arr => {
  if (arr.length < 2) return 0;
  let max = 0;
  const len = arr.length - 1;
  for (let i = len, temp; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j + 1] < arr[j]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (i < len) {
      max = Math.max(max, arr[i + 1] - arr[i]);
    }
  }

  return Math.max(max, arr[1] - arr[0]);
}