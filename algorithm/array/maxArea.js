/** 
 * @name 盛最多水的容器
 * @description
 * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * @example [1,8,6,2,5,4,8,3,7] -> 49
 * @param {number[]} height
 * @return {number}
 * 
 * 解题思路：
 * 1. 利用双指针，判断两边围栏谁更低，计算距离从而得出水量。
 * 2. 优化措施，每一次围栏距离减少，高度如果不能增加，那么就没有计算的必要
 */

const maxArea = (height) => {
  let i = 0;
  let j = height.length - 1;
  let res = 0;
  let lastHeight = 0;
  while (i < j) {
    const l = height[i];
    const r = height[j];
    if (l < r) {
      if (l > lastHeight) {
        res = Math.max(res, (j - i) * l);
        lastHeight = l;
      }
      i++;
    } else {
      if (r > lastHeight) {
        res = Math.max(res, (j - i) * r);
        lastHeight = r;
      }
      j--;
    }
  }
  return res;
}

console.log('[1, 8, 6, 2, 5, 4, 8, 3, 7] -> ', maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));