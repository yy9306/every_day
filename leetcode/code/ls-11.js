
// 冒泡排序

export default arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp
      }
    }
  }
}