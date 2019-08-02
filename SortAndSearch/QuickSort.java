/**
 * QuickSort
 * 
 * @author shirujin
 */

// The key process in quickSort is partition(). Target of partitions is, given
// an array and an element x of array as pivot, put x at its correct position in
// sorted array and put all smaller elements (smaller than x) before x, and put
// all greater elements (greater than x) after x. All this should be done in
// linear time.
import java.util.Arrays;

public class QuickSort {

  public static void quickSort(int[] arr) {
    if (arr == null || arr.length < 2) {
      return;
    }
    quickSort(arr, 0, arr.length - 1);
  }

  public static void quickSort(int[] arr, int l, int r) {
    if (l < r) {
      // 交换 Pivot 至数组尾部
      swap(arr, l + (int) (Math.random() * (r - l + 1)), r);
      int pIndex = partition(arr, l, r);
      quickSort(arr, l, pIndex - 1);
      quickSort(arr, pIndex + 1, r);
    }
  }

  // 快慢指针法
  public static int partition(int[] arr, int l, int r) {
    int small = l - 1;
    for (int index = l; index < r; index++) {
      if (arr[index] < arr[r]) {
        ++small;
        if (small != index) {
          swap(arr, small, index);
        }
      }
    }
    swap(arr, ++small, r);
    return small;
  }

  public static void swap(int[] arr, int i, int j) {
    int tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

}