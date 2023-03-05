/**************** Start: Reverse words in a given string *******************/

// var str = "Mohit is a good boy"
// function reverStrWordByWord(str){
//     let arr = str.split(" ");
//     let result = [];
//     function wordReverse(st, isFirst){
//       let arr1 = [];
//       for(let i = st.length-1 ; i>-1 ; i--){
//         if(isFirst) {
//             arr1.push(st[i].toUpperCase())
//             isFirst = false;
//         }
//         else arr1.push(st[i])
//       }
//       return arr1.join("")
//     }
//     for(let i=0 ; i<arr.length ;i++){
//         result.push(wordReverse(arr[i], i===0 ? true: false))
//     }
//     return result.join(" ")
// }

// console.log(reverStrWordByWord(str.toLowerCase()));

// /*efficient solution is*/

// String.prototype.reverse = function(){
//     return this.split('').reverse().join('')
// }

// function reverseWordbyWord(str){
//     return str.split(' ').map(st=>st.reverse()).join(" ")
// }

// console.log(reverseWordbyWord(str.toLowerCase()));

// /** One liner solution */

// var fname = "mohit sharma is a bad boy"
// var rev = fname.split(" ");
// var newFname = rev.map((item)=>{
//     return item.split('').reverse().join('')
// }).join(" ")
// console.log(newFname);

/**************** End: Reverse words in a given string *******************/

/***************** Start: Fibonacci series ************/

// function printFibonacciSeries(num) {
//   // it will print outcome of each iteration of fibonacci series.
//   let n1 = 0,
//     n2 = 1,
//     nextTerm;

//   for (let i = 1; i <= num + 1; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
//   }
// }

// printFibonacciSeries(7);

// function recursiveFibCal(num) {
// // it will print addition of fibonacci series.
// if (num === 0) {
//   return 0;
// } else if (num == 1 || num == 2) {
//   return 1;
// }
//   return recursiveFibCal(num - 1) + recursiveFibCal(num - 2);
// }

// recursiveFibCal(7);

/******************* End: Fibonacci series ************/

/**************** Start: Permutation of given string *******************/

// var s = "ABC";

// var permutationOfString = function (arrStr, start, end) {
//   if (start === end - 1) {
//     console.log(arrStr.join(""));
//   } else {
//     for (let i = start; i < end; i++) {
//       arrStr = swapping(arrStr, start, i);
//       permutationOfString(arrStr, start + 1, end);
//       arrStr = swapping(arrStr, start, i);
//     }
//   }
// };

// var swapping = function (arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   return arr;
// };

// permutationOfString(s.split(''),0, s.length);

/**************** End: Permutation of given string *******************/

/************* Start: Is Permutation of first string present in second string  ***************/

// var checkInclusion = function(s1, s2) {
//   if(s1.length > s2.length) return false;
//   let a1 = new Array(26).fill(0);
//   let a2 = new Array(26).fill(0);
//   for(let i=0 ; i<s1.length ; i++){
//       a1[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++
//       a2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++
//   }
//   for(let i=0 ; i<=s2.length-s1.length ; i++){
//       if(checkMatches(a1, a2)) return true;
//       a2[s2.charCodeAt(i+s1.length) - 'a'.charCodeAt(0)]++;
//       a2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
//   }
//   return false
// };

// function checkMatches(a1, a2){
//   for(let i=0 ; i<26 ; i++){
//       if(a1[i] !== a2[i]) return false;
//   }
//   return true;
// }

//console.log(checkInclusion('adc', 'dcda'));

/************* End: Is Permutation of first string present in second string  ***************/

/************* Start: Remove duplicates from given string  ***************/

// var str = 'qwertyfghjkmnbvwerzx'

// function removeDuplicates(str){
//   let strSet = new Set()
//   for(let i=0 ; i<str.length ;i++){
//     strSet.add(str[i]);
//   }
//   let s = Array.from(strSet)
//   return s.join('')
// }
// console.log(removeDuplicates(str));

/************* End: Remove duplicates from given string  ***************/

/************* Start: longestCommonPrefix  ***************/

// var longestCommonPrefix = function(strs) {
//   if(strs.length > 1){
//       let longestCommonPrefixStr = strs[0];
//       for(let i=1 ; i<strs.length ;i++){
//           if(longestCommonPrefixStr !== '')
//           longestCommonPrefixStr = pickingLongestCommonPrefixStr(longestCommonPrefixStr, strs[i])
//           else break;
//       }
//       return longestCommonPrefixStr
//   }
//   return strs[0]
// };

// var pickingLongestCommonPrefixStr = function(commStr, cmpStr){
//   let common=[]
//   if(commStr===cmpStr) return commStr;
//   else{
//       let k = 0
//       let match = false;
//       for(let i=0 ; i<commStr.length ; i++){
//           for(let j=k ; j<cmpStr.length ;){
//               if(commStr[i] === cmpStr[j]){
//                   common.push(commStr[i]);
//                   k = j+1;
//                   match = true;
//                   break;
//               } else if(match===true) {
//                 return common.join('');
//               }else j++
//           }
//       }
//   }
//   return common.join('')
// }

// console.log(longestCommonPrefix(["cir","car"])) //c
// console.log(longestCommonPrefix(["flower","flow","flight"])) //fl

//----another way to solve-------
// function longestCommonPrefix(arr) {
//     if (arr.length === 0) return "";
//     else if (arr.length === 1) return arr[0];
//     else {
//       let prefix = arr[0];
//       for (let i = 1; i < arr.length && prefix !== ""; i++) {
//         let str = arr[i];
//         let last = prefix.length < str.length ? prefix.length : str.length;
//         let cmn = [];
//         for (let j = 0; j < last; j++) {
//           if (prefix[j] === str[j]) {
//             cmn.push(prefix[j]);
//             continue;
//           } else {
//             break;
//           }
//         }
//         prefix = cmn.join("");
//       }
//       return prefix;
//     }
//   }

/************* End: longestCommonPrefix  ***************/

/************* Start: HCF and LCM of array of numbers ****************/

// var hcfArrayNumber = (arr) => {
//   if(arr.length > 1){
//     let hcf = calHcf(arr[0], arr[1]);
//     for(let i=2 ; i<arr.length ; i++){
//       hcf = calHcf(hcf, arr[2]);
//     }
//     return hcf;
//   }
//   return arr[0];
// }

// var calHcf = (num1, num2) => {
//   let hcf=1;
//   for(let i=2 ; i<=num1 && i<=num2 ; i++){
//     if(num1%i === 0 && num2%i === 0){
//       hcf = i;
//     }
//   }
//   return hcf;
// }

// var lcmArrayNumber = (arr) =>{
//   if(arr.length > 1){
//     let lcm = arr[0];
//     arr.forEach(element => {
//       lcm = (lcm * element)/calHcf(lcm, element) // using HCF or GCD
//     });
//     return lcm;
//   }
//   return arr[0];
// }

// console.log(hcfArrayNumber([3,15,27]));
// console.log(hcfArrayNumber([5,10,15,25]));

// console.log(lcmArrayNumber([3,15,27]));
// console.log(lcmArrayNumber([5,10,15,25]));

/************* End: HCF and LCM of array of numbers ****************/

/*************** Start: Repeat missing array ****************/
// function repeatAndMissing(arr, n) {
//   let repeat = 0;
//   for (let i = 0; i < n; i++) {
//     let absVal = Math.abs(arr[i]);
//     if (arr[absVal - 1] > 0) {
//       arr[absVal - 1] = -arr[absVal - 1];
//     } else {
//       repeat = absVal;
//     }
//   }
//   let missing = 0;
//   for (let i = 0; i < n; i++) {
//     if (arr[i] > 0) {
//       missing = arr[i] + 1;
//       break;
//     }
//   }

//   console.log(repeat, missing);
// }

// repeatAndMissing([3, 1, 3], 3);

/*************** End: Repeat missing array ****************/

/*************** Start: Merge two sorted Arrays without extra space  ****************/

// function mergeTwoSortedArray(arr1, arr2) {
//   let i = arr2.length - 1;
//   while (i >= 0) {
//     let item = arr2[i];
//     let el = false;
//     for (let j = 0; j < arr1.length; j++) {
//       if (arr1[j] > item) {
//         el = true;
//         break;
//       }
//     }
//     arr2[i] = arr1[arr1.length - 1];
//     arr1[arr1.length - 1] = item;
//     insertItemRightPlace(arr1);
//     i--;
//   }
//   console.log("arr1", arr1);
//   console.log("arr2", arr2);
// }

// function insertItemRightPlace(arr) {
//   //insertion sort
//   for (let i = 1; i < arr.length; i++) {
//     let j = i - 1;
//     let key = arr[i];
//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = key;
//   }
// }

// mergeTwoSortedArray([12], [2, 3]);

// mergeTwoSortedArray([1, 5, 9, 10, 15, 20], [2, 3, 8, 13]);

//----Another way-----
// function mergeTwoSortedArray(a1, a2){
//    let i=0; let isInsert = false;
//    for(;i<a2.length;i++){
//      isInsert = false;
//       for(let j=a1.length-1;j>=0;j--){
//        if(a1[j]<a2[i]){
//          let t1 = a1.splice(0, j+1);
//          t1.push(a2[i]);
//          a1 = [...t1, ...a1]
//          isInsert = true;
//          break;
//        }
//      }
//      if(isInsert === false) a1.unshift(a2[i]);
//    }
//    console.log(a1)
//  }

/*************** End: Merge two sorted Arrays without extra space  ****************/

/************** Start: Kadane Algo *********************/
// kadaneAlgo([-2, -3, 4, -1, -2, 1, 5, -3]);

// function kadaneAlgo(arr) {
//   let curr = 0;
//   let maxSumTillNow = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     curr = curr + arr[i];
//     maxSumTillNow = Math.max(curr, maxSumTillNow);
//     if (curr <= 0) {
//       curr = 0;
//     }
//   }
//   console.log(maxSumTillNow);
// }

/************** End: Kadane Algo *********************/

/************* Start: Reverse Array in group **************/
// function reverseArrayInGroup(arr, size, k) {
//   let temp = [];
//   let low = 0;
//   let high = size > k ? k : size;
//   callRecurssive(arr, low, high, size, k, temp);
//   console.log(temp);
// }

// function callRecurssive(arr, low, high, size, k, temp) {
//   if (low < high) {
//     for (let i = high - 1; i >= low; i--) {
//       temp.push(arr[i]);
//     }
//     low = high;
//     high = size - low > k ? k + low : size;
//     callRecurssive(arr, low, high, size, k, temp);
//   }
// }

// reverseArrayInGroup([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 13, 4);

//-------another way---------

// function reverseArrayInGroup(arr, size, k) {
//     if (size > 1) {
//       let i = 0;
//       while (i < size) {
//         if (i + k > size) {
//           reverseArray(arr, i, size);
//         } else {
//           reverseArray(arr, i, i + k);
//         }
//         i = i + k > size ? size : i + k;
//       }
//       console.log(arr);
//     } else console.log(arr);
//   }

//   function reverseArray(arr, start, end) {
//     while (start < end) {
//       let temp = arr[start];
//       arr[start] = arr[end - 1];
//       arr[end - 1] = temp;
//       start++;
//       end--;
//     }
//   }

//------Another way ----------

// function reverseArrayInGroup(arr, len, grpSize) {
//    let temp = [];
//    for (let i = 0; i < len;) {
//       let a = len - i > grpSize ? grpSize : len - i;
//       let t = arr.slice(i, i + a);
//       temp = [...temp, ...t.reverse()];
//       i = i + a;
//    }
//    console.log(temp)
// }

/************* End: Reverse Array in group **************/

/*********** Start: All negative number in one side ***********/

// let arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6, 234, 23, -9];

// function oneSideNegative(arr) {
//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       if (i != j) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//       j++;
//     }
//   }
//   return arr;
// }
// console.log(oneSideNegative(arr));

// second approach written by me....

// function fn(arr, n) {
//   let i = 0,
//     j = n - 1;
//   while (i < n && j >= 0 && i < j) {
//     if (arr[i] < 0) i++;
//     else {
//       if (arr[j] > 0) j--;
//       else {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++;
//         j--;
//       }
//     }
//   }
//   console.log(arr);
// }

// fn([-12, 11, -13, -5, 6, -7, 5, -3, -6, 234, 23, -9], 12);

/*********** End: All negative number in one side ***********/

/************ Start: 0's 1's and 2's array arrangement ***********/

// function zeroOnesTwosArray(arr, n) {
//   let mid = 0,
//     low = 0,
//     high = n - 1;
//   while (mid <= high) {
//     if (arr[mid] === 1) mid++;
//     else if (arr[mid] === 0) {
//       let temp = arr[mid];
//       arr[mid] = arr[low];
//       arr[low] = temp;
//       low++;
//       mid++;
//     } else {
//       let temp = arr[mid];
//       arr[mid] = arr[high];
//       arr[high] = temp;
//       high--;
//     }
//   }
//   console.log(arr);
// }

// zeroOnesTwosArray([1, 1, 2, 0, 0, 0, 1, 2, 2, 1, 0, 0], 12);
// zeroOnesTwosArray([0, 1, 2, 1, 1, 2, 0, 0, 2, 1], 10);

/************ End: 0's 1's and 2's array arrangement ***********/

/********* Start: Buy and Sell stocks(Type I (one time buy and one time sell)) *******/
// var maxProfit = function (prices) {
//   let sell_day = 0;
//   let buy_day = 0;
//   let profit = 0;
//   let prev = prices[0];
//   let len = prices.length;
//   for (let i = 1; i < len; i++) {
//     if (prices[i] > prev) {
//       let diff = prices[i] - prev;
//       if (diff > profit) {
//         profit = diff;
//         sell_day = i + 1;
//       }
//     } else {
//       prev = prices[i];
//       buy_day = i + 1;
//     }
//   }
//   console.log(profit);
//   //return profit;
// };

// maxProfit([7, 1, 5, 3, 6, 4]); //5
/********* End: Buy and Sell stocks(Type I (one time buy and one time sell)) *******/

/********* Start: Buy and Sell stocks(Type II)(multitime buy and sell) ***************/
// var maxProfit = function (arr) {
//   let profit = 0;
//   let net_profit = 0;
//   let prev = arr[0];
//   let i = 1;
//   while (i < arr.length) {
//     if (arr[i] < prev || arr[i] - prev < profit) {
//       prev = arr[i];
//       net_profit = net_profit + profit;
//       profit = 0;
//       i++;
//     } else {
//       //profit = arr[i] - prev;
//       profit = Math.max(arr[i] - prev, profit);
//       i++;
//     }
//   }
//   net_profit = net_profit + profit;
//   return net_profit;
// };

// console.log(maxProfit([7, 1, 5, 3, 6, 4])); //7

/********* End: Buy and Sell stocks(Type II)(multitime buy and sell) ***************/

/************* Start: Largest number formed by array ******************/

// var largestNumber = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       let num1 = Number(nums[i] + "" + nums[j]);
//       let num2 = Number(nums[j] + "" + nums[i]);
//       if (num1 < num2) {
//         let temp = nums[i];
//         nums[i] = nums[j];
//         nums[j] = temp;
//       }
//     }
//     console.log(nums);
//   }
//   console.log(nums.join(""));
// };
// largestNumber([3, 30, 34, 5, 9]);

/************* End: Largest number formed by array ******************/

/************* Start: Next permutation *****************/

// var nextPermutation = function (arr) {
//   let temp_index = null;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] > arr[i - 1]) {
//       temp_index = i;
//       break;
//     }
//   }
//   //console.log(temp_index);
//   if (temp_index !== null) {
//     let prev = temp_index;
//     for (let j = temp_index + 1; j < arr.length; j++) {
//       if (arr[j] > arr[temp_index - 1] && arr[j] <= arr[prev]) {
//         prev = j;
//       }
//     }
//     let sw = arr[temp_index - 1];
//     arr[temp_index - 1] = arr[prev];
//     arr[prev] = sw;
//   }

//   let i = temp_index !== null ? temp_index : 0;
//   let j = arr.length - 1;
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }

//   console.log(arr);
// };

// nextPermutation([3, 2, 1]);
// nextPermutation([1, 2, 3]);
// nextPermutation([1, 1, 5]);
// nextPermutation([1, 3, 1]);
// nextPermutation([1, 3, 2]);
// nextPermutation([1, 5, 8, 4, 7, 6, 5, 3, 1]);

/************* End: Next permutation *****************/

/************ Start: Maximum Height Tree  ***************/
// function height(N) {
//     // code here...
//     let x = Math.sqrt(2 * N);
//     if (N < (x * (x + 1)) / 2) x--;
//     return Math.ceil(x);
//   }

//   console.log(height(10));

/************ End: Maximum Height Tree  ***************/

/************* Start : Tower Of Hanoi  ***********/
// var n = 4; // Number of disks
// towerOfHanoi(n, "A", "C", "B");

// function towerOfHanoi(disk, from, to, aux) {
//   if (disk === 1) {
//     console.log("Move disk " + disk + " from rod " + from + " to rod " + to);
//     return;
//   }
//   towerOfHanoi(disk - 1, from, aux, to);
//   console.log("Move disk " + disk + " from rod " + from + " to rod " + to);
//   towerOfHanoi(disk - 1, aux, to, from);
// }
/************* End : Tower Of Hanoi  ***********/

/************** Start: Array Arrangements ***********************
 * (A[i]<A[j]<A[k] && i<j<k)
 ****************************************************************/

// let n = 11;
// let a = [2, 1, 1, 1, 2, 1, 2, 1, 18, 9, 2];
// find3Numbers(a, n); // [1, 2, 18]
// let nn = 5;
// let aa = [1, 2, 1, 1, 3];
// find3Numbers(aa, nn); // [1, 2, 3]
// find3Numbers([1, 2, 2, 1, 1], 5); //[]
// function find3Numbers(a, n) {
//   if (n < 3) console.log([]);
//   else {
//     let i = 0;
//     let j = i + 1;
//     let k = j + 1;
//     let arr = [];
//     while (i < n) {
//       if (i < j && j < k && a[i] < a[j] && a[j] < a[k]) {
//         arr.push([a[i], a[j], a[k]]);
//         break;
//       } else {
//         if (a[i] > a[j]) {
//           j++;
//           k = j + 1;
//           continue;
//         } else if (a[j] > a[k]) {
//           k++;
//           continue;
//         } else {
//           i++;
//           j = i + 1;
//           k = j + 1;
//         }
//       }
//     }
//     console.log(arr);
//   }
// }

/************** End: Array Arrangements ***********************
 * (A[i]<A[j]<A[k] && i<j<k)
 ****************************************************************/

/************** Start: Array Rotation **********************
 * [1,2,3,4,5,6] --> [6,1,5,2,4,3]
 ***********************************************************/

// let arr = [1, 2, 3, 4, 5, 6];
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
//     arr[j + 1] = key;
//     i = i + 2;
//   }
//   console.log(arr);
// }

/************** End: Array Rotation **********************
 * [1,2,3,4,5,6] --> [6,1,5,2,4,3]
 ***********************************************************/

/******* Start: Matrix 90 degree rotattion **********/

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// function matrix_90_rotation(arr) {
//   let len = arr.length;
//   let temp = [];
//   for (let i = 0; i < len; i++) {
//     let curr = [];
//     for (let j = len - 1; j >= 0; j--) {
//       //console.log(arr[j][i] + " ");
//       //document.write(arr[j][i] + " ");
//       curr.push(arr[j][i]);
//     }
//     //document.write("<br/>");
//     temp.push(curr);
//     //console.log(`\n`);
//   }
//   console.log(temp);
// }

// matrix_90_rotation(arr);

/******* End: Matrix 90 degree rotattion **********/

/******* Start: All subsequence of string *********/

//______Method(Pick and Don’t Pick Concept)____________
// function printSubsequence(input, output, arr) {
//   if (input.length === 0) {
//     arr.push(output);
//     return;
//   } else {
//     printSubsequence(input.slice(1), output + input[0], arr);
//     printSubsequence(input.slice(1), output, arr);
//   }
// }

// function allSubsequenceOfString(input) {
//   var arr = [];
//   var output = "";
//   printSubsequence(input, output, arr);
//   console.log(arr);
// }
// allSubsequenceOfString("abcd");

/******* End: All subsequence of string *********/

/********** Start: Longest Consecutive sequence **********/

// function longestConsecutiveSubsequence(arr) {
//   let ans = 0;
//   let res = [];
//   let m_set = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     m_set.add(arr[i]);
//   }
//   for (let i = 0; i < arr.length; i++) {
//     let item = arr[i];
//     if (!m_set.has(item - 1)) {
//       let temp = item;
//       let temp_res = [];
//       while (m_set.has(temp)) {
//         temp_res.push(temp);
//         temp++;
//       }
//       if (temp - item > ans) {
//         ans = temp - item;
//         res = temp_res;
//       }
//     }
//   }
//   console.log(ans);
//   console.log(res);
// }
// longestConsecutiveSubsequence([1, 9, 3, 10, 4, 20, 2, 11, 12, 5]);
// //5 -> [1, 2, 3, 4, 5] (consecutive sequence 1,3,4,2,5 is present)
// longestConsecutiveSubsequence([36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42, 31]);
// //6 -> [31, 32, 33, 34, 35, 36]
// longestConsecutiveSubsequence([1, 9, 3, 11, 20, 2, 10, 12]);
// //4 -> [9, 10, 11, 12] (consecutive sequence 9,11,10,12 is present)

/********** End: Longest Consecutive sequence **********/

/*********** Start: Binary to Decimal and vice-versa ************/

// function decimalToBinary(num) {
//   console.log((num >>> 0).toString(2));
// }
// function binaryTodecimal(num) {
//   console.log(parseInt(num, 2).toString(10));
// }

// decimalToBinary(21);
// binaryTodecimal(10101);

/*********** End: Binary to Decimal and vice-versa ************/

/********** Start: Longest Palindrome in String ************/

// var longestPalindrome = function (str) {
//   // n*3 time complexity(two for loop and one for loop to check palindrome)
//   let len = 0;
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i; j < str.length; j++) {
//       let curr = str.slice(i, j + 1);
//       if (checkPalindrome(curr)) {
//         if (len < curr.length) {
//           len = curr.length;
//           result = curr;
//         }
//       }
//     }
//   }
//   console.log(result);
// };

// function checkPalindrome(str) {
//   let str2 = str.split("").reverse().join("");
//   if (str === str2) return true;
//   else return false;
// }

// longestPalindrome("zabgeeksfofskeegxai");

// //-------- Efficient way ----------

// longestPalindromeEfficient("zabgeeksfofskeegxai");
// function longestPalindromeEfficient(str) {
//   let longest = "";
//   for (let i = 0; i < str.length; i++) {
//     expandAndCheck(i, i);
//     expandAndCheck(i, i + 1);
//   }
//   function expandAndCheck(start, end) {
//     while (start >= 0 && end < str.length && str[start] === str[end]) {
//       let temp = str.slice(start, end + 1);
//       if (longest.length < temp.length) {
//         longest = temp;
//       }
//       start--;
//       end++;
//     }
//   }
//   console.log(longest);
// }

/********** End: Longest Palindrome in String ************/

/******** Start: Array into zig zag fashion  **************/

/**
 * N = 7
 * Arr[] = {4, 3, 7, 8, 6, 2, 1}
 * Output: 3 7 4 8 2 6 1
 * Explanation: 3 < 7 > 4 < 8 > 2 < 6 > 1
 */
// function zigZag(arr, n) {
//   //code here
//   for (let i = 0; i < n; i++) {
//     if (i % 2 === 0 && arr[i] > arr[i + 1]) {
//       // even index
//       // swap
//       let temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = temp;
//     }
//     if (i % 2 === 1 && arr[i] < arr[i + 1]) {
//       // odd index
//       let temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = temp;
//     }
//   }
//   return arr;
// }
// console.log(zigZag([4, 3, 7, 8, 6, 2, 1], 7));

/******** End: Array into zig zag fashion  **************/

/********* Start: Count All palindromic substring of given string ********/
// Dynamic programing approach....
// var str = "abccbc";
// function countAllPalindromicSubstringsOfString(str) {
//   let size = str.length;
//   let count = 0;
//   let dy_arr = new Array(size);
//   for (let x = 0; x < size; x++) {
//     dy_arr[x] = new Array(size).fill(false);
//   }
//   for (let gap = 0; gap < dy_arr.length; gap++) {
//     for (let i = 0, j = gap; j < dy_arr.length; i++, j++) {
//       if (gap === 0) {
//         dy_arr[i][j] = true;
//       } else if (gap === 1) {
//         if (str[i] === str[j]) {
//           dy_arr[i][j] = true;
//         } else {
//           dy_arr[i][j] = false;
//         }
//       } else {
//         if (str[i] === str[j] && dy_arr[i + 1][j - 1] === true) {
//           dy_arr[i][j] = true;
//         } else {
//           dy_arr[i][j] = false;
//         }
//       }
//       if (dy_arr[i][j]) count++;
//     }
//   }
//   console.log(dy_arr);
//   return count;
// }
// console.log(countAllPalindromicSubstringsOfString(str));//9

/********* End: Count All palindromic substring of given string ********/

/********* Start: length of longest palindromic subsequence given string ********/

// var str = "abkccbc"; // ans is bccb and length is 4
// function lengthOfLongestPalindromicSubsequence(str) {
//   // Dynamic Programing Approach
//   let size = str.length;
//   let dy = new Array(size);
//   for (let i = 0; i < size; i++) {
//     dy[i] = new Array(size).fill(0);
//   }

//   for (let gap = 0; gap < dy.length; gap++) {
//     for (let i = 0, j = gap; j < dy.length; i++, j++) {
//       if (gap === 0) {
//         dy[i][j] = 1;
//       } else if (gap === 1) {
//         if (str[i] === str[j]) {
//           dy[i][j] = 2;
//         } else {
//           dy[i][j] = 1;
//         }
//       } else {
//         if (str[i] === str[j]) {
//           dy[i][j] = 2 + dy[i + 1][j - 1];
//         } else {
//           dy[i][j] = Math.max(dy[i][j - 1], dy[i + 1][j]);
//         }
//       }
//     }
//   }
//   console.log(dy[0][size - 1]);
// }
// lengthOfLongestPalindromicSubsequence(str);

/********* End: length of longest palindromic subsequence given string ********/

/******** Start: min Num Of Insertion To Make Given String Palindrome **********/

// var str = "abbcabda";
// minNumOfInsertionToMakeGivenStringPalindrome(str);//3
// function minNumOfInsertionToMakeGivenStringPalindrome(str) {
//   // dynamic approach
//   // first find longest palindromic subsequence's length
//   // result = str.length - length of longest palindromic subsequence
//   let len = str.length;
//   let dy = new Array(len);
//   for (let x = 0; x < len; x++) {
//     dy[x] = new Array(len).fill(0);
//   }

//   for (let gap = 0; gap < len; gap++) {
//     for (let i = 0, j = gap; j < len; i++, j++) {
//       if (gap === 0) {
//         dy[i][j] = 1;
//       } else if (gap === 1) {
//         if (str[i] === str[j]) {
//           dy[i][j] = 2;
//         } else {
//           dy[i][j] = 1;
//         }
//       } else {
//         if (str[i] === str[j]) {
//           dy[i][j] = 2 + dy[i + 1][j - 1];
//         } else {
//           dy[i][j] = Math.max(dy[i + 1][j], dy[i][j - 1]);
//         }
//       }
//     }
//   }
//   console.log(len - dy[0][len - 1]);
// }

/******** End: min Num Of Insertion To Make Given String Palindrome **********/

/********** Start:
 * String to Integer (atoi)
 ******************************************************/

// var myAtoi = function (s) {
//   let new_s = s.trim();
//   console.log(new_s);
//   let k = 1;
//   let arr_s = [];
//   for (let i = 0; i < new_s.length; i++) {
//     if (new_s.charCodeAt(i) >= 48 && new_s.charCodeAt(i) <= 57) {
//       arr_s.push(new_s[i]);
//     } else {
//       if (
//         new_s[i] === "-" &&
//         new_s.charCodeAt(i + 1) >= 48 &&
//         new_s.charCodeAt(i + 1) <= 57
//       ) {
//         k = -1;
//         continue;
//       } else if (
//         new_s[i] === "+" &&
//         new_s.charCodeAt(i + 1) >= 48 &&
//         new_s.charCodeAt(i + 1) <= 57
//       ) {
//         k = 1;
//         continue;
//       } else break;
//     }
//   }
//   if (arr_s.length === 0) return 0;
//   else {
//     let num = Math.abs(Number(arr_s.join(""))) * k;
//     if (num > 2147483647) return 2147483647;
//     else if (num < -2147483648) return -2147483648;
//     else return num;
//   }
// };

// console.log(myAtoi("-42 word"));
// console.log(myAtoi("word 32"));
// console.log(myAtoi("-3455555555555555555"));
// console.log(myAtoi("9999999999999999"));
// console.log(myAtoi("4567 qwerty"));
// console.log(myAtoi("+-12"));
// console.log(myAtoi("-+12"));
// console.log(myAtoi("--12"));
// console.log(myAtoi("++12"));
// console.log(myAtoi("00012a"));

// other solution....
// var myAtoi = function (s) {
//   let inte = parseInt(s) || 0;
//   if (inte > 2 ** 31 - 1) return 2147483647;
//   if (inte < -(2 ** 31)) return -2147483648;
//   return inte;
// };

// console.log(myAtoi("-42 word"));
// console.log(myAtoi("word 32"));
// console.log(myAtoi("-3455555555555555555"));
// console.log(myAtoi("9999999999999999"));
// console.log(myAtoi("4567 qwerty"));
// console.log(myAtoi("+-12"));
// console.log(myAtoi("-+12"));
// console.log(myAtoi("--12"));
// console.log(myAtoi("++12"));
// console.log(myAtoi("00012a"));
// console.log(myAtoi("-12"));
// console.log(myAtoi("+12"));

/********** End:
 * String to Integer (atoi)
 ******************************************************/

/********** Start: Roman to Integer and Vice-versa ****************/

// function roman_to_Int(str) {
//   if (str === null || str === "") return -1;
//   let num = convert_to_int(str[0]);
//   let pre, curr;
//   for (let i = 1; i < str.length; i++) {
//     curr = convert_to_int(str[i]);
//     pre = convert_to_int(str[i - 1]);
//     if (curr <= pre) {
//       num = num + curr;
//     } else {
//       num = num - 2 * pre + curr;
//     }
//   }
//   return num;
// }

// function convert_to_int(s) {
//   switch (s) {
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

// console.log(roman_to_Int("XXVI"));
// console.log(roman_to_Int("CI"));
// console.log(roman_to_Int("VI"));
// console.log(roman_to_Int("IV"));
// console.log(roman_to_Int("MMLIV"));
// console.log(roman_to_Int("MMCVIII"));
// console.log(roman_to_Int("DCCCXXXV"));

// function convertToRoman(num) {
//   var roman = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1,
//   };
//   var str = "";

//   for (var i of Object.keys(roman)) {
//     var q = Math.floor(num / roman[i]);
//     num -= q * roman[i];
//     str += i.repeat(q);
//   }

//   return str;
// }

// console.log(convertToRoman(26));

/********** End: Roman to Integer and Vice-versa ****************/

/**************** Start: ZigZag String convert ***********************/

// var convert = function (str, numRows) {
//   if (str.length < numRows || numRows < 2) return str;
//   let row = 0;
//   let direction = -1;
//   let temp = new Array(numRows).fill("");
//   for (let i = 0; i < str.length; i++) {
//     if (row === 0 || row === numRows - 1) {
//       direction = direction * -1;
//     }
//     temp[row] = temp[row] + str[i];
//     row = row + direction;
//   }
//   let s = "";
//   temp.forEach((item) => {
//     s = s + item;
//   });
//   return s;
// };

// console.log(convert("PAYPALISHIRING", 3)); //PAHNAPLSIIGYIR //"PAHNAPLSIIGYIR"
// console.log(convert("PAYPALISHIRING", 4)); //PINALSIGYAHRPI //"PINALSIGYAHRPI"

// ---- Another way and easier to understand -------

// zigzag("PAYPALISHIRING", 3)//"PAHNAPLSIIGYIR"
// zigzag("PAYPALISHIRING", 4);//"PINALSIGYAHRPI"

// function zigzag(str, rowCount) {
//     let result = Array(rowCount).fill("");
//     let i = 0; let row = 0; let down = true
//     while (i < str.length) {
//         if (row < rowCount && down) {
//             result[row] = result[row] + str[i];
//             i++;
//             row++;
//         } else if(row === rowCount){
//             row = row - 2;
//             down = false; // going up
//         } else if (row > -1 && !down) {
//             result[row] = result[row] + str[i];
//             i++;
//             row--;
//         } else if (row === -1) {
//             row = row + 2;
//             down = true; // going down
//         }
//     }
//     console.log(result.join(""));
// }

/**************** End: ZigZag String convert ***********************/

/***************** Start: Min num platform req ************/
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
/***************** End: Min num platform req ************/

/************* Start: Pattern Valid Check  ***********/
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
/************* End: Pattern Valid Check  ***********/

/*********** Start: Merging intervals  ****************/
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
/*********** End: Merging intervals  ****************/

/********* Start: length of Longest Substring Without Repeating Char ********/

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

/********* End: length of Longest Substring Without Repeating Char ********/

// *********** Start : Count 1’s in a ascending sorted binary array(BA) **********
// This has another variant like - Count 1’s in a decending sorted binary array
/**
 * One more another variant like - return the row having max number of 1's in 2d BA
 * var arr = [
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 0, 0, 1, 1],
    [0, 0, 1, 1, 1]]
 */

// console.log(countOnes([0, 0, 0, 1, 1], 0, 4, null)); // 2
// console.log(countOnes([0, 0, 0, 0, 1], 0, 4, null)); // 1
// console.log(countOnes([1, 1, 1, 1, 1], 0, 4, null)); // 5
// console.log(countOnes([0, 1, 1, 1, 1], 0, 4, null)); // 4 
// console.log(countOnes([0, 0, 0, 0, 0], 0, 4, null)); // 0



// /**
//  * one way is to direct count using linear seach..
//  * 2nd way is use Binary Search as array is sorted..
//  */

// function countOnes(arr, start, end, firstOccIndex) {
//     if (start > end && firstOccIndex === null) {
//         return 0;
//     }
//     if (start > end && firstOccIndex !== null) {
//         return arr.length - firstOccIndex;
//     }
//     let mid = start+ Math.floor((end - start + 1) / 2);
//     if (arr[mid] === 0) {
//         return countOnes(arr, mid + 1, end, firstOccIndex)
//     } else if (arr[mid] === 1) {
//         firstOccIndex = mid;
//         return countOnes(arr, 0, mid - 1, firstOccIndex)
//     }
// }

// *********** End : Count 1’s in a ascending sorted binary array **********

//************ Start: Remove Duplicate from sorted Array *******************/
/**
 * One way to use "Set" for removing but for that we need o(n) space time complexity.
 * Efficient way to use "fast" and "slow" pointer
 */

removeDuplicate([2, 2, 2, 3, 3, 4, 4, 4, 4]) // output will be [2,3,4]

//************ End: Remove Duplicate from sorted Array *******************/
