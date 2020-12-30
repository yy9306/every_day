// 实现一个decodeStr 方法， 输入一个字符串，根据编码输出一个结果， 规定如下：

// - str = '2[a]1[bc]', 返回'aabc'
// - str = '2[e2[d]]', 返回 'eddedd'
// - str = '3[abc]2[cd]ff', 返回 'abcabcabccdcdff'


// 正则匹配，递归实现
// function decodeStr(str) {
//   var reg = /\d+\[[^\[\]]+\]/;
//   while(str.includes('[')) {
//     str = str.replace(reg, word => {
//       var number = word.replace(/[^\d]/g, '');
//       var alphate = word.replace(/[\d+\[\]]/g, '');
//       return alphate.repeat(number);
//     })
//   }
//   return str
// }

// 正则匹配，利用正则组的概念降低空间复杂度， 递归
function decodeStr(str) {
  var reg = /(\d+)\[([^\[\]]+)\]/;
  while(str.includes('[')) {
    str = str.replace(reg, (word, $1, $2) => {
      return $2.repeat($1)
    })
  }
  return str
}

// 用栈数据思想解决这个问题
function decodeStr(str) {
  const stack = [];
  let tempStr = '';
  for(let i = 0, len = str.length; i < len; i++) {
    if (str[i] !== ']') {
      stack.push(str[i]);
    } else {
      let p = stack.pop();
      while(!/\d/g.test(p)) {
        tempStr = p + tempStr;
        p = stack.pop();
        if (/\d/g.test(p)) {
          console.log(typeof p)
          t = stack.length > 0 && stack.pop();
          while(t && /\d/g.test(t)) {
            p = t + p;
            t = stack.length > 0 && stack.pop();
          }
          t && stack.push(t)
        } 
      }
      stack.push(tempStr.slice(1).repeat(p));
      tempStr = '';
    }
  }
  return stack.join('');
}