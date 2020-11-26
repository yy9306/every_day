// 17. 电话号码的字母组合

// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
// ['', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'] 1 - 9 对应的字母

// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]


// 2 3
export default digits => {
  const digitsArray = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  let resultArray = [];
  for (let i = 0, len = digits.length; i < len; i++) {
    const digitItem = digitsArray[Number(digits[i])];
    resultArray.length === 0 ? (resultArray = digitItem.split('')) : 
    (resultArray = calculate(resultArray, digitItem));
  }
  
  return resultArray;
}
function calculate(resultArr, digitStr) {
  const resultArray = [];
  for (let i = 0, len = resultArr.length; i < len; i++) {
    for (let j = 0, len = digitStr.length; j < len; j++) {
      resultArray.push(`${resultArr[i]}${digitStr[j]}`)
    }
  }
  return resultArray;
}


// 分治思想解答 => 拆分、组合

// function digits(str) {
//   const digitsArray = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
//   if (!str) return;
//   if (str.length < 2) {
//     return digitsArray[Number(str)].split('');
//   }
//   let middle = Math.floor(str.length / 2);
//   let left = str.slice(0, middle);
//   let right = str.slice(middle);

//   return compose(digits(left), digits(right))
// }

// function compose(left, right) {
//   const result = [];
//   for (let i = 0, len = left.length; i < len; i++) {
//     for (let j = 0; j < right.length; j++) {
//       result.push(`${left[i]}${right[j]}`)
//     }
//   }
//   return result;
// }


