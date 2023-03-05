/**
 * Problem 1 - Linked List Cycle
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * Practise Link - https://leetcode.com/problems/linked-list-cycle/
 */
// var hasCycle = function (head) {
//     let fast = head;
//     let slow = head;
//     let first = false;
//     while (fast !== null && fast.next !== null) {
//         first = true;
//         slow = slow.next;
//         fast = fast.next.next;
//         if (slow === fast) return true;
//     }
//     return false;
// };



/**
 * Problem 2 (VVI) - Given a linked list of 0s, 1s and 2s, sort it.
 * class Node{
        constructor(data){
            this.data = data;
            this.next = null;
        }
    }
 *
 * Practise link - https://practice.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it/1
 */
// class Solution {
//     //Function to sort a linked list of 0s, 1s and 2s.
//     segregate(head) {
//         //your code here
//         let zeroD = new Node("ll");
//         let oneD = new Node("ll");
//         let twoD = new Node("ll");
//         let curr = head;
//         let z = zeroD;
//         let o = oneD;
//         let t = twoD;
//         while (curr !== null) {
//             if (curr.data === 0) {
//                 z.next = curr;
//                 curr = curr.next;
//                 z = z.next
//             } else if (curr.data === 1) {
//                 o.next = curr;
//                 curr = curr.next;
//                 o = o.next
//             } else {
//                 t.next = curr;
//                 curr = curr.next;
//                 t = t.next
//             }
//         }
//         z.next = oneD.next !== null ? oneD.next : twoD.next;
//         o.next = twoD.next;
//         t.next = null;
//         head = zeroD.next
//         zeroD = null;
//         oneD = null;
//         twoD = null
//         return head;
//     }
// }



/**
 * Problem 3 (VVI) - Delete without head pointer
 *
 * Practise link - https://practice.geeksforgeeks.org/problems/delete-without-head-pointer/1
 */
// //Function to delete a node without any reference to head pointer.
// class Solution {
//     deleteNode(delNode)
//     {
//         //your code here
//         if(delNode.next !==null){
//           delNode.data = delNode.next.data;
//           delNode.next = delNode.next.next;
//         }else{
//             delNode.next = null;
//         }
//     }
// }



/**
 * Problem 4 (VVI) - Remove duplicates from an unsorted linked list
 * class Node{
        constructor(data){
            this.data = data;
            this.next = null;
        }
    }
 *
 *
 * Practise Link - https://practice.geeksforgeeks.org/problems/remove-duplicates-from-an-unsorted-linked-list/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article
 */
// class Solution {
//     //Function to remove duplicates from unsorted linked list.
//     removeDuplicates(head) {
//         let s = new Set();
//         let curr = head;
//         let pre;
//         while (curr !== null) {
//             if (s.has(curr.data)) { //duplicates
//                 pre.next = curr.next;
//                 curr.next = null;
//                 curr = pre.next;
//             } else {
//                 s.add(curr.data);
//                 pre = curr;
//                 curr = curr.next;
//             }
//         }
//         return head;
//     }
// }



/**
 * Problem 5 (VVI) -  Remove Nth Node From End of List.
 * class Node{
        constructor(data){
            this.data = data;
            this.next = null;
        }
    }
 *
 *
 * Practise Link - https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 */
// var removeNthFromEnd = function (head, n) {
//     let fast = head;
//     let slow = head;
//     let pre = null;
//     let i = 1;
//     if (head.next === null) {
//         head = null;
//         return head;
//     }
//     while (fast.next !== null) {
//         if (i < n) {
//             fast = fast.next;
//             i++;
//         } else {
//             pre = slow;
//             slow = slow.next;
//             fast = fast.next;
//         }
//     }
//     if (head !== slow) {
//         pre.next = slow.next;
//     } else { // if we need to remove the head itself...
//         head = slow.next;
//     }
//     return head;
// };



/**
 * Problem 6 -  detect and remove loop in Linked List
 * class Node{
        constructor(data){
            this.data = data;
            this.next = null;
        }
    }
 *
 *
 * Practise Link - https://practice.geeksforgeeks.org/problems/remove-loop-in-linked-list/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article
 */
// class Solution {
//     //Function to remove a loop in the linked list.
//     removeLoop(head) {
//         let f = head;
//         let s;
//         let unique = new Set();
//         let run = true;
//         while (run && f !== null) {
//             if (!unique.has(f)) {
//                 unique.add(f);
//                 s = f;
//                 f = f.next;
//             } else {
//                 s.next = null;
//                 run = false;
//             }
//         }
//         return head;
//     }
// }



/**
 * Problem 7 (VVI) -  Merge Two Sorted Lists.
 * class ListNode{
        constructor(val){
            this.val = val;
            this.next = null;
        }
    }
 *
 *
 * Practise Link - https://leetcode.com/problems/merge-two-sorted-lists/description/
 */
// var mergeTwoLists = function (list1, list2) {
//     let dummyNode = new ListNode();
//     let pre = dummyNode;
//     let l1 = list1; let l2 = list2;
//     while (l1 !== null && l2 !== null) {
//         if (l1.val <= l2.val) {
//             pre.next = l1;
//             l1 = l1.next;
//         } else {
//             pre.next = l2;
//             l2 = l2.next;
//         }
//         pre = pre.next;
//     }
//     pre.next = l1 !== null ? l1 : l2;
//     return dummyNode.next;
// };



/**
 * Problem 8 (VVI) -  Merge Sort for two LinkedLists.
 * class Node{
        constructor(val){
            this.data = val;
            this.next = null;
        }
    }
 *
 *
 * Practise Link - https://practice.geeksforgeeks.org/problems/sort-a-linked-list/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article
 */
// class Solution {
//     //Function to sort the given linked list using Merge Sort.
//     mergeSort(head) {
//         if (head == null || head.next == null) return head;
//         let mid = this.findMid(head);
//         let head2 = mid.next;
//         mid.next = null; // divide LL into two parts based on mid
//         let list1 = this.mergeSort(head);
//         let list2 = this.mergeSort(head2);
//         let returnHead = this.mergeTwoSortedLL(list1, list2);
//         return returnHead;
//     }
//     mergeTwoSortedLL(list1, list2) {
//         if (list1 == null || list2 == null) {
//             return list1 != null ? list1 : list2;
//         }
//         let dummyNode = new Node("LL");
//         let pre = dummyNode;
//         let l1 = list1;
//         let l2 = list2;
//         while (l1 != null && l2 != null) {
//             if (l1.data <= l2.data) {
//                 pre.next = l1;
//                 l1 = l1.next
//             } else {
//                 pre.next = l2;
//                 l2 = l2.next
//             }
//             pre = pre.next;
//         }
//         pre.next = l1 != null ? l1 : l2;
//         return dummyNode.next;
//     }
//     findMid(head) {
//         if (head == null || head.next == null) return head;
//         let slow = head;
//         let fast = head;
//         while (fast.next != null && fast.next.next != null) {
//             fast = fast.next.next;
//             slow = slow.next;
//         }
//         return slow;
//     }
// }



/**
 * Problem 9 (VVI) -  Add two numbers represented by linked lists
 * class Node{
        constructor(val){
            this.data = val;
            this.next = null;
        }
    }
 *
 * For Example - the number 190 will be represented by the linked list, 1->9->0->null,
 * similarly 25 by 2->5->null. Sum of these two numbers is 190 + 25 = 215, which will be
 * represented by 2->1->5->null. You are required to return the head of the linked list
 * 2->1->5->null
 *
 * Practise Link - https://practice.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article
 */
// class Solution {
//     //Function to add two numbers represented by linked list.
//     addTwoLists(first, second) {
//         //your code here
//         first = this.reverseLL(first);
//         second = this.reverseLL(second);
//         let addLLNode = this.performAdd(first, second);
//         return addLLNode
//     }
//     performAdd(f, s) {
//         let carry = 0;
//         let dummy = new Node("add");
//         let run = dummy;
//         while (f != null && s != null) {
//             let add = f.data + s.data;
//             let currData = (carry + add);
//             let currNodeData = Math.floor(currData % 10);
//             carry = Math.floor(currData / 10);
//             let newNode = new Node(currNodeData);
//             run.next = newNode;
//             run = run.next;
//             f = f.next;
//             s = s.next;
//         }
//         while (f != null) {
//             let add = f.data;
//             let currData = (carry + add);
//             let currNodeData = Math.floor(currData % 10);
//             carry = Math.floor(currData / 10);
//             let newNode = new Node(currNodeData);
//             run.next = newNode;
//             run = run.next;
//             f = f.next;
//         }
//         while (s != null) {
//             let add = s.data;
//             let currData = (carry + add);
//             let currNodeData = Math.floor(currData % 10);
//             carry = Math.floor(currData / 10);
//             let newNode = new Node(currNodeData);
//             run.next = newNode;
//             run = run.next;
//             s = s.next;
//         }
//         if (carry != 0) {
//             let newNode = new Node(carry);
//             run.next = newNode;
//             run = run.next;
//         }
//         let nH = dummy.next;
//         dummy.next = null;
//         return this.reverseLL(nH);
//     }
//     reverseLL(head) {
//         if (head == null || head.next == null) return head;
//         let ahead = head;
//         let mid = null;
//         let last;
//         while (ahead != null) {
//             last = mid;
//             mid = ahead;
//             ahead = ahead.next;
//             mid.next = last;
//         }
//         return mid;
//     }
// }