/**
 *
 * @param {*} rotateArray
 * tag 二分查找 双指针 数组
 * 旋转后的数组可以划分为两个排序的子数组，且第一个子数组的元素都会大于等于第二个子数组的元素
 * 最小的元素恰好是两个子数组的分界线
 */
function minNumberInRotateArray(rotateArray) {
  if (rotateArray.length === 0) return 0;
  let start = 0;
  let end = rotateArray.length - 1;
  let mid = -1;
  while (rotateArray[start] >= rotateArray[end]) {
    mid = Math.floor((start + end) / 2);
    // 如果 指向 的三个数字相等只能顺序查找 [1, 0, 1, 1, 1]
    if (
      rotateArray[start] === rotateArray[end] &&
      rotateArray[end] === rotateArray[mid]
    ) {
      return findMin(rotateArray);
    }
    // 中间元素位于前一个子数组中
    if (rotateArray[mid] >= rotateArray[start]) {
      start = mid;
    } else if (rotateArray[mid] <= rotateArray[end]) {
      // 中间元素位于后一个子数组中
      end = mid;
    }
    if (end - start === 1) break;
  }
  return rotateArray[end];
}

function findMin(array) {
  let result = Number.MAX_SAFE_INTEGER;
  for (let index = 0; index < array.length; index++) {
    result = Math.min(result, array[index]);
  }
  return result;
}
