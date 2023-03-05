/**
 * Problem 1 - Maximum and minimum of an array using minimum number of comparisons
 *
 * Practise Link - https://practice.geeksforgeeks.org/problems/max-min/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article
 */
// class Solution {
//     findSum(arr, size) {
//         let min = arr[0];
//         let max = arr[0];
//         for (let i = 1; i < size; i++) {
//             min = arr[i] < min ? arr[i] : min;
//             max = arr[i] > max ? arr[i] : max;
//         }
//         return min + max;
//     }
// }



/**
 * Problem 2 - Write a program to reverse an array or string
 *
 * Practise Link - https://practice.geeksforgeeks.org/problems/reverse-a-string/1
 */
// class Solution {
//     reverseWord(str) {
//         let strArr = str.split("")
//         let i = 0;
//         let j = strArr.length - 1;
//         while (i < j) {
//             let temp = strArr[i];
//             strArr[i] = strArr[j];
//             strArr[j] = temp;
//             i++; j--;
//         }
//         return strArr.join("");
//     }
// }



/**
 * Problem 3 -  Maximum Subarray - Kadane's Algorithm
 *
 * Practise Link - https://leetcode.com/problems/maximum-subarray/description/
 */
// var maxSubArray = function (nums) {
//     let curr = 0;
//     let max = nums[0]
//     for (let i = 0; i < nums.length; i++) {
//         curr += nums[i];
//         max = Math.max(max, curr);
//         if (curr < 0) curr = 0;
//     }
//     return max;
// };



/**
 * Problem 4 -  Contains Duplicate
 *
 * Practise Link - https://leetcode.com/problems/contains-duplicate/description/
 */
// var containsDuplicate = function (nums) {
//     let s = new Set();
//     for (let i = 0; i < nums.length; i++) {
//         let itm = nums[i];
//         if (s.has(itm))
//             return true;
//         s.add(itm);
//     }
//     return false;
// };



/**
 * Problem 5 -  Repeat and Missing Number Array
 *
 * Practise Link - https://www.interviewbit.com/problems/repeat-and-missing-number-array/
 */
// function repeatMissingNumber(A) {
//     let temp = new Array(A.length).fill(0)
//     for (let i = 0; i < A.length; i++) {
//         let itm = A[i];
//         temp[itm - 1]++;
//     }
//     let repeat;
//     let missing;
//     for (let i = 0; i < temp.length; i++) {
//         if (temp[i] === 0) {
//             missing = i + 1;
//         }
//         if (temp[i] >= 2) {
//             repeat = i + 1;
//         }

//     }
//     return [repeat, missing]
// }



/**
 * Problem 6 -  Kth Largest Element in an Array
 *
 * Practise Link - https://leetcode.com/problems/kth-largest-element-in-an-array/description/
 *
 * We can't solve this problem in O(n). There are various way to solve this problem.
 * Plz have a look.
 *
 * https://www.geeksforgeeks.org/kth-smallest-largest-element-in-unsorted-array/
 */
// var findKthLargest = function (nums, k) {
//     nums.sort((a, b) => b - a);
//     return nums[k - 1];
// };