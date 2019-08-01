/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // const isNegative = x < 0;
  // x = Math.abs(x);
  // let result = 0;
  // while (x) {
  //   const digit = x % 10;
  //   x = Math.floor(x / 10);
  //   result = result * 10 + digit;
  // }

  // if (result > 2 ** 31) {
  //   return 0;
  // }
  // return isNegative ? -result : result;

  const isNegative = x < 0;
  x = Math.abs(x);
  let result = null;
  result = x
    .toString()
    .split('')
    .reverse()
    .join('');

  if (result > 2 ** 31) {
    return 0;
  }
  return isNegative ? -result : result;
};
