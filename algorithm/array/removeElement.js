/**
 * @name 移除元素
 * @description
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
 * @example nums = [3,2,2,3], val = 3 -> 2
 * @example nums = [0,1,2,2,3,0,4,2], val = 2  -> 5
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 *
 * 解题思路：
 * 利用计数器，当匹配不相同的时候重置对应位置即可
 */

const removeElement = (nums, val) => {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    const v = nums[i];
    if (v !== val) {
      nums[index] = v;
      index++;
    }
  }
  return index;
}

const num1 = [3, 2, 2, 3];
const num2 = [0, 1, 2, 2, 3, 0, 4, 2];
console.log('nums = [1,1,2]', num1.splice(0, removeElement(num1, 3)));
console.log('nums = [0,0,1,1,1,2,2,3,3,4]', num2.splice(0, removeElement(num2, 2)));