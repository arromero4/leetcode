package Array101;
/**
 * 
 * Max Consecutive Ones

Solution
Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2
 */
class findMaxConsecutiveOnes {
    public static void main(String[] args){
        int[] nums = {1,1,0,1,1,1};
        System.out.println(findMaxConsecutiveOnesM(nums));
    }
    public static int findMaxConsecutiveOnesM(int[] nums) {
        int largest = 0;
        int count = 0; 
        
        for(int i=0;i<nums.length;i++){
            if(nums[i] == 1){
                count++;
                if(largest<count){
                    largest = count;
                }      
            }else{
                count = 0;
            }
        }
        return largest;
    }
}

