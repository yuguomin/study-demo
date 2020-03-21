/** 
 * @name 最大子序和
 * @description 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * @example [-2,1,-3,4,-1,2,1,-5,4] -> 6
 * @param {number[]} nums
 * @return {number}
 * 
 * 解题思路：
 * 最大子序列实际上就是相加最大的值，我们以0为界限，当遇到相加为负值，则重置初始位置，然后将每次结果和最大结果值对比
 */

const maxSubArray = (nums) => {
  const len = nums.length;
  let sum = nums[0];
  let max = sum;
  for (let i = 1; i < len; i++) {
    const val = nums[i];
    sum = sum < 0 ? val : sum + val;
    max = Math.max(max, sum);
  }
  return max;
}

console.log('[-2,1,-3,4,-1,2,1,-5,4] -> ', maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));