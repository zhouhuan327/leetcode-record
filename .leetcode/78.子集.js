/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 *
 * https://leetcode-cn.com/problems/subsets/description/
 *
 * algorithms
 * Medium (80.22%)
 * Likes:    1448
 * Dislikes: 0
 * Total Accepted:    356.8K
 * Total Submissions: 444.5K
 * Testcase Example:  '[1,2,3]'
 *
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 *
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,2,3]
 * 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0]
 * 输出：[[],[0]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * -10
 * nums 中的所有元素 互不相同
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  // 迭代
  // 遍历时把每个元素加入到之前的集合中
  // return nums.reduce(
  //   (acc, cur) => acc.concat(acc.map((preItem) => [...preItem,cur])),
  //   [[]]
  // );
  const res = [[]];
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    // 把当前值加入之前的所有子集中,生成新的子集
    const newSubset = res.map(item => [...item,cur])
    res.push(...newSubset);
  }
  return res;
};

// @lc code=end
