/*
 * @lc app=leetcode id=509 lang=java
 *
 * [509] Fibonacci Number
 */
class Solution {
  public int fib(int N) {
    if (N <= 1) {
      return N;
    }
    int f0 = 0;
    int f1 = 1;
    int fi = 1;
    for (int i = 2; i <= N; i++) {
      fi = f0 + f1;
      f0 = f1;
      f1 = fi;
    }
    return fi;
  }

}
