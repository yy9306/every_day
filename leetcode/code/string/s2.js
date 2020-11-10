// 696. 计数二进制子串

// 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。

// 重复出现的子串要计算它们出现的次数。

// 示例 1 :

// 输入: "00110011"
// 输出: 6
// 解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。

// 请注意，一些重复出现的子串要计算它们出现的次数。

// 另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。

export default (str) => {
  const tempArray = str.match(/0+|1+/g);
  const resultArray = [];
  for (let i = 0, len = tempArray.length - 1; i < len; i++) {
    const current = tempArray[i];
    const next = tempArray[i+1];
    for (let j = 0; j < Math.min(current.length, next.length); j++) {
      const joinStr = current[i] === '0' ? joinStrFn('0', '1', j + 1) : joinStrFn('1', '0', j + 1);
      resultArray.push(joinStr);
    }
  }
  return resultArray.length;
}

function joinStrFn(str1, str2, len) {
  return str1.repeat(len) + str2.repeat(len);
}


// 总结：

// 1、 正则的使用 => match(/0+|1+/g);
// 2、 去最小值 =>Math.min();
// 3、 数组的方法