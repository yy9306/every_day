// 48、给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例1：

// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3

// 示例2：

// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

// 示例3：

// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。


// 递归解法
// export default (strs = '') => {
  
//   if (!strs.length) return 0;
//   let maxLength = 0;
//   let currentStr = ''; // 缓存当前匹配的字符串

//   function calculateLength() {
//     for (let i = 0, len = strs.length; i < len; i++) {
//       const str = strs[i];
//       const index = currentStr.indexOf(str); 
//       if (index < 0) {
//         currentStr = `${currentStr}${str}`
//         maxLength = Math.max(maxLength, currentStr.length);
//       } else {
//         strs = strs.substring(index + 1);
//         currentStr = '';
//         (maxLength < strs.length) && calculateLength();
//         return;
//       }
//     }
//   }

//   if (maxLength < strs.length) {
//     calculateLength();
//   }
//   return maxLength;
// }

// 双指针解法
export default (str = '') => {
  if (!str.length) return 0;
  let i = 0,
      j = 0,
      maxLength = 0;   // 保存长度
  const set = new Set();

  for (i; i < str.length; i++) {
      if (!set.has(str[i])) {
          set.add(str[i]);
          maxLength = Math.max(set.size, maxLength);
      } else {
          while (set.has(str[i])) {
            debugger;
              set.delete(str[j]);
              j++
          }
          set.add(str[i]);
      }
  }

  return maxLength;
}


// 总结：

// 1、 上面两种方法思想一样，遇到重复字符， 下次寻找的时候（第一种是index + 1的思路， 第二种是清除set内的数据）；

// 2、 好的数据结构将解题思路变得更加简单， 遇到重复的概念， 首先应该想到set这种数据结构

// 3、set 无序的， 不重复