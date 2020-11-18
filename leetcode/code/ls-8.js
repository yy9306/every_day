// 重复的子字符串

// 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。

// 示例 1:

// 输入: "abab"

// 输出: True

// 解释: 可由子字符串 "ab" 重复两次构成。
// 示例 2:

// 输入: "aba"

// 输出: False
// 示例 3:

// 输入: "abcabcabcabc"

// 输出: True


// export default str => {
//   for (let i = 0, len = Math.floot(str.length / 2); i < len; i++) {
//     const subStr = str.substring(0, i + 1);
//     if (new RegExp(`^(${subStr})+$`, 'g')) {
//       return true;
//     }
//   }
//   return false;
// }


export default str => {
  const reg = /^(\w+)\1+$/;

  return reg.test(str)
}