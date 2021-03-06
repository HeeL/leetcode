# Summary Ranges

## Challenge

Given a sorted integer array without duplicates, return the summary of its ranges. [ [_leetcode_](https://leetcode.com/problems/summary-ranges/) ]

## Example
```
Input:  [0, 1, 2, 4, 5, 7]
Output: ["0->2","4->5","7"]
Explanation: 0,1,2 form a continuous range; 4,5 form a continuous range.
```

## Example 2
```
Input:  [0, 2, 3, 4, 6, 8, 9]
Output: ["0", "2->4", "6", "8->9"]
Explanation: 2,3,4 form a continuous range; 8,9 form a continuous range.
```

## Solution

Since the list is already sorted, we can form ranges as we iterate. We save the starting point and making a cut as soon as the next element is not a plus one from the current one. This keeps complexity by O(n).
