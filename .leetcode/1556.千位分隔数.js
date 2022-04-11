/*
 * @lc app=leetcode.cn id=1556 lang=javascript
 *
 * [1556] 千位分隔数
 *
 * https://leetcode-cn.com/problems/thousand-separator/description/
 *
 * algorithms
 * Easy (57.32%)
 * Likes:    18
 * Dislikes: 0
 * Total Accepted:    12.9K
 * Total Submissions: 22.6K
 * Testcase Example:  '987'
 *
 * 给你一个整数 n，请你每隔三位添加点（即 "." 符号）作为千位分隔符，并将结果以字符串格式返回。
 *
 *
 *
 * 示例 1：
 *
 * 输入：n = 987
 * 输出："987"
 *
 *
 * 示例 2：
 *
 * 输入：n = 1234
 * 输出："1.234"
 *
 *
 * 示例 3：
 *
 * 输入：n = 123456789
 * 输出："123.456.789"
 *
 *
 * 示例 4：
 *
 * 输入：n = 0
 * 输出："0"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= n < 2^31
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  let str = n.toString();
  let time = Math.floor(str.length / 3);
  const res = [];
  while (time >= 0) {
    const temp = str.slice(-3);
    if (temp) {
      res.unshift(temp);
    }

    str = str.slice(0, str.length - 3);
    time--;
  }
  return res.join(".");
};
// @lc code=end
