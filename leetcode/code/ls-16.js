// 串联所有单词的子串

// 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

// 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。

// 输入：
//   s = "barfoothefoobarman",
//   words = ["foo","bar"]
// 输出：[0,9]
// 解释：
// 从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
// 输出的顺序不重要, [9,0] 也是有效答案。
// 示例 2：

// 输入：
//   s = "wordgoodgoodgoodbestword",
//   words = ["word","good","best","word"]
// 输出：[]

export default (s, words) => {
  const number = words.length;
  const result = []

  function search(r, res) {

    if (r.length === number) {
      result.push(r)
    } else {
      res.forEach((item, index) => {
        const _temp = [].concat(res);
        _temp.splice(index, 1);
        search(r.concat(item), _temp)
      })
    }
  }
  search([], words);

  return [...new Set(result.map(item => {
    return s.indexOf(item.join(''));
  }).filter(item => item >= 0))];
}