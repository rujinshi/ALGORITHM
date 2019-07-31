import java.util.Arrays;

/**
 * BubbleSort
 * 
 * @author shirujin
 * 
 */
public class BubbleSort {
  public static void bubbleSort(int[] arr) {
    if (arr == null || arr.length < 2) {
      return;
    }
    for (int i = 0; i < arr.length - 1; i++) {
      // 内循环时 减去外循环已经比过的趟数
      for (int j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
  }

  public static void swap(int[] arr, int i, int j) {
    arr[i] ^= arr[j];
    arr[j] ^= arr[i];
    arr[i] ^= arr[j];
  }
}