/** 
 * @name 字符串压缩
 * @description 
 * 字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。
 * 若压缩后相比原字符串没有变短，则返回原字符串
 * @example aabcccccaaa -> a2b1c5a3
 * @example abbccd -> abbccd
 * @param {string} S
 * @return {string}
 * 
 * 解题思路:
 * 采用指针记录每个计数字母的起点，判断新字母时重置
 */

const compressString = (S) => {
  const len = S.length;
  if (len < 3) return S;
  let t = 0;
  const res = [].reduce.call(S, (r, v, i) => {
    if (i === 0) return v;
    if (v !== S[i - 1]) {
      r += i - t;
      t = i;
      r += v;
    }
    if (i === len - 1) r += (i - t + 1);
    return r;
  }, '');
  return res.length < len ? res : S;
}

console.log('aabcccccaaa -> ', compressString('aabcccccaaa'));
console.log('abbccd -> ', compressString('abbccd'));