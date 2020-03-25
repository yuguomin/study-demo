/** 
 * @name 最接近的三数之和
 * @description 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 * @example nums = [-1, 2, 1, -4], target = 1 => 2
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * 解题思路：
 * 1. 首先求和思路和三数求和的双指针套路一样
 * 2. 然后用求和与结果对于目标值进行绝对值计算看谁更贴近
 * 3. 优化点不再是重复项跳过，而是当基数大于0并且大于目标时，那么和后续值相加必然只会更大，直接返回结果
 * 4. 优化点二是对于基数右边的值，如果左边值大于目标值并且当前值大于0，那么也只会越加越大，跳过该基数
 */

const threeSumClosest = (nums, target) => {
  const len = nums.length;
  nums.sort((a, b) => a - b);
  let res = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < len; i++) {
    const cur = nums[i];
    if (cur > 0 && cur > target) return res;
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      const leftNum = nums[left];
      const rightNum = nums[right];
      const sum = cur + leftNum + rightNum;
      if (cur > 0 && leftNum > target) break;
      if (Math.abs(target - sum) < Math.abs(target - res)) res = sum;
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return res;
      }
    }
  }
  return res;
}

console.log('nums = [-1，2，1，-4], target = 1 => ', threeSumClosest([-1, 2, 1, -4], 1));
console.log('nums = [-1，2，1，-4], target = 1 => ', threeSumClosest([6,-18,-20,-7,-15,9,18,10,1,-20,-17,-19,-3,-5,-19,10,6,-11,1,-17,-15,6,17,-18,-3,16,19,-20,-3,-17,-15,-3,12,1,-9,4,1,12,-2,14,4,-4,19,-20,6,0,-19,18,14,1,-15,-5,14,12,-4,0,-10,6,6,-6,20,-8,-6,5,0,3,10,7,-2,17,20,12,19,-13,-1,10,-1,14,0,7,-3,10,14,14,11,0,-4,-15,-8,3,2,-5,9,10,16,-4,-3,-9,-8,-14,10,6,2,-12,-7,-16,-6,10],
  -52));
console.log('nums = [-1，2，1，-4], target = 1 => ', threeSumClosest([1,1,1,0]
  , 100));