// 705. Design HashSet
// Solved
// Easy
// Topics
// Companies
// Design a HashSet without using any built-in hash table libraries.

// Implement MyHashSet class:

// void add(key) Inserts the value key into the HashSet.
// bool contains(key) Returns whether the value key exists in the HashSet or not.
// void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
 

// Example 1:

// Input
// ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
// [[], [1], [2], [1], [3], [2], [2], [2], [2]]
// Output
// [null, null, null, true, false, null, true, null, false]

// Explanation
// MyHashSet myHashSet = new MyHashSet();
// myHashSet.add(1);      // set = [1]
// myHashSet.add(2);      // set = [1, 2]
// myHashSet.contains(1); // return True
// myHashSet.contains(3); // return False, (not found)
// myHashSet.add(2);      // set = [1, 2]
// myHashSet.contains(2); // return True
// myHashSet.remove(2);   // set = [1]
// myHashSet.contains(2); // return False, (already removed)
 

// Constraints:

// 0 <= key <= 106
// At most 104 calls will be made to add, remove, and contains.


var MyHashSet = function() {
    this.keyRange = 997
    this.buckets = []

    for(let i = 0; i < this.keyRange; i++) {
      this.buckets[i] = new Bucket()
    }
};

MyHashSet.prototype.hash = function(key) {
  return key % this.keyRange
}

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    let idx = this.hash(key)
    this.buckets[idx].insert(key)
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  let idx = this.hash(key)
  this.buckets[idx].delete(key)
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  let idx = this.hash(key)
  return this.buckets[idx].exists(key)
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

const Node = function(val, next=null) {
  this.val = val;
  this.next = next;
}

const Bucket = function(){
  this.head = new Node(-1)
}

Bucket.prototype.exists = function(key) {
  let curr = this.head;

  while(curr){
    if(curr.val == key){
      return true;
    }
    curr = curr.next;
  }
  return false;
}

Bucket.prototype.insert = function(key){
  if(!this.exists(key)){
    const newNode = new Node(key, this.head.next);
    this.head.next = newNode
  }
}

Bucket.prototype.delete = function(key){
  let prev = this.head
  let curr = this.head.next

  while(curr){
    if(curr.val == key){
      prev.next = curr.next
      return null
    }
    prev = curr
    curr = curr.next

  }

  return null
}

