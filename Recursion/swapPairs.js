// 24. Swap Nodes in Pairs
// Solved
// Medium
// Topics
// Companies
// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 

// Example 1:

// Input: head = [1,2,3,4]

// Output: [2,1,4,3]

// Explanation:



// Example 2:

// Input: head = []

// Output: []

// Example 3:

// Input: head = [1]

// Output: [1]

// Example 4:

// Input: head = [1,2,3]

// Output: [2,1,3]

 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  // Create a dummy node that points to the head
     let dummy = new ListNode(0);
     dummy.next = head;
     
     // Initialize pointers
     let prev = dummy;
     let curr = head;
     console.log("Initial List:", listToArray(dummy.next));
     // Traverse the list in pairs
     while (curr !== null && curr.next !== null) {
         // Nodes to be swapped
         let first = curr;
         let second = curr.next;
         console.log("\nSwapping nodes:", first.val, "and", second.val);
         // Swapping
         prev.next = second;   // prev now points to the second node
         first.next = second.next;  // first node points to the node after the second
         second.next = first;   // second node points to the first
         console.log("List after swapping:", listToArray(dummy.next));
 
         // Move pointers forward for the next pair
         prev = first;
         curr = first.next;
         console.log(head)
     }
     console.log("\nFinal swapped list:", listToArray(dummy.next));
     // Return the new head (dummy.next points to the new head after swaps)
     return dummy.next;
 };
 
 // Helper function to convert a linked list back to an array
 function listToArray(head) {
     let arr = [];
     let current = head;
     while (current !== null) {
         arr.push(current.val);
         current = current.next;
     }
     return arr;
 }