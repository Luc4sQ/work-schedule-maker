import numpy as np

# functions for test reasons
def mean(list):
    length = len(list)
    result = 0
    
    for i in range(length):
        result += list[i]
    result = int(result / length)

    return result

# the boundarys of worktime
UPPER_BOUND = 8
LOWER_BOUND = 3

# information of employees
WORKTIME_PER_EMPLOYEE = [160, 160, 160, 34.5] # destined to be an array of lenth n
WORKTIME_PER_DAY = [] # destined to be an array of length 28
NUMBER_OF_WORKINGDAYS = 4 # destined to be 28

# mean value for test reasons
MEANTIME_PER_DAY = mean(WORKTIME_PER_EMPLOYEE)

for i in range(NUMBER_OF_WORKINGDAYS):
    WORKTIME_PER_DAY.append(MEANTIME_PER_DAY)

#print(WORKTIME_PER_DAY)

