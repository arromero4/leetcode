package CrackingCodingInterview.Arrays_and_Strings;

public class permutation2 {
  public static void main(String[] args) {
    String isStringS = "isStringS";
    String iStringT = "iStringT";
    System.out.println(isPermutation(isStringS, iStringT));

  }

  static boolean isPermutation(String s, String t){
    if(s.length() != t.length()){
      return false;
    }
   
    int[] letters = new int[128];//Assumption
    char[] s_array = s.toCharArray();

    for(char c : s_array){
      letters[c]++;
    }

    for(int i = 0; i < t.length(); i++){
      int c = (int) t.charAt(i);
      letters[c]--;
      if(letters[c] < 0){
        return false;
      }
    }
    return true;

  }

}
