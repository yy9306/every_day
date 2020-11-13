// 卡牌分组

// 给定一副牌，每张牌上都写着一个整数。

// 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

// 每组都有 X 张牌。
// 组内所有的牌上都写着相同的整数。
// 仅当你可选的 X >= 2 时返回 true。

// 示例1：

// 输入：[1,2,3,4,4,3,2,1]
// 输出：true
// 解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]

// 示例 2：

// 输入：[1,1,1,2,2,2,3,3]
// 输出：false
// 解释：没有满足要求的分组。

// 示例 3：

// 输入：[1]
// 输出：false
// 解释：没有满足要求的分组。

// 示例 4：

// 输入：[1,1]
// 输出：true
// 解释：可行的分组是 [1,1]

// 示例 5：

// 输入：[1,1,2,2,2,2]
// 输出：true
// 解释：可行的分组是 [1,1]，[2,2]，[2,2]

export default (deck) => {
  // let group = deck.sort().join('').match(/(\d)\1+|\d/g)
  const group = Object.values(
    deck.reduce((prev, next) => {
      if (!prev[next]) {
        prev[next] = 1;
      } else {
        prev[next]++;
      }
      return prev;
    }, {})
  );

  // 最大公约数
  const maxDivisor = (a, b) => {
    if (b === 0) {
      return a;
    } else {
      return maxDivisor(b, a % b);
    }
  };
  while (group.length > 1) {
    let a = group.shift();
    let b = group.shift();
    const v = maxDivisor(a, b);
    if (v === 1) {
      return false;
    } else {
      group.unshift(v);
    }
  }
  return group.length ? group[0] > 1 : false;
};


// 总结： 

// 1、 解题关键，最大公约数的算法  a = b + c

// 2、对数组的处理，`deck.sort().join('').match(/(\d)\1+|\d/g)` 这个方法有一个问题， 如果数字超过10就会有问题

// 3、 shift、unshift 的使用


