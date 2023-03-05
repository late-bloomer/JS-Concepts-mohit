// Create a questionnaire page flow which will consist of 4 pages. Page 1 will have the start of the problem and depending on the answer given by user, question to the next page will change.

// Question of page 1:
// Do you use hand sanitizer?
// Options: [Yes, No]

// If user selects “yes” as his response, following questions will show up on page 2.

// Question of page 2:
// Which brand of hand sanitizer do you use?
// Options: [Dettol, Lifebuoy, Godrej]

// Question of page 3:
// What other product do you use of [previously selected option brand]?
// Dettol: [soap, hand wash, antiseptic]
// Lifebuoy: [Soap, handwash]
// Godrej: [soap, shaving cream]

// Page 4:
// Thank you page.

// If user selects “No” as his response, different question will show up on page 1.
// Do you use speaker?
// Option: [yes, No]

// Question of page 2:
// Which brand of speaker do you use?
// Option: [Sony, Bose, JBL]

// Question of Page 3:
// What other product do you use of [previously selected brand]
// Sony: [TV, Fridge]
// Bose: [Headphone, earphones],
// JBL: [“Headphone”, “Home theater”]

// var question = {
//   question: "Do you use hand sanitizer?",
//   yes: {
//     question: "Which brand of hand sanitizer do you use?",
//     Dettol: {
//       question: "What other product do you use of Dettol",
//       options: ["soap", "hand wash", "antiseptic"],
//     },
//     Lifebuoy: {
//       question: "What other product do you use of Lifebuoy",
//       options: ["Soap", "handwash"],
//     },
//     Godrej: {
//       question: "What other product do you use of Godrej",
//       options: ["soap", "shaving cream"],
//     },
//   },
//   no: {
//     question: "Do you use speaker?",
//     yes: {
//       question: "Which brand of speaker do you use?",
//       sony: {
//         question: "What other product do you use of sony",
//         options: ["TV", "Fridge"],
//       },
//       bose: {
//         question: "What other product do you use of bose",
//         options: ["Headphone", "earphones"],
//       },
//       jbl: {
//         question: "What other product do you use of jbl",
//         options: ["Headphone", "Home theater"],
//       },
//     },
//     no: "thank you",
//   },
// };

//---------------------------------------------------------
//("use strict");

// function MyPromise(f) {
//     console.log(2);
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//           console.log(7);
//           resolve('data');
//           console.log(8);
//         }, 100)
//     })

// }
// class MyPromise {
//   constructor(callback) {
//     this.isResolve = false;
//     this.resolveData = "";
//     callback(this.resolve);
//   }
//   resolve = (args) => {
//     //console.log(args)
//     this.resolveData = args;
//     this.isResolve = true;
//     return args;
//   };
//   then = (callback2) => {
//     setTimeout(() => {
//       if (this.isResolve) {
//         callback2(this.resolveData);
//       }
//     }, 1000);

//     return this.resolve;
//   };
// }
//=================================================================================
// create a simple custom Promise using class/function
console.log(1);
//const p1 = new Promise(function(resolve) {
// const p1 = new MyPromise(function (resolve) {
//   console.log(2);
//   setTimeout(function () {
//     console.log(7);
//     resolve("data");
//     console.log(8);
//   }, 2000);
//   console.log(3);
// });
// const p1 = new MyPromise(function(resolve){
//     console.log(2);
//     setTimeout(function() {
//         console.log(7);
//         resolve('data');
//         console.log(8);
//     }, 100);
//     console.log(3);
// });
// console.log(4);
// p1.then(function (value) {
//   console.log("result 1 = " + value);
//   return "result";
// });

// console.log(5);

// p1.then(function (value) {
//   console.log("result 2 = " + value);
// });
// console.log(6);


//--------------- Permutation of str ------------------
// var str = "ABC";
// permutationOfString(str.split(""), 0, str.length - 1);
// function permutationOfString(str, start, end) {
//   if (start === end) {
//     console.log(str.join(""));
//   } else {
//     for (let i = start; i <= end; i++) {
//       str = swap(str, start, i);
//       permutationOfString(str, start + 1, end);
//       str = swap(str, start, i);
//     }
//   }
// }

// function swap(str, s, l) {
//   let temp = str[s];
//   str[s] = str[l];
//   str[l] = temp;
//   return str;
// }

//----------------------- longestCommonPrefix ---------------------------
// console.log(longestCommonPrefix(["cir", "car"])); //c
// console.log(longestCommonPrefix(["flower", "flow", "flight"])); //fl
// console.log(longestCommonPrefix(["flower", "flowers", "flow"])); // flow
// function longestCommonPrefix(arrStr) {
//   if (arrStr.length === 0) return "";
//   else {
//     let lcp = arrStr[0];
//     for (let i = 1; i < arrStr.length; i++) {
//       let curr = arrStr[i];
//       let temp = [];
//       let len = lcp.length < curr.length ? lcp.length : curr.length;
//       for (let j = 0; j < len; j++) {
//         if (lcp[j] !== curr[j]) {
//           break;
//         } else {
//           temp.push(lcp[j]);
//         }
//       }
//       lcp = temp.join("");
//     }
//     return lcp;
//   }
// }

//------------------- HCF & LCM ----------------------------------
// console.log(hcfArrayNumber([3, 15, 27]));
// console.log(hcfArrayNumber([5, 10, 15, 25]));

// console.log(lcmArrayNumber([3, 15, 27]));
// console.log(lcmArrayNumber([5, 10, 15, 25]));

// function hcfArrayNumber(arr) {
//   if (arr.length === 0) return 0;
//   else if (arr.length === 1) return arr[0];
//   else {
//     let hcf = calHcf(arr[0], arr[1]);
//     for (let j = 2; j < arr.length; j++) {
//       hcf = calHcf(hcf, arr[j]);
//     }
//     return hcf;
//   }
// }

// function calHcf(num1, num2) {
//   let hcf = 1;
//   for (let i = 2; i <= num1 && i <= num2; i++) {
//     if (num1 % i === 0 && num2 % i === 0) {
//       hcf = i;
//     }
//   }
//   return hcf;
// }

// function lcmArrayNumber(arr) {
//   if (arr.length === 0) return 0;
//   else if (arr.length === 1) return arr[0];
//   else {
//     let lcm = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       lcm = (lcm * arr[i]) / calHcf(lcm, arr[i]);
//     }
//     return lcm;
//   }
// }

//------------------factorial & fibonnaci-------------------------
// console.log(factorial(4)); //24
// console.log(fibonnaci(9)); // 34 [0,1,1,2,3,5,8,13,21,34]
// function factorial(num) {
//   if (num === 0 || num === 1) return 1;
//   else return num * factorial(num - 1);
// }
// function fibonnaci(num) {
//   if (num === 0 || num === 1 || num === 2) return 1;
//   else {
//     return fibonnaci(num - 1) + fibonnaci(num - 2);
//   }
// }

//----------------------mergeTwoSortedArray--------------------------
// mergeTwoSortedArray([12], [2, 3]);
// mergeTwoSortedArray([1, 5, 9, 10, 15, 20], [2, 3, 8, 13]);

// function mergeTwoSortedArray(arr1, arr2) {
//   let len2 = arr2.length - 1;
//   while (len2 >= 0) {
//     if (arr2[len2] >= arr1[arr1.length - 1]) {
//       arr1.push(arr2[len2]);
//       len2--;
//     } else {
//       let len1 = arr1.length - 1;
//       let temp = arr1[len1];
//       while (arr2[len2] < arr1[len1 - 1]) {
//         arr1[len1] = arr1[len1 - 1];
//         len1--;
//       }
//       arr1[len1] = arr2[len2];
//       arr1.push(temp);
//       len2--;
//     }
//   }
//   console.log(arr1);
// }

//---------------------------kadaneAlgo---------------------------
// kadaneAlgo([-2, -3, 4, -1, -2, 1, 5, -3]);
// function kadaneAlgo(arr) {
//   let currSum = arr[0];
//   let maxSum = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     currSum = currSum + arr[i];
//     maxSum = Math.max(currSum, maxSum);
//     if (currSum < 0) currSum = 0;
//   }
//   console.log(maxSum);
// }

//------------------------reverseArrayInGroup----------------------------
// reverseArrayInGroup([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 14, 4);

// function reverseArrayInGroup(arr, len, k) {
//   for (let i = 0; i < len; ) {
//     let start = i;
//     let last = len - i > k ? i + k : len;
//     reverseGroup(arr, start, last - 1);
//     i = last;
//   }
//   console.log(arr);
// }

// function reverseGroup(arr, start, last) {
//   while (start <= last) {
//     let temp = arr[start];
//     arr[start] = arr[last];
//     arr[last] = temp;
//     start++;
//     last--;
//   }
// }

//---------------------------oneSideNegative-----------------------------
// let arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6, 234, 23, -9];
// console.log(oneSideNegative(arr));

// function oneSideNegative(arr) {
//   let start = 0;
//   let last = arr.length - 1;
//   while (start <= last) {
//     if (arr[start] < 0) start++;
//     else if (arr[last] >= 0) last--;
//     else {
//       let temp = arr[start];
//       arr[start] = arr[last];
//       arr[last] = temp;
//       start++;
//       last--;
//     }
//   }
//   return arr;
// }

//----------------------zeroOnesTwosArray-------------------------------
// zeroOnesTwosArray([1, 1, 2, 0, 0, 0, 1, 2, 2, 1, 0, 0], 12);
// zeroOnesTwosArray([0, 1, 2, 1, 1, 2, 0, 0, 2, 1], 10);

// function zeroOnesTwosArray(arr, len) {
//   let count_zeros = 0;
//   let count_ones = 0;
//   let count_twos = 0;
//   arr.forEach((element) => {
//     if (element === 0) count_zeros++;
//     else if (element === 1) count_ones++;
//     else count_twos++;
//   });
//   arr = [];
//   while (count_zeros--) arr.push(0);
//   while (count_ones--) arr.push(1);
//   while (count_twos--) arr.push(2);
//   console.log(arr);
// }

//------------------- largestNumber formed by Array ------------------------
// largestNumber([3, 30, 34, 5, 9]);
// largestNumber([3, 10, 2]);

// function largestNumber(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       let num1 = arr[i] + "" + arr[j];
//       let num2 = arr[j] + "" + arr[i];
//       if (parseInt(num2) > parseInt(num1)) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   console.log(arr.join(""));
// }

//--------------------------towerOfHanoi-----------------------------
// var disk = 3; // Number of disks
// towerOfHanoi(disk, "First", "Middle", "Last");
// function towerOfHanoi(disk, from, aux, to) {
//   if (disk === 1) {
//     console.log(`move disk${disk} from ${from} to ${to}`);
//     return;
//   }
//   towerOfHanoi(disk - 1, from, to, aux);
//   console.log(`move disk ${disk} from ${from} to ${to}`);
//   towerOfHanoi(disk - 1, aux, from, to);
// }

//------------- Next greater permutation of array of numbers --------------------
// nextPermutation([3, 2, 1]); //123
// nextPermutation([1, 2, 3]); //132
// nextPermutation([1, 1, 5]); //151
// nextPermutation([1, 3, 1]); //311
// nextPermutation([1, 3, 2]); //213
// nextPermutation([1, 5, 8, 4, 7, 6, 5, 3, 1]); //158513467

// function nextPermutation(arr) {
//   let j = null;
//   for (let i = arr.length - 1; i > 0; ) {
//     if (arr[i] <= arr[i - 1]) {
//       i--;
//     } else {
//       j = i - 1;
//       break;
//     }
//   }
//   if (j !== null) {
//     let i = j + 1;
//     while (i <= arr.length - 1) {
//       if (i == arr.length - 1 || (arr[j] < arr[i] && arr[j] >= arr[i + 1])) {
//         let temp = arr[j];
//         arr[j] = arr[i];
//         arr[i] = temp;
//         break;
//       } else i++;
//     }
//     let start = j + 1;
//     let last = arr.length - 1;
//     while (start <= last) {
//       let temp = arr[start];
//       arr[start] = arr[last];
//       arr[last] = temp;
//       start++;
//       last--;
//     }
//     console.log(arr.join(""));
//   } else console.log(arr.reverse().join(""));
// }

//---------Array Arrangements(A[i]<A[j]<A[k] && i<j<k)------------------
// let n = 11;
// let a = [2, 1, 1, 1, 2, 1, 2, 1, 18, 9, 2];
// find3Numbers(a, n); // [1, 2, 18]
// let nn = 5;
// let aa = [1, 2, 1, 1, 3];
// find3Numbers(aa, nn); // [1, 2, 3]
// find3Numbers([1, 2, 2, 1, 1], 5); //[]
// find3Numbers([1, 2], 2); // false
// function find3Numbers(arr, size) {
//   if (size < 3) console.log(false);
//   else {
//     let i = 0;
//     let j = i + 1;
//     let k = j + 1;
//     let result = [];
//     while (i + 2 < size) {
//       if (arr[i] < arr[j] && arr[j] < arr[k] && i < j && j < k) {
//         result.push(arr[i]);
//         result.push(arr[j]);
//         result.push(arr[k]);
//         break;
//       } else if (arr[i] >= arr[j]) {
//         j++;
//         k++;
//       } else if (arr[j] >= arr[k]) {
//         k++;
//       } else {
//         i++;
//         j = i + 1;
//         k = j + 1;
//       }
//     }
//     console.log(result);
//   }
// }

// ----------- Array Rotation[1,2,3,12,11,4,5,6] --> [6,1,5,2,4,3,11,12] --------
// let arr = [1, 2, 3, 12, 11, 4, 5, 6];
// arrayArrangement(arr);
// function arrayArrangement(arr) {
//   let i = 0;
//   let last = arr.length - 1;
//   while (i < arr.length) {
//     let key = arr[last];
//     let j = last - 1;
//     while (j >= i) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[i] = key;
//     i = i + 2;
//   }
//   console.log(arr);
// }

//----------ZigZag Array [4, 3, 7, 8, 6, 2, 1] -> [3 < 7 > 4 < 8 > 2 < 6 > 1]--------
//-------- (or) [1 < 3 > 2 < 6 > 4 < 8 > 7] ---------
// function arrayZigZag(arr) {
//   arr.sort((a, b) => a - b);
//   for (let i = 1; i < arr.length - 1; i = i + 2) {
//     let temp = arr[i];
//     arr[i] = arr[i + 1];
//     arr[i + 1] = temp;
//   }
//   return arr;
// }

// console.log(arrayZigZag([4, 3, 7, 8, 6, 2, 1])); //[1, 3, 2, 6, 4, 8, 7]
// console.log(arrayZigZag([4, 3, 7, 8, 6, 2])); // [2, 4, 3, 7, 6, 8]

//----------- Bubble sort -----------------
// console.log(bubbleSort([4, 3, 7, 8, 6, 2, 1]));
// function bubbleSort(arr) {
//   let pass = 0;
//   while (pass++ < arr.length) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

//------------- Insertion sort ------------------
// console.log(insertionSort([14, -1, 0, 12, 3, 2, 1]));
// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let key = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = key;
//   }
//   return arr;
// }

//-------------- Binary Search -------------------
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 13));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8));

// function binarySearch(arr, data) {
//   if (arr.length === 0) return "not found !!!";
//   let mid = Math.floor(arr.length / 2);
//   if (arr[mid] === data) {
//     return `data is present`;
//   } else if (data < arr[mid]) {
//     let t = arr.slice(0, mid);
//     return binarySearch(t, data);
//   } else {
//     let t = arr.slice(mid + 1, arr.length);
//     return binarySearch(t, data);
//   }
// }

//------------------ Merge Sort -----------------------
// console.log(mergesort([80, 10, 30, 90, 40, 35, 45, 9], 0, 7));

// function mergesort(arr, start, end) {
//   if (start >= end) return;
//   let mid = Math.floor((start + end) / 2);
//   mergesort(arr, start, mid);
//   mergesort(arr, mid + 1, end);
//   mergeringArr(arr, start, mid, end);
//   return arr;
// }

// function mergeringArr(arr, start, mid, end) {
//   let cmp1 = arr.slice(start, mid + 1);
//   let cmp2 = arr.slice(mid + 1, end + 1);
//   let i = 0;
//   let j = 0;
//   let k = start;
//   while (i < cmp1.length && j < cmp2.length) {
//     if (cmp1[i] <= cmp2[j]) {
//       arr[k] = cmp1[i];
//       i++;
//       k++;
//     } else {
//       arr[k] = cmp2[j];
//       j++;
//       k++;
//     }
//   }
//   while (i < cmp1.length) {
//     arr[k] = cmp1[i];
//     i++;
//     k++;
//   }
//   while (j < cmp2.length) {
//     arr[k] = cmp2[j];
//     j++;
//     k++;
//   }
// }

//------------------- Min Platform required -------------------
// var arrv = [0900, 0940, 0950, 1100, 1500, 1800];
// var dep = [0910, 1200, 1120, 1130, 1900, 2000];
// var n = 6;
// console.log(findPlatform(arrv, dep, n));

// var arrv = [0900, 1100, 1235];
// var dep = [1000, 1200, 1240];
// var n = 3;
// console.log(findPlatform(arrv, dep, n));
// function findPlatform(arrv, dep, n) {
//   //your code here
//   arrv.sort((a, b) => a - b);
//   dep.sort((a, b) => a - b);
//   let max_platform = 1;
//   let curr_platform = 1;
//   let i_arrv = 1;
//   let i_dep = 0;
//   while (i_arrv < n && i_dep < n) {
//     if (arrv[i_arrv] > dep[i_dep]) {
//       curr_platform--;
//       i_dep++;
//     } else {
//       curr_platform++;
//       max_platform = Math.max(max_platform, curr_platform);
//       i_arrv++;
//     }
//   }
//   return max_platform;
// }

//------------- Stock buy and sell - Type I ------------
// maxProfit([7, 8, 2, 5, 3, 1, 6, 4, 18, 2]); //17 (18-1)
// maxProfit([7, 8, 2, 5, 30, 1, 6, 4, 18, 2]); //28 (30-2)
// maxProfit([7, 8, 2, 5, 30, 1, 6, 4, 32, 2]); //31 (32-1)
// function maxProfit(arr) {
//   let curr_profit = 0;
//   let max_profit = 0;
//   let buy_day = 0;
//   let sell_day = 0;
//   let prev = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (prev > arr[i]) {
//       //buy_day = i + 1;
//       prev = arr[i];
//     } else {
//       curr_profit = arr[i] - prev;
//       //sell_day = curr_profit > max_profit ? i + 1 : sell_day;
//       max_profit = Math.max(curr_profit, max_profit);
//     }
//   }
//   console.log("max profit is : ", max_profit);
//   // console.log("Day of Buying : Day", buy_day);
//   // console.log("Day of Selling : Day", sell_day);
// }

//------------- Stock buy and sell - Type II ------------
// function maxProfit(arr) {
//   let curr_profit = 0;
//   let max_profit = 0;
//   let total_profit = 0;
//   let prev = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (prev > arr[i] || arr[i] - prev < max_profit) {
//       // for buying
//       prev = arr[i];
//       total_profit = total_profit + max_profit;
//       curr_profit = 0;
//       max_profit = 0;
//     } else {
//       // for selling
//       curr_profit = arr[i] - prev;
//       max_profit = max_profit < curr_profit ? curr_profit : max_profit;
//     }
//   }
//   console.log(total_profit);
// }
// maxProfit([7, 8, 9, 2, 1, 4, 5, 3, 2, 3, 6, 4]); //10 (9-7)+(5-1)+(6-2)

//-----------matrix_90_rotation & Zig-zag print-----------------
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// zig_zag_print(arr); // 1,4,7,8,5,2,3,6,9
// matrix_90_rotation(arr); //7,4,1,8,5,2,9,6,3
// function zig_zag_print(arr) {
//   let size = arr.length;
//   let isForward = true;
//   let result = [];
//   for (let col = 0; col < size; col++) {
//     if (isForward) {
//       let temp = [];
//       for (let row = 0; row < size; row++) {
//         //console.log(arr[row][col]);
//         temp.push(arr[row][col]);
//       }
//       isForward = false;
//       result.push(temp);
//     } else {
//       let temp = [];
//       for (let row = size - 1; row >= 0; row--) {
//         //console.log(arr[row][col]);
//         temp.push(arr[row][col]);
//       }
//       isForward = true;
//       result.push(temp);
//     }
//   }
//   console.log(result);
// }
// function matrix_90_rotation(arr) {
//   let size = arr.length;
//   let result = [];
//   for (let col = 0; col < size; col++) {
//     let temp = [];
//     for (let row = size - 1; row >= 0; row--) {
//       //console.log(arr[row][col]);
//       temp.push(arr[row][col]);
//     }
//     result.push(temp);
//   }
//   console.log(result);
// }

//-----All subsequence of string(Pick and Don’t Pick Concept)-------
// allSub("abc");
// function allSub(str) {
//   let output = "";
//   allSubUtil(str, output, str.length);
// }
// function allSubUtil(input, output, size) {
//   if (size === 0) {
//     console.log(output);
//   } else {
//     allSubUtil(
//       input.slice(1),
//       output + input.slice(0, 1),
//       input.slice(1).length
//     );
//     allSubUtil(input.slice(1), output, input.slice(1).length);
//   }
// }

//------------------Start: Pattern Valid Check -------------------
// var str = "aaxxubbbcccvvvbd"; // not vaild
// var str1 = "aaxxubbbcccvvvabcd"; // not vaild
// var str2 = "aaxxubbbcccvvv"; // valid;
// var str3 = "aaxxubbbcccvvvd"; //valid;
// var str4 = "aaxxucccvvvd"; //valid;

// // d should come after c && c should come after b && b should come after a then
// // string has valid pattern but in abover "str" b comes after c.
// var pattern = "abcd";

// function checkValid(pattern, str) {
//   let m = new Map();
//   let arr = pattern.split("");
//   arr.forEach((element) => {
//     m.set(element, -1);
//   });
//   for (let i = 0; i < str.length; i++) {
//     let curr = str[i];
//     if (pattern.includes(curr)) {
//       m.set(curr, i);
//       if (!isMapValid(m)) {
//         console.log("Invalid Pattern !!!");
//         return;
//       }
//     }
//   }
//   console.log("Valid Pattern !!!!");
//   return;
// }

// function isMapValid(m) {
//   let values = Array.from(m.values());
//   //console.log(values);
//   for (let i = 0; i < values.length - 1; i++) {
//     let curr = values[i];
//     for (let j = i + 1; j < values.length - 1; j++) {
//       if (curr > values[j] && values[j] !== -1) return false;
//     }
//   }
//   return true;
// }
// checkValid(pattern, str);
// checkValid(pattern, str1);
// checkValid(pattern, str2);
// checkValid(pattern, str3);
// checkValid(pattern, str4);

//---------------Start: Merging intervals ----------------
// var intervals = [
//   [1, 3],
//   [2, 6],
//   [8, 10],
//   [15, 18],
// ]; // output -> [[1,6],[8,10],[15,18]]
// var intervals2 = [
//   [1, 13],
//   [2, 6],
//   [8, 10],
//   [15, 18],
// ]; // output -> [[1, 13], [15, 18]]
// var intervals3 = [
//   [1, 4],
//   [4, 5],
// ]; // output -> [[1,5]]

// var intervals4 = [
//   [15, 18],
//   [2, 6],
//   [8, 10],
//   [1, 14],
// ]; // output -> [[1, 14], [15, 18]]
// function mergeInterval(intervals) {
//   let result = [];
//   intervals.sort((a, b) => a[0] - b[0]);
//   let prev = intervals[0];
//   for (let i = 1; i < intervals.length; i++) {
//     if (prev[1] >= intervals[i][0]) {
//       prev = [prev[0], Math.max(prev[1], intervals[i][1])];
//     } else {
//       result.push(prev);
//       prev = intervals[i];
//     }
//   }
//   result.push(prev);
//   console.log(result);
// }

// mergeInterval(intervals);
// mergeInterval(intervals2);
// mergeInterval(intervals3);
// mergeInterval(intervals4);

//------------- Roman to integer and vice versa ---------------
// console.log(roman_to_Int("XXVI")); // 26
// console.log(roman_to_Int("CI")); // 101
// console.log(roman_to_Int("VI")); // 6
// console.log(roman_to_Int("IV")); // 4
// console.log(roman_to_Int("MMLIV")); // 2056
// console.log(roman_to_Int("MMCVIII")); // 2108
// console.log(roman_to_Int("DCCCXXXV")); // 835

// function roman_to_Int(str) {
//   let pre_val = lookTable(str[0]);
//   for (let i = 1; i < str.length; i++) {
//     let curr = lookTable(str[i]);
//     if (pre_val >= curr) {
//       pre_val = pre_val + curr;
//     } else {
//       pre_val = pre_val + curr - 2 * pre_val;
//     }
//   }
//   return pre_val;
// }

// function lookTable(ch) {
//   switch (ch) {
//     case "I":
//       return 1;
//     case "V":
//       return 5;
//     case "X":
//       return 10;
//     case "L":
//       return 50;
//     case "C":
//       return 100;
//     case "D":
//       return 500;
//     case "M":
//       return 1000;
//     default:
//       return -1;
//   }
// }

// console.log(convertToRoman(26)); // XXVI
// function convertToRoman(num) {
//   const table = {
//     M: 1000,
//     DM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     LC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1,
//   };
//   if (num > 0) {
//     let str = "";
//     for (let itm of Object.keys(table)) {
//       let q = parseInt(num / table[itm]);
//       num = num - q * table[itm];
//       str = str + "" + itm.repeat(q);
//     }
//     return str;
//   }
// }

//--------------- ZigZag String -----------------
// console.log(convert("PAYPALISHIRING", 3)); //PAHNAPLSIIGYIR //"PAHNAPLSIIGYIR"
// console.log(convert("PAYPALISHIRING", 4)); //PINALSIGYAHRPI //"PINALSIGYAHRPI"
// function convert(str, rows) {
//   if (str.length < rows || rows < 2) return str;
//   else {
//     let curr_row = 1;
//     let direction = 1;
//     let arr = new Array(rows).fill("");
//     for (let i = 0; i < str.length; i++) {
//       if (curr_row === rows) {
//         direction = -1;
//       }
//       if (curr_row === 1) {
//         direction = 1;
//       }
//       arr[curr_row - 1] = arr[curr_row - 1] + str[i];
//       curr_row = curr_row + direction;
//     }
//     let s = "";
//     arr.forEach((element) => {
//       s = s + "" + element;
//     });
//     return s;
//   }
// }

//------------- Quick Sort ----------------
// quick_sort([-1, -9, -8, -6, 80, 7, 3, 1, 2, 78]);

// function quick_sort(arr) {
//   if (arr.length === 0 || arr.length === 1) return arr;
//   else {
//     let start = 0;
//     let end = arr.length - 1;
//     quick_sort_uTil(arr, start, end);
//     console.log(arr);
//   }
// }
// function quick_sort_uTil(arr, start, end) {
//   if (start < end) {
//     let pivot_index = partiton(arr, start, end);
//     quick_sort_uTil(arr, start, pivot_index - 1);
//     quick_sort_uTil(arr, pivot_index + 1, end);
//   }
// }
// function partiton(arr, start, end) {
//   let pivot_element = arr[end];
//   let i = start;
//   let j = i - 1;
//   for (; i < end; i++) {
//     if (arr[i] < pivot_element) {
//       j++;
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
//   arr[end] = arr[j + 1];
//   arr[j + 1] = pivot_element;
//   return j + 1;
// }

//---------------- Longest palindromic substring from string --------------
// longestPalindrome("zabgeeksfofskeegxai");
// function longestPalindrome(str) {
//   if (str.length === 0 || str.length === 1) {
//     console.log(str);
//     return;
//   } else {
//     let longest = "";
//     for (let i = 0; i < str.length - 1; i++) {
//       checkAndExpand(i, i);
//       checkAndExpand(i, i + 1);
//     }
//     function checkAndExpand(start, end) {
//       while (start >= 0 && end < str.length && str[start] === str[end]) {
//         if (end - start + 1 > longest.length) {
//           longest = str.slice(start, end + 1);
//         }
//         start--;
//         end++;
//       }
//     }
//     console.log(longest);
//   }
// }

//------------Count All palindromic substring of given string------
// Dynamic programing approach....
// var str = "abccbc";
// console.log(countAllPalindromicSubstringsOfString(str)); //9
// function countAllPalindromicSubstringsOfString(str) {
//   let len = str.length;
//   let count = 0;
//   let dy = new Array(len);
//   for (let i = 0; i < len; i++) {
//     dy[i] = new Array(len).fill(false);
//   }
//   for (let gap = 0; gap < len; gap++) {
//     for (let i = 0, j = gap; j < len; j++, i++) {
//       if (gap === 0) {
//         dy[i][j] = true;
//         count++;
//       } else if (gap === 1) {
//         if (str[i] === str[j]) {
//           dy[i][j] = true;
//           count++;
//         }
//       } else {
//         if (str[i] === str[j] && dy[i + 1][j - 1] === true) {
//           dy[i][j] = true;
//           count++;
//         }
//       }
//     }
//   }
//   return count;
// }

//----------- lengthLongestSubstringWithoutRepeatingTheChar --------------------
// lengthLongestSubstringWithoutRepeatingTheChar("pwwkew"); //kew //3
// lengthLongestSubstringWithoutRepeatingTheChar("acdcdfdgqwefrtw"); //dgqwefrt //8
// function lengthLongestSubstringWithoutRepeatingTheChar(str) {
//   let cmp = new Array(256).fill(-1);
//   let maxLen = 0;
//   let start = -1;
//   for (let i = 0; i < str.length; i++) {
//     let currCh = str[i];
//     let currIndex = str.charCodeAt(i) - "a".charCodeAt(0);
//     if (cmp[currIndex] > start) {
//       start = cmp[currIndex];
//     }
//     cmp[currIndex] = i;
//     maxLen = Math.max(maxLen, i - start);
//   }
//   console.log(maxLen);
// }

