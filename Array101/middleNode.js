/**
 * 876. Middle of the Linked List
 * Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.
Example 1:


Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:


Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 

Constraints:

The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100
 */

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let head = null;
    let current = null;
  
    for (const val of arr) {
      const newNode = new ListNode(val);
      if (!head) {
        head = newNode;
        current = newNode;
      } else {
        current.next = newNode;
        current = newNode;
      }
    }
  
    return head;
  }

var findMiddleNode = function(head) {
    let middle = head;
    let end = head;
    while(end != null && end.next != null){
        end = end.next.next;
        middle = middle.next;
    }
    return middle;
    //time complexity O(n)
    //space complexity O(1)

};

// Helper function to print the linked list
function printLinkedList(head) {
    let current = head;
    const result = [];
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    console.log(result);
  }
  

const input = [1, 2, 3, 4, 5];
const head = createLinkedList(input);
const middleNode = findMiddleNode(head);
printLinkedList(middleNode);


