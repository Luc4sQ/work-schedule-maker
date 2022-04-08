# functions for test reasons
def mean(list):
    length = len(list)
    result = 0
    
    for i in range(length):
        result += list[i]
    result = int(result / length)

    return result