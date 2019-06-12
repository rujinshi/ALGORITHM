/**
 *
 * @param {number[]} nums
 * @returns {number[]}
 * @description 方法1 可以暴力枚举 则时间复杂度为O（n^3）
 * 方法2 采用分治思想 fix 一个数 nums[i], 找到另外两数之和为 -nums[i] 即可
 * 如果数组是有序的 则可以通过 双指针 以线性时间复杂度找到所有满足题意的组合
 * 注意点：
 * 1.如果 nums[i] > 0 则无需继续遍历 直接跳出后续循环
 * 2.如果当前数和前面的数字相等 则需要跳过当前循环
 * Tag：双指针
 * 
 */
var threeSum = function(nums) {
  let ansArray = [];
  const arrayLength = nums.length;
  if (arrayLength < 3) {
    return ansArray;
  }
  // 数组排序
  nums.sort((a, b) => a - b);
  for (let i = 0; i < arrayLength - 2; i++) {
    // 如果当前数大于 0 则直接跳出循环
    if (nums[i] > 0) break;
    // 相同的数字不需要 fix 两次
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const target = 0 - nums[i];
    // 借用双指针 向中间逼近
    let sp = i + 1;
    let fp = arrayLength - 1;
    while (sp < fp) {
      if (nums[sp] + nums[fp] === target) {
        ansArray.push([nums[i], nums[sp], nums[fp]]);
        // 跳过相同的数字
        while (sp < fp && nums[sp] === nums[sp + 1]) ++sp;
        while (sp < fp && nums[fp] === nums[fp - 1]) --fp;
        ++sp;
        --fp;
      } else if (nums[sp] + nums[fp] < target) {
        ++sp;
      } else {
        --fp;
      }
    }
  }
  return ansArray;
};
