
# 40 最小的k个数
'''
思路1 排序后取前k个数 即为所求
时间复杂度 O(nlogn)
'''


class Solution1:
    def GetLeastNumbers_Solution(self, tinput, k):
        return sorted(tinput)[:k] if k <= len(tinput)else[]


'''
思路2：快排的 Partition 思想，以第k个数字作 pivot，Partition一次即可
时间复杂度：O(n)
代码略
'''

'''
思路3：维护一个大小为K的大顶堆，每次拿一个数和堆顶元素比较，只有比堆顶元素小时，与堆顶元素交换
时间复杂度:O(nlogk)
'''
