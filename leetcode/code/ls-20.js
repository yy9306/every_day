// 如何去除有序数组的重复元素

function removeDuplicates(arr) {
  const len = arr.length;
  if(!len) return;
  let slow = 0, fast = 1;
  while(fast < len) {
    if (arr[slow] !== arr[fast]) {
      slow++;
      slow !== fast && (arr[slow] = arr[fast]);
    }
    fast++
  }
  return slow+1
}
