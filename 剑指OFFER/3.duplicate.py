# 这里要特别注意~找到任意重复的一个值并赋值到 duplication[0]
# 函数返回True/False

'''
哈希 时间复杂度O(N) 空间复杂度O(N)
'''


class Solution:

    def duplicate(self, numbers, duplication):
        dict = {}
        for i in range(len(numbers)):
            if numbers[i] in dict:
                duplication[0] = numbers[i]
                return True
            else:
                dict[numbers[i]] = i
        return False
