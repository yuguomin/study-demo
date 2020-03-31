/**
 * @name 多数元素
 * @description 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * @example [3,2,3] -> 3
 * @example [2,2,1,1,1,2,2] -> 2
 * @param {number[]} nums
 * @return {number}
 * 
 * 解题思路：
 * 采用投票算法，通过不断消除不同元素直到没有不同元素，剩下的元素就是我们要找的元素。
 */

const majorityElement = (nums) => {
  let count = 1;
  let majority = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      majority = nums[i];
    }
    if (nums[i] === majority) {
      count++;
    } else {
      count--;
    }
  }
  return majority;
}


console.log('[3,2,3] -> ', majorityElement([3, 2, 3]));
console.log('[2,2,1,1,1,2,2] -> ', majorityElement([2, 2, 1, 1, 1, 2, 2]));
