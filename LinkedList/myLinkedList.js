// 707. Design Linked List
// Solved
// Medium
// Topics
// Companies
// Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
// A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
// If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

// Implement the MyLinkedList class:

// MyLinkedList() Initializes the MyLinkedList object.
// int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
// void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
// void addAtTail(int val) Append a node of value val as the last element of the linked list.
// void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
// void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
 

// Example 1:

// Input
// ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
// [[], [1], [3], [1, 2], [1], [1], [1]]
// Output
// [null, null, null, null, 2, null, 3]

// Explanation
// MyLinkedList myLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(3);
// myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
// myLinkedList.get(1);              // return 2
// myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
// myLinkedList.get(1);              // return 3
 

// Constraints:

// 0 <= index, val <= 1000
// Please do not use the built-in LinkedList library.
// At most 2000 calls will be made to get, addAtHead, addAtTail, addAtIndex and deleteAtIndex.

class Node{
    constructor(val = null, prev=null, next=null){
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class MyLinkedList{
      constructor(){
        this.head = new Node();
        this.tail = new Node();
        this.length = 0;
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    
    get(index){
        if(index < 0 || index >= this.length) return - 1;
        let curNode = this.head.next;
        while(index--) curNode = curNode.next;
        return curNode.val;
    }
    
    addAtHead(val){
        let prev = this.head;
        let next = this.head.next;
        let node = new Node(val, prev, next);
        
        prev.next = node;
        next.prev = node;
        
        this.length++;
    }
    
    addAtTail(val){
        let prev = this.tail.prev;
        let next = this.tail;
        let node = new Node(val, prev, next);
        
        prev.next = node;
        next.prev = node;
        this.length++;
    }
    
    addAtIndex(index,val){
        if(index < 0 || index > this.length) return null;
        if(index === this.length){
            this.addAtTail(val);
            return
        }
        
        let prev = this.head;
        
        while(index--) prev = prev.next;
        
        let next = prev.next;
        let node = new Node(val, prev, next);
        
        prev.next = node;
        next.prev = node;
        this.length++;
        
    }
    deleteAtIndex(index){
        if(index < 0 || index >= this.length) return null;
        let prev = this.head;
        while(index--) prev = prev.next;
        let next = prev.next.next;
        prev.next = next;
        next.prev = prev;
        this.length--;
    }
}



/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */