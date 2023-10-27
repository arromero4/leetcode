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

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

void main() {
  List<int> nums = [1,0,2,3,0,4,5,0];
  print(duplicateZeros(nums));

}

List<int> duplicateZeros(List<int> arr) {
    //Input: arr = [1,0,2,3,0,4,5,0]
    //                           ^
    //Output:     [1,0,0,2,3,0,0,4] 
    //                          ^ 
    //queue shift first [0]
    //queue shift first [2,3]
    //queue shift first [3,0,0]
    //queue shift first [0,4]
    //queue shift first [4,5]
    //queue shift first [5,0,0]

    List<int> queue = [];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] == 0){
        queue.add(0);
        queue.add(0);
      }else{
        queue.add(arr[i]);
      }
      int first = queue.removeAt(0);
      arr[i] = first;
    }

};

