/***************** Start: LRU Cache Implementation *******************/

// function LRUCache(arr, framesize){
//     let frame=[]; let len=arr.length;
//     frame.unshift(arr[0])
//     for(let i=1 ; i<len ; i++){
//         if(frame.length>=1 && frame.length<framesize){
//             frame.unshift(arr[i])
//         }else if(frame.length===framesize){
//             if(!frame.includes(arr[i])){
//                 frame.unshift(arr[i]);
//                 frame.pop();
//             }else{
//                 let index = frame.indexOf(arr[i]);
//                 let temp = frame.splice(index,1);
//                 frame.unshift(temp);
//             }
//         }
//     }
//     console.log(frame);
// }

// let arr = [1,2,3,4,1,2,5,1,2,3,4,5]
// LRUCache(arr, 3);

// let arr2 = [1,2,3,1,4,5]
// LRUCache(arr2, 4);

/***************** End: LRU Cache Implementation *******************/

/*************** Start: Implement TwoStacks Data Structure in an array *******/

// function TwoStacks(num) {
//   let tempStack = [];
//   let start1 = 0;
//   let end1 = Math.floor(num / 2);
//   let start2 = Math.floor(num / 2) + 1;
//   let end2 = num - 1;
//   let size1 = 0;
//   let size2 = 0;
//   this.push1 = function (val) {
//     if ((size1 < end1 || size2 < end2 - start2 + 1) && size1 + size2 < num) {
//       tempStack.unshift(val);
//       size1++;
//     }
//   };
//   this.pop1 = function () {
//     if (size1 === 0) return null;
//     else {
//       size1--;
//       return tempStack.shift();
//     }
//   };
//   this.push2 = function (val) {
//     if ((size2 < end2 - start2 + 1 || size1 < end1) && size1 + size2 < num) {
//       tempStack.push(val);
//       size2++;
//     }
//   };
//   this.pop2 = function () {
//     if (size2 === 0) return null;
//     else {
//       size2--;
//       return tempStack.pop();
//     }
//   };
//   this.get = function () {
//     return tempStack;
//   };
// }

// let ts = new TwoStacks(7);
// ts.push1(2);
// ts.push1(3);
// ts.push2(5);
// ts.push2(4);
// ts.push2(6);
// ts.push2(8);
// ts.push2(15);
// ts.push2(35); // wont push last two because size is full i.e, it is 7 total;
// ts.push1(45); // wont push last two because size is full i.e, it is 7 total;
// console.log(ts.get());
// ts.pop2();
// ts.push2(65); // now push beacuse we pop one item;
// console.log(ts.get());
// ts.pop1();
// ts.pop1();
// console.log(ts.get());
// ts.pop1();
// console.log(ts.get());

/*************** End: Implement TwoStacks Data Structure in an array *******/

/*********** Start: implementation of custom stack with  *************
 * 1. Add item
 * 2. remove item
 * 3. isEmpty
 * 4. get front
 * 5. size
 * 6. clear
 * 7. get min
 * 8. get max
 * do all in O(1) time complexity....
 ****************************************************/

// function MyStack() {
//   let arr = [];
//   let min_arr = [];
//   let max_arr = [];
//   this.AddItem = function (val) {
//     arr.push(val);
//     if (min_arr.length === 0) {
//       min_arr.push(val);
//     } else if (val <= min_arr[min_arr.length - 1]) {
//       min_arr.push(val);
//     } else if (val > min_arr[min_arr.length - 1]) {
//       min_arr.push(min_arr[min_arr.length - 1]);
//     }
//     // for max
//     if (max_arr.length === 0) {
//       max_arr.push(val);
//     } else if (val <= max_arr[max_arr.length - 1]) {
//       max_arr.push(max_arr[max_arr.length - 1]);
//     } else if (val > max_arr[max_arr.length - 1]) {
//       max_arr.push(val);
//     }
//   };
//   this.removeItem = function () {
//     let curr = arr.pop();
//     min_arr.pop();
//     max_arr.pop();
//     return curr;
//   };
//   this.getMin = function () {
//     return min_arr[min_arr.length - 1];
//   };
//   this.getMax = function () {
//     return max_arr[max_arr.length - 1];
//   };
//   this.getTop = function () {
//     if (arr.length > 0) return arr[arr.length - 1];
//     else return null;
//   };
// }
// let ms = new MyStack();
// ms.AddItem(18);
// ms.AddItem(19);
// ms.AddItem(29);
// ms.AddItem(15);
// ms.AddItem(16);
// ms.AddItem(34);
// console.log("top-", ms.getTop());
// console.log("max-", ms.getMax());
// console.log("min-", ms.getMin());
// console.log("removed-", ms.removeItem());
// console.log("--------");
// console.log("top-", ms.getTop());
// console.log("max-", ms.getMax());
// console.log("min-", ms.getMin());

/*********** End: implementation of custom stack with  *******
 * do all in O(1) time complexity....
 ****************************************************/

/************ Start :Prefix evaluation ***********/

// const isDigit = (num) =>
//   (typeof num === "number" || (typeof num === "string" && num.trim() !== "")) &&
//   !isNaN(num);

// function isVariable(ch) {
//   if (ch === "+" || ch === "-" || ch === "*" || ch === "/") return false;
//   else {
//     if (
//       ch.includes("+") ||
//       ch.includes("-") ||
//       ch.includes("*") ||
//       ch.includes("/")
//     )
//       return false;
//     else return true;
//   }
// }

// function checkValidExp(itm1, itm2) {
//   if (
//     (isDigit(itm1) || isVariable(itm1)) &&
//     (isDigit(itm2) || isVariable(itm2))
//   )
//     return true;
//   else return false;
// }
// function result_expression(expression, variables) {
//   //Enter your code here
//   let arr = expression.split(" ");
//   let exp_arr = [];
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] !== "") exp_arr.push(arr[j]);
//   }
//   exp_arr.reverse();
//   console.log(exp_arr);
//   if (!checkValidExp(exp_arr[0], exp_arr[1])) return null;
//   let stack = [];
//   for (let i = 0; i < exp_arr.length; i++) {
//     if (isDigit(exp_arr[i])) {
//       console.log(exp_arr[i]);
//       stack.push(parseInt(exp_arr[i]));
//     } else if (isVariable(exp_arr[i])) {
//       console.log(exp_arr[i]);
//       let key = exp_arr[i];
//       let val = variables[key];
//       stack.push(val);
//     } else {
//       let item1 = stack.pop();
//       let item2 = stack.pop();
//       console.log(exp_arr[i]);
//       if (exp_arr[i] == "+") stack.push(item1 + item2);
//       else if (exp_arr[i] == "-") stack.push(item1 - item2);
//       else if (exp_arr[i] == "*") stack.push(item1 * item2);
//       else if (exp_arr[i] == "/") stack.push(Math.floor(item1 / item2));
//       else return null;
//     }
//   }
//   return stack[stack.length - 1];
// }

// console.log(result_expression("-+1 5 3", {}));

// console.log(result_expression("- + 1 5 3", {}));

// console.log(result_expression("- + * x 1 5 3", {x:20}));

/************ End :Prefix evaluation ***********/

/************ Start : Largest Area formed by Histogram ***********/

// largestArea([4, 2, 1, 5, 6, 3, 2, 4, 2]); //12
// largestArea([2,4,1,5,6]); //10
// function largestArea(arr) {
//     let size = arr.length;
//     let preSmallerElementIndex = calCPre(arr);
//     //console.log(preSmallerElementIndex);
//     let nextSmallerElementIndex = calCNext(arr);
//     //console.log(nextSmallerElementIndex);
//     let largest_area = 0;
//     for (let i = 0; i < size; i++) {
//         let area = arr[i] * (nextSmallerElementIndex[i] - preSmallerElementIndex[i] - 1);
//         largest_area = largest_area < area ? area : largest_area;
//     }
//     console.log(largest_area);

// }

// function calCPre(arr) {
//     let len = arr.length;
//     let index_Px = [];
//     let stack = [];
//     for (let i = 0; i < len; i++) {
//         while (stack.length !== 0 && arr[i] <= arr[stack[stack.length - 1]]) {
//             stack.pop();
//         }
//         if (stack.length !== 0 && arr[i] > arr[stack[stack.length - 1]]) {
//             let topEle = stack[stack.length - 1];
//             index_Px.push(topEle);
//             stack.push(i)
//         }

//         if (stack.length === 0) {
//             index_Px.push(-1);
//             stack.push(i);
//         }
//     }
//     return index_Px
// }

// function calCNext(arr) {
//     let len = arr.length;
//     let index_Nx = Array(len).fill();
//     let stack = [];
//     for (let i = len - 1; i > -1; i--) {
//         while (stack.length !== 0 && arr[i] <= arr[stack[stack.length - 1]]) {
//             stack.pop();
//         }
//         if (stack.length !== 0 && arr[i] > arr[stack[stack.length - 1]]) {
//             let topEle = stack[stack.length - 1];
//             index_Nx[i] = topEle;
//             stack.push(i)
//         }

//         if (stack.length === 0) {
//             index_Nx[i] = len;
//             stack.push(i);
//         }
//     }
//     return index_Nx
// }

/************ End : Largest Area formed by Histogram ***********/
