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

//Definition for singly-linked list.
class ListNode {
  int val;
  ListNode? next;

  ListNode(this.val);
}

ListNode? findMiddleNode(ListNode? head) {
  ListNode? slow = head;
  ListNode? fast = head;

  while (fast != null && fast.next != null) {
    slow = slow!.next;
    fast = fast.next!.next;
  }
  return slow;
}

void main() {
  ListNode head = ListNode(1)
    ..next = ListNode(2)
    ..next!.next = ListNode(3)
    ..next!.next!.next = ListNode(4)
    ..next!.next!.next!.next = ListNode(5);

  ListNode? middle = findMiddleNode(head);

  print("Middle node and subsequent nodes:");
  while (middle != null) {
    print(middle.val);
    middle = middle.next;
  }
}
