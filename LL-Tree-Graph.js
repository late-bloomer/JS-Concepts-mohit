//********** Creation of LL and operation performed *************/

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor(head = null) {
//         this.head = head;
//         this.size = 0;
//     }
//     add(data) {
//         let newNode = new Node(data);
//         if (this.head === null) {
//             this.head = newNode;
//         } else {
//             let curr = this.head;
//             while (curr.next !== null) {
//                 curr = curr.next;
//             }
//             curr.next = newNode;
//         }
//         this.size++;
//     }
//     printList() {
//         let curr = this.head;
//         let str = "";
//         while (curr !== null) {
//             str = str + curr.data + " "
//             curr = curr.next;
//         }
//         console.log("LL: " + str);

//     }
//     size_of_list() {
//         console.log("LL Size: " + this.size);
//     }
//     isEmpty() {
//         if (this.head === null) console.log("LL is empty !!!");
//         else console.log("LL is not empty !!!");
//     }
//     removeElement(element) {
//         let curr = this.head;
//         let pre = null;
//         while (curr !== null) {
//             if (curr.data === element) {
//                 pre.next = curr.next;
//                 curr.next = null;
//                 this.size--;
//                 return "yes";;
//             } else {
//                 pre = curr;
//                 curr = curr.next;
//             }
//         }
//         return "Element is not present in LL !!!";
//     }
//     indexOf(element) {
//         let index = 0;
//         let curr = this.head;
//         while (curr) {
//             if (curr.data === element) {
//                 return index;
//             } else {
//                 curr = curr.next;
//                 index++;
//             }
//         }
//         return -1;
//     }

//     insertAt(element, index) {
//         let curr = this.head;
//         let currIndex = 0;
//         let pre = null
//         const newNode = new Node(element);
//         while (curr) {
//             if (currIndex === index) {
//                 pre.next = newNode;
//                 newNode.next = curr;
//                 this.size++;
//                 break;
//             } else {
//                 pre = curr;
//                 curr = curr.next;
//                 currIndex++;
//             }
//         }
//         console.log(`Inserted ${element} at index ${index}`);
//     }

//     removeFrom(index) {
//         let curr = this.head;
//         let currIndex = 0;
//         let pre = null;
//         while (curr) {
//             if (index === currIndex) {
//                 pre.next = curr.next;
//                 curr.next = null;
//                 this.size--;
//                 break;
//             } else {
//                 pre = curr;
//                 curr = curr.next;
//                 currIndex++;
//             }
//         }
//         console.log(`Removed, element at index ${index}`);
//     }
//     reverseLL() {
//         let first = this.head;
//         let mid = null;
//         let last;
//         while (first) {
//             last = mid;
//             mid = first;
//             first = first.next;
//             mid.next = last;
//         }
//         this.head = mid;
//         console.log("Reversed !!");
//     }
//     middleElement() {
//         if (this.head === null) console.log("LL is Empty, so no middle element !!!");
//         else {
//             let fast = this.head;
//             let slow = this.head;
//             while (fast && fast.next) {
//                 fast = fast.next.next;
//                 slow = slow.next;
//             }
//             console.log("middle element: ", slow.data);
//         }
//     }
//     getHead() {
//         return this.head
//     }
// }

// var ll = new LinkedList();

// ll.isEmpty()

// ll.add(10);
// ll.add(20);
// ll.add(30);
// ll.add(40);
// ll.add(50);

// ll.printList();

// ll.size_of_list()

// ll.isEmpty()

// console.log("Is element removed ? " + ll.removeElement(50));

// ll.printList();

// console.log("Is element removed ? " + ll.removeElement(50));

// ll.printList();

// console.log("Is element removed ? " + ll.removeElement(30));

// ll.printList();

// ll.add(50);
// ll.add(30);

// ll.printList();

// console.log("Index of 40: " + ll.indexOf(40));
// console.log("Index of 10: " + ll.indexOf(10));
// console.log("Index of 30: " + ll.indexOf(30));

// ll.insertAt(60, 2);

// ll.printList();

// ll.removeFrom(3);

// ll.printList();

// ll.reverseLL();

// ll.printList();

// ll.middleElement();

// ll.add(50);
// ll.add(150);

// ll.printList();

// console.log("----------------")

// var ll2 = new LinkedList();

// ll2.isEmpty()

// ll2.add(10);
// ll2.add(20);
// ll2.add(40);
// ll2.add(40);
// ll2.add(50);
// ll2.add(50);
// ll2.add(50);
// ll2.add(60);

// ll2.printList();

// removeDuplicatesLLSortedOrder(ll2.getHead());

// function removeDuplicatesLLSortedOrder(head) { // when LL is in sorted order
//     if (head === null) console.log("LL is empty !!!");
//     else {
//         let curr = head;
//         let ahead = curr.next;
//         while (ahead) {
//             if (ahead.data === curr.data) {
//                 curr.next = ahead.next;
//                 ahead.next = null;
//                 ahead = curr.next
//             } else {
//                 curr = ahead;
//                 ahead = ahead.next;
//             }
//         }
//     }
// }

// ll2.printList();

// console.log("----------------")

// var ll3 = new LinkedList();

// ll3.isEmpty()

// ll3.add(2);
// ll3.add(2);
// ll3.add(2);
// ll3.add(2);
// ll3.add(3);
// ll3.add(4);
// ll3.add(4);
// ll3.add(6);

// ll3.printList();

// removeDuplicatesLLSortedOrder(ll3.getHead());

// ll3.printList();


/*********************************** Start: Binary Tree ******************************/

// class TreeNode {
//     constructor(data) {
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }

// class Tree {
//     constructor(root = null) {
//         this.root = root;
//     }

//     add(data) {
//         let newNode = new TreeNode(data);
//         if (this.root == null) {
//             this.root = newNode;
//         } else {
//             this.insertNodeAtRightPlace(this.root, newNode)
//         }
//         return this;
//     }
//     insertNodeAtRightPlace(currNode, newNode) {
//         if (newNode.data < currNode.data) {
//             if (currNode.left == null) {
//                 currNode.left = newNode
//             } else {
//                 this.insertNodeAtRightPlace(currNode.left, newNode)
//             }
//         } else if (newNode.data > currNode.data) {
//             if (currNode.right == null) {
//                 currNode.right = newNode
//             } else {
//                 this.insertNodeAtRightPlace(currNode.right, newNode)
//             }
//         }
//     }

//     inorder_traversal_recurrsive() {
//         if (this.root == null) return;
//         let nodeArr = []
//         this.inorderRecurr(this.root, nodeArr);
//         console.log("inorder_traversal_recurrsive: ", nodeArr.join("-"));
//     }
//     inorderRecurr(root, nodeArr) {
//         if (root !== null) {
//             this.inorderRecurr(root.left, nodeArr);
//             nodeArr.push(root.data)
//             //console.log(root.data + " ");
//             this.inorderRecurr(root.right, nodeArr);
//         }
//     }

//     inorderIterative() {
//         if (this.root == null) return;
//         else {
//             let curr = this.root;
//             let result = [];
//             let stack = [];
//             while (curr !== null || stack.length > 0) {
//                 while (curr !== null) {
//                     stack.push(curr);
//                     curr = curr.left;
//                 }
//                 let top = stack.pop();
//                 result.push(top.data);
//                 curr = top.right;
//             }
//             console.log("inorderIterative: ", result.join("-"));
//         }
//     }

//     preorder_traversal_recurrsive() {
//         if (this.root == null) return;
//         let nodeArr = []
//         this.preorderRecurr(this.root, nodeArr);
//         console.log("preorder_traversal_recurrsive: ", nodeArr.join("-"));
//     }
//     preorderRecurr(root, nodeArr) {
//         if (root !== null) {
//             nodeArr.push(root.data)
//             this.preorderRecurr(root.left, nodeArr);
//             this.preorderRecurr(root.right, nodeArr);
//         }
//     }

//     preorderIterative() {
//         if (this.root == null) return;
//         else {
//             let curr = this.root;
//             let result = [];
//             let stack = [];
//             while (curr !== null || stack.length > 0) {
//                 while (curr !== null) {
//                     stack.push(curr);
//                     result.push(curr.data);
//                     curr = curr.left
//                 }
//                 let top = stack.pop();
//                 curr = top.right;
//             }

//             console.log("preorderIterative: ", result.join("-"));
//         }
//     }

//     postorder_traversal_recurrsive() {
//         if (this.root == null) return;
//         let nodeArr = []
//         this.postorderRecurr(this.root, nodeArr);
//         console.log("postorder_traversal_recurrsive: ", nodeArr.join("-"));
//     }
//     postorderRecurr(root, nodeArr) {
//         if (root !== null) {
//             this.postorderRecurr(root.left, nodeArr);
//             this.postorderRecurr(root.right, nodeArr);
//             nodeArr.push(root.data)
//         }
//     }

//     postorderIterative() {
//         if (this.root == null) return;
//         else {
//             let curr = this.root;
//             let stack1 = [curr];
//             let stack2 = [];
//             while (stack1.length > 0) {
//                 let top = stack1.pop();
//                 stack2.push(top.data);
//                 if (top.left !== null)
//                     stack1.push(top.left);
//                 if (top.right !== null)
//                     stack1.push(top.right);
//             }
//             console.log("postorderIterative: ", stack2.reverse().join("-"));
//         }
//     }

//     rightView() {
//         if (this.root == null) return;
//         else {
//             let curr = this.root;
//             let result = [];
//             let queue = [curr];
//             while (queue.length > 0) {
//                 let pre_stamped_size = queue.length;
//                 result.push(queue[pre_stamped_size - 1].data);
//                 while (pre_stamped_size > 0) {
//                     let first = queue.shift();
//                     if (first.left !== null) queue.push(first.left);
//                     if (first.right !== null) queue.push(first.right);
//                     pre_stamped_size--;
//                 }
//             }
//             console.log("rightView: ", result.join("-"));
//         }
//     }

//     leftView() {
//         if (this.root == null) return;
//         else {
//             let curr = this.root;
//             let queue = [curr];
//             let result = [];
//             while (queue.length > 0) {
//                 let pre_stamped_size = queue.length;
//                 result.push(queue[0].data)
//                 while (pre_stamped_size > 0) {
//                     let first = queue.shift();
//                     if (first.left !== null) queue.push(first.left)
//                     if (first.right !== null) queue.push(first.right)
//                     pre_stamped_size--;
//                 }
//             }
//             console.log("leftView: ", result.join("-"));
//         }
//     }

//     zigzag() {
//         if (this.root == null) return
//         else {
//             let curr = this.root;
//             let queue1 = [curr];
//             let queue2 = [];
//             let result = [];
//             while (queue1.length > 0 || queue2.length > 0) {
//                 if (queue1.length > 0) {
//                     let pre_size = queue1.length;
//                     while (pre_size-- > 0) {
//                         let first = queue1.shift();
//                         result.push(first.data);
//                         if (first.left !== null) queue2.push(first.left)
//                         if (first.right !== null) queue2.push(first.right)
//                     }
//                 }
//                 if (queue2.length > 0) {
//                     let pre_size = queue2.length;
//                     while (pre_size-- > 0) {
//                         let top = queue2.pop();
//                         result.push(top.data);
//                         if (top.right !== null) queue1.unshift(top.right)
//                         if (top.left !== null) queue1.unshift(top.left)
//                     }
//                 }
//             }
//             console.log("zigzag: ", result.join("-"));
//         }
//     }
// }
// let tree = new Tree();
// tree.add(4).add(2).add(1).add(3).add(6).add(5).add(7);

// tree.inorder_traversal_recurrsive();
// tree.inorderIterative();

// tree.preorder_traversal_recurrsive();
// tree.preorderIterative();

// tree.postorder_traversal_recurrsive();
// tree.postorderIterative();

// tree.rightView();
// tree.leftView();

// tree.zigzag();

/************** End: Tree **********************/

/************** Start: DFS ***************/

// var V = 6;
// adj = [[1, 2, 4], [0], [0, 5], [4], [0, 3], [2]];
// function DFS(V, adj) {
//   let visited = new Array(V).fill(false);
//   let arr = [];
//   for (let i = 0; i < V; i++) {
//     if (!visited[i]) callDFSUtils(i, V, adj, visited, arr);
//   }
//   console.log(arr);
// }
// function callDFSUtils(i, V, adj, visited, arr) {
//   if (visited[i]) return;
//   else {
//     visited[i] = true;
//     arr.push(i);
//     let curr = adj[i];
//     for (let j = 0; j < curr.length; j++) {
//       if (!visited[curr[j]]) callDFSUtils(curr[j], V, adj, visited, arr);
//     }
//   }
// }
// DFS(V, adj); //[0, 1, 2, 5, 4, 3]

/************** End: DFS ***************/

/************** Start: BFS ***************/

// var V = 6;
// adj = [[1, 2, 4], [0], [0, 5], [4], [0, 3], [2]];
// function BFS(V, adj) {
//   let visited = new Array(V).fill(false);
//   let arr = [];
//   let que = [];
//   que.push(0);
//   while (que.length) {
//     let front = que.shift();
//     if (!visited[front]) {
//       visited[front] = true;
//       arr.push(front);
//       let curr = adj[front];
//       for (let i = 0; i < curr.length; i++) {
//         if (!visited[curr[i]]) que.push(curr[i]);
//       }
//     }
//   }
//   console.log("BFS---->", arr);
// }

// BFS(V, adj); //[0, 1, 2, 4, 5, 3]

/************** End: BFS ***************/

/********* Start: Given graph is tree? **********/

// function isTree(v, adj) {
//   let visited = new Array(v).fill(false);
//   let parent = -1;
//   if (isCycle(v, adj, visited, parent, 0)) {
//     return false;
//   }
//   for (let i = 0; i < visited.length; i++) {
//     if (visited[i] === false) return false;
//   }
//   return true;
// }
// function isCycle(v, adj, visited, parent, current_node) {
//   visited[current_node] = true;
//   for (let itm of adj[current_node]) {
//     if (!visited[itm]) {
//       if (isCycle(v, adj, visited, current_node, itm)) return true;
//     } else if (itm !== parent) return true;
//   }
//   return false;
// }
// var adj = [[1, 2, 3], [0], [0], [0, 4], [3]];
// var v = 5;
// console.log(isTree(v, adj)); // tree

// var adj2 = [[1, 2, 3], [0, 2], [0, 1], [0, 4], [3]];
// var v2 = 5;
// console.log(isTree(v2, adj2)); // graph

// var adj3 = [[1, 2, 3], [0], [0], [0], [null]];
// var v3 = 5;
// console.log(isTree(v3, adj3)); // forest

/********* End: Given graph is tree? **********/
