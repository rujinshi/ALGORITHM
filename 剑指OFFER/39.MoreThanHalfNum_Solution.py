# 39 数组中出现次数超过一半的数字
'''
思路1 : 
数组排序后，数组中间的数字一定就可能是那个出现次数超过数组长度一半的数字
此外：还需进行遍历一遍数组，统计该数字出现的次数是否真的大于数组长度一半
因为有可能输入的数组出现频率最高的数字都没有达到该标准
时间复杂度 O(nlogn)
'''


class Solution1:
    def MoreThanHalfNum_Solution(self, numbers):
        if len(numbers) == 0:
            return 0
        # 排序
        numbers.sort()
        length = len(numbers)
        count = 0
        result = numbers[int(length/2)]
        for i in range(length):
            if numbers[i] == result:
                count += 1
        return result if count > length/2 else 0


'''
思路2 : 
该数字出现的次数一定比其他所有数字出现的次数的和还要多
在遍历数组时保存两个值：一是数组中一个数字，一是次数。遍历下一个数字时，若它与之前保存的数字相同，
则次数加1，否则次数减1；若次数为0，则保存下一个数字，并将次数置为1。遍历结束后，所保存的数字即为所求。
然后再判断它是否符合条件即可。
时间复杂度 O(N) 
'''


class Solution2:
    def MoreThanHalfNum_Solution(self, numbers):
        if len(numbers) == 0:
            return 0
        length = len(numbers)
        result = numbers[0]
        count = 1
        for i in range(1, length):
            if numbers[i] == result:
                count += 1
            else:
                count -= 1
            if count == 0:
                result = numbers[i]
                count = 1
        count = 0
        for i in range(length):
            if numbers[i] == result:
                count += 1
        return result if count > length/2 else 0
