/*
 * @lc app=leetcode.cn id=1414 lang=javascript
 *
 * [1414] 和为 K 的最少斐波那契数字数目
 *
 * https://leetcode-cn.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/description/
 *
 * algorithms
 * Medium (60.74%)
 * Likes:    113
 * Dislikes: 0
 * Total Accepted:    20.1K
 * Total Submissions: 29.3K
 * Testcase Example:  '7'
 *
 * 给你数字 k ，请你返回和为 k 的斐波那契数字的最少数目，其中，每个斐波那契数字都可以被使用多次。
 *
 * 斐波那契数字定义为：
 *
 *
 * F1 = 1
 * F2 = 1
 * Fn = Fn-1 + Fn-2 ， 其中 n > 2 。
 *
 *
 * 数据保证对于给定的 k ，一定能找到可行解。
 *
 *
 *
 * 示例 1：
 *
 * 输入：k = 7
 * 输出：2
 * 解释：斐波那契数字为：1，1，2，3，5，8，13，……
 * 对于 k = 7 ，我们可以得到 2 + 5 = 7 。
 *
 * 示例 2：
 *
 * 输入：k = 10
 * 输出：2
 * 解释：对于 k = 10 ，我们可以得到 2 + 8 = 10 。
 *
 *
 * 示例 3：
 *
 * 输入：k = 19
 * 输出：3
 * 解释：对于 k = 19 ，我们可以得到 1 + 5 + 13 = 19 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= k <= 10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function (k) {
  const list = [1];
  let a = 0;
  let b = 1;
  let c;
  while (b < 1e9) {
    c = a + b;
    a = b;
    b = c;
    list.push(c);
  }
  let ans = 0;
  while (k != 0) {
    let l = 0;
    let r = list.length - 1;
    while (l < r) {
      let mid = (l + r + 1) >> 1;
      if (list[mid] <= k) l = mid;
      else r = mid - 1;
    }
    k -= list[r];
    ans++;
  }
  return ans;
};

// @lc code=end
