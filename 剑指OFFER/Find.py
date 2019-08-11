'''
描述：
在一个二维数组中（每个一维数组的长度相同），
每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

思路：
根据该二维数组已有特性 ，若从右上角开始查找，
如果target大于当前值，则剔除当前行
如果target小于当前值，则剔除当前列
直到target等于当前值
'''


class Solution:
    # array 二维列表
    def Find(self, target, array):
        # m 行数 n 列数
        m, n = len(array), len(array[0])
        if m == 1 and n == 0:
            return False
        i = 0
        while n >= 0 and i < m:
            if array[i][n-1] > target:
                n -= 1
            elif array[i][n-1] < target:
                i += 1
            else:
                return True
        return False


