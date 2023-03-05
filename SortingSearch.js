//let mainArr = [1, 8, 0, 2, 3, 13, 10, 9, 4, 5];

/**
 * Check details description in Geeks for Geeks
 */

/* Selection Sort - select min and placed first....
 * Select min in an arr from index 0 to length-1 and placed
 * min in beginnig and iterarte same arr from index 1 to length-1 and placed min in 2nd
 * position and goes on
 */

// let i = 0;
// while(i < mainArr.length){
//   for(let j=i;j<mainArr.length;j++){
//       if(mainArr[i] > mainArr[j]){
//           let temp = mainArr[j];
//           mainArr[j] = mainArr[i];
//           mainArr[i] = temp;
//       }
//   }
//   i++;
// }

/*********************************************************************/

/* Bubble Sort - Swapping the element to put max value element at the end in each
   pass till the whole array will sort.
*/

// let pass = 0;
// while(pass < mainArr.length) {
//     console.log("pass - "+pass+" ->"+mainArr);
//     for(let i=0 ; i < mainArr.length ; i++){
//       if(mainArr[i] > mainArr[i+1]){
//          let temp = mainArr[i];
//          mainArr[i] = mainArr[i+1];
//          mainArr[i+1] = temp
//       }
//     }
//     pass++;
// }

/************************************************************************/

/****************** Recussive Bubble Sort *********************/

// let len = mainArr.length
// function recurBubbleSort(len){
//     if(len===0) return;
//     else{
//         for(let i=0 ; i<len ; i++){
//             if(mainArr[i] > mainArr[i+1]){
//                 let temp = mainArr[i]
//                 mainArr[i] = mainArr[i+1]
//                 mainArr[i+1] = temp
//             }
//         }
//         len--;
//         recurBubbleSort(len)
//     }
// }

// recurBubbleSort(len)

/************** Insertion Sort - place element to its right place **************/

// function insertionSort(arr, len) {
//     let i, j, key;
//     for (i = 1; i < len; i++) {
//         key = arr[i];
//         j = i - 1;
//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j];
//             j = j - 1;
//         }
//         arr[j + 1] = key;
//     }
// }

// insertionSort(mainArr, mainArr.length)

/************************ Recusive Insertion Sort ******************/

// recurInserSort(mainArr, 1)

// function recurInserSort(arr, size) {
//     if (size === arr.length)
//         return;
//     else {
//         let i = size;
//         let j = i - 1;
//         let key = arr[i];
//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j];
//             j = j - 1;
//         }
//         arr[j + 1] = key;
//         recurInserSort(arr, size + 1)
//     }
// }
//console.log("Arr..", mainArr);

/***************** Merger Sort **********************/

// function mergesort(arr, l, r) {
//   if (l >= r) return;
//   let m = parseInt((r + l) / 2);
//   mergesort(arr, l, m);
//   mergesort(arr, m + 1, r);
//   merge(arr, l, m, r);
//   console.log(arr);
// }

// function merge(arr, l, m, r) {
//   let cmp1 = arr.slice(l, m + 1);
//   let cmp2 = arr.slice(m + 1, r + 1);
//   console.log(cmp1);
//   console.log(cmp2);
//   //let temp = new Array(cmp1.length+cmp2.length);
//   let i = 0;
//   let j = 0;
//   let k = l;
//   while (i < cmp1.length && j < cmp2.length) {
//     if (cmp1[i] <= cmp2[j]) {
//       //temp.push(cmp1[i]);
//       arr[k] = cmp1[i];
//       i++;
//     } else {
//       //temp.push(cmp2[j]);
//       arr[k] = cmp2[j];
//       j++;
//     }
//     k++;
//   }

//   while (i < cmp1.length) {
//     //temp.push(cmp1[i]);
//     arr[k] = cmp1[i];
//     k++;
//     i++;
//   }
//   while (j < cmp2.length) {
//     //temp.push(cmp2[j]);
//     arr[k] = cmp2[j];
//     k++;
//     j++;
//   }
// }

// mergesort([80, 10, 30, 90, 40, 35, 45, 9], 0, 7);

/************** Quick Sort ****************/

// function quickSort(arr) {
//   let low = 0;
//   let high = arr.length - 1;
//   handleQuickSort(arr, low, high);
//   console.log(arr);
// }

// function handleQuickSort(arr, start, end) {
//   if (start < end) {
//     let pi_index = partition(arr, start, end);
//     handleQuickSort(arr, start, pi_index - 1);
//     handleQuickSort(arr, pi_index + 1, end);
//   }
// }

// function partition(arr, start, end) {
//   let pivot = arr[end];
//   let i = start;
//   let j = start - 1;
//   while (i < end) {
//     if (arr[i] < pivot) {
//       j++;
//       let temp = arr[j];
//       arr[j] = arr[i];
//       arr[i] = temp;
//     }
//     i++;
//   }
//   arr[end] = arr[j + 1];
//   arr[j + 1] = pivot;
//   return j + 1;
// }

// quickSort([500, 5, 101, 3, 2, 4, -7, 12, -1, 100]);

/*************** Binary Search  ***************/

// function binarySearch(arr, search, start, end) {
//    if (start > end) return "not found !!!";
//    let mid = Math.floor((start + end) / 2);
//    if (arr[mid] === search) return `found at index ${mid} !!!`;
//    else if (arr[mid] < search) return binarySearch(arr, search, mid + 1, end);
//    else if (arr[mid] > search) return binarySearch(arr, search, start, mid - 1);
//    else return `not found !!!`;
//  }

//  console.log(binarySearch([67, 80, 99, 100, 102, 103, 104, 204, 304], 80, 0, 8));
