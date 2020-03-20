/**
 * @name 删除排序数组中的重复项
 * @description
 * 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 * @example nums = [1,1,2] -> 2
 * @example nums = [0,0,1,1,1,2,2,3,3,4] -> 5
 * @param {number[]} nums
 * @return {number}
 * 
 * 解题思路：
 * 因为是个排序数组，直接向下对比，不同则加计数器，并且因为引用传递，直接修改对应计数器部分，而不需要关心超过计数器的
 */

const removeDuplicates = (nums) => {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (val !== nums[i + 1]) {
      nums[index] = val;
      index++;
    }
  }
  return index;
}

const num1 = [1, 1, 2];
const num2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log('nums = [1,1,2]', num1.splice(0, removeDuplicates(num1)));
console.log('nums = [0,0,1,1,1,2,2,3,3,4]', num2.splice(0, removeDuplicates(num2)));