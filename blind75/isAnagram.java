
import java.util.HashMap;

// 242. Valid Anagram
// Solved
// Easy
// Topics
// Companies
// Given two strings s and t, return true if t is an 
// anagram
//  of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

public class isAnagram {
  public static boolean checkAnagram(String s, String t) {
    if(s.length() != t.length()) return false;
    HashMap<Character, Integer> hashS = new HashMap<>();
    HashMap<Character, Integer> hashT = new HashMap<>();
    for(int i = 0; i < s.length(); i++){
      hashS.put(s.charAt(i), hashS.getOrDefault(s.charAt(i), 0) + 1);
      hashT.put(t.charAt(i), hashT.getOrDefault(t.charAt(i), 0) + 1);
    }
    return hashS.equals(hashT);
    }
  
    public static void main(String[] args) {
      String s = "anagram";
      String t = "nagaram";
      System.out.println(checkAnagram(s, t));

  }
}
