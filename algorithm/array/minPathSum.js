/** 
 * @name 最小路径和
 * @description 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。每次只能向下或者向右移动一步。
 * @example [[1,3,1], [1,5,1], [4,2,1]] -> 7
 * @param {number[][]} grid
 * @return {number}
 * 
 * 
 * 解题思路：
 * 采用动态规划，不断记录最小值相加
 * 路径方式只能向下或向右走，意味着当前格子只能由上边或者左边走过来
 * 另外处理格子的边界问题
 */

const minPathSum = (grid) => {
  var dp = new Array(grid.length);
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[0].length; j++) {
      if (i != 0 && j != 0) {
        dp[j] = Math.min(dp[j - 1], dp[j]) + grid[i][j];
      } else if (i == 0 && j != 0) {
        dp[j] = dp[j - 1] + grid[i][j];
      } else if (i != 0 && j == 0) {
        dp[j] = dp[j] + grid[i][j];
      } else if (i == 0 && j == 0) {
        dp[j] = grid[i][j];
      }
    }
  }
  return dp[grid[0].length - 1];
}

console.log('[[1,3,1], [1,5,1], [4,2,1]] -> ', minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));