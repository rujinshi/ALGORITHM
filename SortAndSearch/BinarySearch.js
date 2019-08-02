/**
 *
 * @param {*} arr
 * @param {*} item
 * 迭代
 */
// function BinarySearch(arr, item) {
//   if (!Array.isArray(arr)) return;
//   let low = 0,
//     high = arr.length - 1,
//     mid = null,
//     element = null;
//   while (low <= high) {
//     mid = Math.floor((low + high) / 2);
//     element = arr[mid];
//     if (item < element) {
//       high = mid - 1;
//     } else if (item > element) {
//       low = mid + 1;
//     } else {
//       return mid;
//     }
//   }
//   return -1;
// }

/**
 * 
 * @param {*} arr 
 * @param {*} low 
 * @param {*} high 
 * @param {*} item 
 * 递归
 */
function BinarySearchHelper(arr, low, high, item) {
  if (low > high) return;
  let mid = Math.floor((low + high) / 2);
  if (item > arr[mid]) BinarySearchHelper(arr, mid + 1, high, ietm);
  if (item < arr[mid]) BinarySearchHelper(arr, low, mid - 1, ietm);
  return mid;
}

function BinarySearch(arr, item) {
  const low = 0;
  const high = arr.length - 1;
  return BinarySearchHelper(arr, low, high, item);
}
