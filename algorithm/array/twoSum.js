/**
 * @name 两数之和
 * @description
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * @example nums = [2, 7, 11, 15], target = 9 -> [0, 1]
 * @param {number[]} nums
 * @param {number} target
 *
 * 解题思路：
 * 利用map存储每次遍历的数及位置，判断新数与目标值差异值是否存在
 */

const twoSum = (nums, target) => {
  const map = {};
  for (let [i, v] of nums.entries()) {
    const dif = target - v;
    if (map[dif] !== undefined) {
      return [map[dif], i];
    }
    map[v] = i;
  }
}

console.log('nums = [2, 7, 11, 15], target = 9', twoSum([2, 7, 11, 15], 9));