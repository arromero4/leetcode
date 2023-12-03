package Array101;
/**
 * 1089. Duplicate Zeros
Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

 

Example 1:

Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
Example 2:

Input: arr = [1,2,3]
Output: [1,2,3]
Explanation: After calling your function, the input array is modified to: [1,2,3]
 

Constraints:

1 <= arr.length <= 104
0 <= arr[i] <= 9
 */

import java.util.LinkedList;
import java.util.Queue;

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
class Solution {
    public void duplicateZeros(int[] arr) {
            /**
    create new array
    shift to the right every item
    push 2 zeros if item is 0
    if not just push item
    return new array
     */
    Queue<Integer> queue = new LinkedList<>();
    for(int i=0;i<arr.length;i++){
        if(arr[i] == 0){
            queue.add(0);
            queue.add(0);
        }else{
            queue.add(arr[i]);
        }
        Integer first = queue.poll();
        arr[i] = first;
        
    }
    }
}
