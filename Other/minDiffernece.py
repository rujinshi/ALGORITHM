'''
最小差值问题：
描述：
给定n个数，请找出其中相差（差的绝对值）最小的两个数，输出它们的差值的绝对值。
思路：
通过排序将数组中的数据有序化，由于最小的差值只会出现在有序数组的两个相邻的数中，
因此，只需要求出有序数组中每两个相邻的数的差值即可，再从中找出最小的一个。
样例：
输入： 9 3 6 1 3
输出： 0
'''


def minDiffernece(numbers):
    sortedNumbres = sorted(numbers)
    diff = []
    for i in range(len(sortedNumbres)-1):
        diff.append(abs(sortedNumbres[i]-sortedNumbres[i+1]))

    min = abs(numbers[1]-numbers[0])
    for j in range(len(diff)):
        if diff[j] < min:
            min = diff[j]
    return min
