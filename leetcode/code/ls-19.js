// 有效的括号

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 示例 1:

// 输入: "()"
// 输出: true
// 示例 2:

// 输入: "()[]{}"
// 输出: true
// 示例 3:

// 输入: "(]"
// 输出: false
// 示例 4:

// 输入: "([)]"
// 输出: false
// 示例 5:

// 输入: "{[]}"
// 输出: true

// 利用栈的思路解决
export default s => {
  if (!s) return false
    var tempArray = [];
    for (let i = 0, len = s.length; i < len; i++) {
      if (!tempArray.length) {
        tempArray.push(s[i]);
      } else {
        let last = tempArray.pop();
        if (!((last === '(' && s[i] === ')') || (last === '{' && s[i] === '}') || (last === '[' && s[i] === ']'))) {
          tempArray.push(last, s[i]); 
        }
      }
    }
    return !tempArray.length;
};