/** 
 * @name 三数之和
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 * @example nums = [-1, 0, 1, 2, -1, -4] -> [[-1, 0, 1], [-1, -1, 2]]
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * 解题思路：
 * 1. 首先对数组进行排序，题目要求不重复，我们以每个数为基点遍历后面进行相加
 * 2. 对于当前遍历值大于目标值，那么则无结果可搜，因为只会越加越大
 * 3. 对于基数右边的数采用双指针形式，判断重复项进行跳过
 * 4. 相加结果符合则加进数组，并更新双指针位置
 * 5. 相加大或小于目标，则更新对应指针即可
 */

const threeSum = (nums) => {
  const res = [];
  const len = nums.length;
  if (len < 3) return res;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    const cur = nums[i];
    if (cur > 0) return res;
    if (i > 0 && cur === nums[i - 1]) continue;
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      const leftNum = nums[left];
      const rightNum = nums[right];
      const sum = cur + leftNum + rightNum;
      if (sum === 0) {
        res.push([cur, leftNum, rightNum]);
        while (left < right && leftNum === nums[left + 1]) left++;
        while (right > left && rightNum === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
}

console.log('[-1,0,1,2,-1,-4] -> ', threeSum([-1, 0, 1, 2, -1, -4])); 