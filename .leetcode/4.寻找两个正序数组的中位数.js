/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 *
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (38.42%)
 * Likes:    2948
 * Dislikes: 0
 * Total Accepted:    228.2K
 * Total Submissions: 594.2K
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
 * 
 * 请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 
 * 你可以假设 nums1 和 nums2 不会同时为空。
 * 
 * 
 * 
 * 示例 1:
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * 则中位数是 2.0
 * 
 * 
 * 示例 2:
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * 则中位数是 (2 + 3)/2 = 2.5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const middle = parseInt((nums1.length + nums2.length) / 2)
    let p1 = 0,p2 = 0;
    const arr = [];
    while(p1< nums1.length  || p2 < nums2.length ) {
        if(nums1[p1] < nums2[p2]) {
            if(p1 < nums1.length ) {
                arr.push(nums1[p1])
            }
            p1++
            
        } else {
            if(p2 < nums2.length ) {
                arr.push(nums2[p2])  
            }
            p2++
            
        }
    }
    console.log(middle,arr)
    if(middle % 2 === 0 ) {
        return (arr[middle] + arr[middle - 1])/2
    }
    return arr[middle]

};
console.log(findMedianSortedArrays([0,0],[0,0]))
// @lc code=end

