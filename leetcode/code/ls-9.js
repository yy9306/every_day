// 检测大写字母（No.520）

// 给定一个单词，你需要判断单词的大写使用是否正确。
// 我们定义，在以下情况时，单词的大写用法是正确的：
// 1、全部字母都是大写，比如"USA"。
// 2、单词中所有字母都不是大写，比如"leetcode"。
// 3、如果单词不只含有一个字母，只有首字母大写， 比如 "Google"。
// 否则，我们定义这个单词没有正确使用大写字母。

// 示例：
// 输入: "USA"
// 输出: True

// 输入: "FlaG"
// 输出: False

export default word => {
  let lowerCaseWord = word.toLocaleLowerCase();
  let upperCase = word.toLocaleUpperCase();

  if (lowerCaseWord === word) {
    return true
  } else if (upperCase === word) {
    return true
  } else {
    return lowerCaseWord.slice(1) === word.slice(1)
  }
}

// export default word => {
//   const reg = /^([A-Z]+|[a-z]+|[A-Z][a-z]+)$/;
//   return reg.test(word);
// }


//总结：
// 1、正则解答代码量少很多，执行效率略差