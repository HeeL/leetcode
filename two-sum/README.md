# Two Sum

## Challenge

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice. [ [_leetcode_](https://leetcode.com/problems/two-sum/) ]

## Example:
```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

## Solution 1

`index.js` contains so called brute force solution that first spring to my mind. Every item summed with other one and compared against target. That gives us a complexity of **O(n<sup>2</sup>)** in the worst case scenario, as we are iterating a loop inside of a loop.

## Solution 2

`alternative.js` has an optimized solutions. The goal was to get rid of nested loop to reduce complexity. As a result we are doing only one iteration, so complexity of this solution is **O(n)**.
