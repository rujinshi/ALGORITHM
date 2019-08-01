/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  // return s.reverse();
  // 前后指针
  let lo = 0;
  let hi = s.length - 1;
  while (lo < hi) {
    [s[lo++], s[hi--]] = [s[hi], s[lo]];
  }
};
