package CrackingCodingInterview.Arrays_and_Strings;

/**
 * isUnique
 */
public class isUnique {

  public static void main(String[] args) {
    String inpuString = "abcdeff";
    boolean isUnique = isUniqueChars(inpuString);
    if(isUnique){
      System.out.println(inpuString + " is unique");

    }else{
      System.out.println(inpuString + " is not unique");

    }
  }

  public static boolean isUniqueChars(String str){
    if(str.length() > 128) return false;

    boolean[] char_set = new boolean[128];
    
    for(int i=0; i< str.length(); i++){
      int val = str.charAt(i);

      //System.out.println("inicial " +char_set[val]);

      if(char_set[val]){
        //System.out.println("if " + char_set[val]);
        return false;
      }
      char_set[val] = true;
      //System.out.println("final " +char_set[val]);
    }
    
    return true;
  }
}