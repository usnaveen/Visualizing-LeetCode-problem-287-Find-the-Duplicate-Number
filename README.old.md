# Duplicate Detection Algorithm Visualization

This repository contains a visualization of an algorithm to detect duplicates in an array, inspired by the solution to LeetCode problem 287: Find the Duplicate Number.

## Problem Statement

**287. Find the Duplicate Number**

Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive.

There is only one repeated number in `nums`, return this repeated number.

You must solve the problem without modifying the array `nums` and uses only constant extra space.

### Example 1:

```
Input: nums = [1,3,4,2,2]
Output: 2
```

### Example 2:

```
Input: nums = [3,1,3,4,2]
Output: 3
```

### Constraints:

- `1 <= n <= 105`
- `nums.length == n + 1`
- `1 <= nums[i] <= n`
- All the integers in `nums` appear only once except for precisely one integer which appears two or more times.

### Follow up:

- How can we prove that at least one duplicate number must exist in `nums`?
- Can you solve the problem in linear runtime complexity?

[Link to LeetCode Problem](https://leetcode.com/problems/find-the-duplicate-number/description/)

## Solution

Here's a Python solution that uses the "Floyd's Cycle Detection" algorithm (also known as the "Tortoise and Hare" algorithm):

```python
class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        # Phase 1: Finding the intersection point of the two runners
        tortoise = hare = nums[0]
        while True:
            tortoise = nums[tortoise]
            hare = nums[nums[hare]]
            if tortoise == hare:
                break
        
        # Phase 2: Finding the entrance to the cycle
        tortoise = nums[0]
        while tortoise != hare:
            tortoise = nums[tortoise]
            hare = nums[hare]
        
        return hare
```

### Explanation

This solution uses Floyd's Cycle Detection algorithm:

1. We treat the array as a linked list, where `nums[i]` is the "next" element after `i`.
2. The duplicate number causes a cycle in this "linked list".
3. We use two pointers, "tortoise" and "hare", moving at different speeds to detect the cycle.
4. Once we find the intersection point, we reset one pointer to the start and move both at the same speed.
5. The point where they meet again is the entrance to the cycle, which is our duplicate number.

### Time Complexity

The time complexity of this solution is O(n), where n is the length of the input array. We traverse the array at most twice.

### Space Complexity

The space complexity is O(1) as we're only using a constant amount of extra space (two pointers) regardless of the input size.

## Visualization

While our visualization demonstrates a different approach (modifying the array), it helps in understanding the concept of using array indices to detect duplicates. The Floyd's Cycle Detection method used in the actual solution is more abstract and harder to visualize, but solves the problem without modifying the array.

[Link to Visualization](#) <!-- You'll add the actual link once deployed -->

## Running the Visualization Locally

1. Clone this repository
2. Navigate to the project directory
3. Install dependencies with `npm install`
4. Start the development server with `npm start`
5. Open `http://localhost:3000` in your browser

## Note on the Visualization vs. LeetCode Solution

The visualization in this project demonstrates a technique that modifies the array to detect duplicates. While this approach doesn't meet the constraints of LeetCode problem 287, it provides an intuitive understanding of using array indices for duplicate detection.

The actual LeetCode solution using Floyd's Cycle Detection algorithm is more complex and doesn't lend itself as well to a step-by-step visualization. However, understanding both approaches can provide valuable insights into problem-solving techniques for array manipulation and cycle detection in data structures.
