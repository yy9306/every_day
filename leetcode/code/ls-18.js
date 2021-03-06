// Z 字形变换

// 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：

// L   C   I   R
// E T O E S I I G
// E   D   H   N
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

// 示例 1:

// 输入: s = "LEETCODEISHIRING", numRows = 3
// 输出: "LCIRETOESIIGEDHN"
// 示例 2:

// 输入: s = "LEETCODEISHIRING", numRows = 4
// 输出: "LDREOEIIECIHNTSG"
// 解释:

// L     D     R
// E   O E   I I
// E C   I H   N
// T     S     G

// export default (s, numRows) => {
//   if (numRows === 1) return s;
//     var result = [];
//     var number = numRows - 1;
  
//     for (let i = 0, len = s.length; i < len; i++) {
//       var remainder = i % number;
//       var item = s[i];
//       if ((Math.floor(i / number)) % 2 === 0) {
//         i <= number ? result[remainder] = [item] : result[remainder].push(item);
//       } else {
//         i <= number ? result[number - remainder] = [item] : result[number - remainder].push(item)
//       }
//     }
  
//     return result.reduce((prev, next) => prev + next.join(''), '');
//   };

  // 优化， 将二维数组改成一维数组
  // export default (s, numRows) => {

  //   if (numRows === 1) return s;
  //   var result = [];
  //   var number = numRows - 1;
  
  //   for (let i = 0, len = s.length; i < len; i++) {
  //     var remainder = i % number;
  //     var item = s[i];
  //     if ((Math.floor(i / number)) % 2 === 0) {
  //       i <= number ? result[remainder] = item : result[remainder] = result[remainder] + item;
  //     } else {
  //       i <= number ? result[number - remainder] = item : result[number - remainder] = result[number - remainder] + item
  //     }
  //   }
  
  //   return result.join('')
  // };


  // 继续优化， 根据flag去判断数组添加的方向
  export default (s, numRows) => {
    if (numRows === 1) return s;
    var result = new Array(numRows).fill('');

    let flag = 1;
    let count = 0;
    for (let i = 0, len = s.length; i < len; i++) {
      result[count] += s[i];
      count += flag

      if (count === 0) {
        flag = 1;
      }

      if (count === numRows - 1) {
        flag = -1
      }
    }

    return result.join('')
  }