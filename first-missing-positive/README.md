# First Missing Positive

## Challenge

Given an unsorted integer array, find the smallest missing positive integer.
Note: Your algorithm should run in O(n) time and uses constant extra space.


## Example:
```
Input: [1, 2, 0]
Output: 3
```

## Example 2:
```
Input: [3, 4, -1, 1]
Output: 2
```

## Example 3:
```
Input: [7, 8, 9, 11, 12]
Output: 1
```


## Solution 1

This solution using hashmap, which adds a bit to the space complexity, but still keep time complexity by O(n) as it iterates through the list of unsorted integers just ones. Starting iteration with the first positive integer 1 and returns result as soon as value is missing in a previously generated hashmap.


## Solution 2

There is no implementation for this solution in the repo, but there was one alternative, which I didn't put here because it doesn't satisfy a requirement for O(n) complexity. This solution suggest a sorting of an array (it's already a complexity of O(log n)) and then goes through the sorted array and check if the next item is equal to the current item + 1.