/**
 * 1346. Check If N and Its Double Exist
Solved
Easy
Topics
Companies
Hint
Given an array arr of integers, check if there exist two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
 

Example 1:

Input: arr = [10,2,5,3]
Output: true
Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
Example 2:

Input: arr = [3,1,7,11]
Output: false
Explanation: There is no i and j that satisfy the conditions.
 

Constraints:

2 <= arr.length <= 500
-103 <= arr[i] <= 103

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    
    for(let i=0;i<arr.length;i++){
        let index = search(arr,arr[i]*2);
        if(index >= 0 && i != index){
            return true;
        }
    }
    return false;
    
    

    
};

function search(arr,k){
    for(let i=0;i<arr.length;i++){
        if(arr[i] == k){
            return i;
        }
    }
    return -1;
}